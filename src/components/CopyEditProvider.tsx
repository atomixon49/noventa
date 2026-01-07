"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyEditorPanel } from "./CopyEditorPanel";

export type CopySelectorType = "copyId" | "cssPath";

export type CopyChange = {
  route: string;
  lang: string;
  selectorType: CopySelectorType;
  copyId?: string;
  selector: string;
  domPath: string;
  before: string;
  after: string;
  updatedAt: string;
};

type CopyEditContextValue = {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
  getOverride: (lang: string, copyId: string) => string | undefined;
  setOverride: (args: {
    lang: string;
    route: string;
    copyId: string;
    selector: string;
    domPath: string;
    before: string;
    after: string;
  }) => void;
  upsertFreeChange: (args: {
    lang: string;
    route: string;
    selector: string;
    domPath: string;
    before: string;
    after: string;
  }) => void;
  changes: CopyChange[];
  downloadJson: () => void;
  clearAll: () => void;
  openEditorFor: (payload: CopyEditorSelection) => void;
};

type CopyEditorSelection = {
  selectorType: CopySelectorType;
  copyId?: string;
  selector: string;
  domPath: string;
  before: string;
  element?: HTMLElement | null;
};

const STORAGE_KEY = "noventa_copy_changes_v1";
const AUTH_KEY = "noventa_copy_edit_auth_v1";

// Valor por defecto del contexto para SSR
const defaultContextValue: CopyEditContextValue = {
  enabled: false,
  setEnabled: () => {},
  getOverride: () => undefined,
  setOverride: () => {},
  upsertFreeChange: () => {},
  changes: [],
  downloadJson: () => {},
  clearAll: () => {},
  openEditorFor: () => {},
};

const CopyEditContext = createContext<CopyEditContextValue>(defaultContextValue);

function safeJsonParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function nowIso() {
  return new Date().toISOString();
}

function escapeCssIdent(value: string) {
  return (globalThis as any).CSS?.escape ? (globalThis as any).CSS.escape(value) : value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function cssPathFor(el: Element): string {
  if (!(el instanceof Element)) return "";
  if ((el as HTMLElement).id) return `#${escapeCssIdent((el as HTMLElement).id)}`;

  const parts: string[] = [];
  let current: Element | null = el;

  while (current && current.nodeType === 1) {
    const tag = current.tagName.toLowerCase();

    if ((current as HTMLElement).id) {
      parts.unshift(`${tag}#${escapeCssIdent((current as HTMLElement).id)}`);
      break;
    }

    const parentEl: HTMLElement | null = current.parentElement;
    if (!parentEl) {
      parts.unshift(tag);
      break;
    }

    const siblings = (Array.from(parentEl.children) as Element[]).filter(
      (c: Element) => c.tagName === current!.tagName
    );
    const index = siblings.indexOf(current) + 1;
    const suffix = siblings.length > 1 ? `:nth-of-type(${index})` : "";

    parts.unshift(`${tag}${suffix}`);
    current = parentEl;
  }

  return parts.join(" > ");
}

function domPathFor(el: Element): string {
  const path: string[] = [];
  let current: Element | null = el;

  while (current) {
    const tag = current.tagName.toLowerCase();
    const parentEl: HTMLElement | null = current.parentElement;
    if (!parentEl) {
      path.unshift(tag);
      break;
    }
    const index = (Array.from(parentEl.children) as Element[]).indexOf(current) + 1;
    path.unshift(`${tag}[${index}]`);
    current = parentEl;
  }

  return path.join("/");
}

function isEditableTarget(target: EventTarget | null): target is HTMLElement {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable) return false;
  return true;
}

function pickReadableText(el: HTMLElement) {
  const text = (el.innerText || el.textContent || "").trim();
  return text.replace(/\s+/g, " ").trim();
}

type StoredState = {
  changes: CopyChange[];
};

// Componente interno que usa useSearchParams, envuelto en Suspense
function CopyEditProviderInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lang } = useLanguage();

  // Verificar si estamos en el cliente
  const isClient = typeof window !== "undefined";

  const [enabled, setEnabled] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [changes, setChanges] = useState<CopyChange[]>([]);
  const [selection, setSelection] = useState<CopyEditorSelection | null>(null);

  const lastClickedElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isClient) return;
    const initial = safeJsonParse<StoredState>(window.localStorage.getItem(STORAGE_KEY));
    if (initial?.changes) setChanges(initial.changes);

    const storedAuth = window.localStorage.getItem(AUTH_KEY);
    if (storedAuth === "1") setAuthorized(true);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const state: StoredState = { changes };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [changes, isClient]);

  useEffect(() => {
    if (!isClient) return;
    const qp = searchParams?.get("copyEdit");
    if (qp !== "1") return;

    const token = searchParams?.get("token") || "";
    const requiredToken = process.env.NEXT_PUBLIC_COPY_EDIT_TOKEN || "";
    const ok = requiredToken ? token === requiredToken : true;
    if (!ok) return;

    window.localStorage.setItem(AUTH_KEY, "1");
    setAuthorized(true);
    setEnabled(true);
  }, [searchParams, isClient]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!e.key) return;
      const key = e.key.toLowerCase();
      if (e.ctrlKey && e.shiftKey && key === "b") {
        e.preventDefault();
        if (!authorized) return;
        setEnabled((v) => !v);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [authorized]);

  useEffect(() => {
    if (!isClient) return;
    function onClick(e: MouseEvent) {
      if (!enabled) return;
      if (!e.altKey) return;
      if (!isEditableTarget(e.target)) return;

      const el = e.target as HTMLElement;
      const before = pickReadableText(el);
      if (!before) return;

      const copyId = el.getAttribute("data-copy-id") || undefined;
      const selectorType: CopySelectorType = copyId ? "copyId" : "cssPath";
      const selector = copyId ? `[data-copy-id=\"${copyId}\"]` : cssPathFor(el);
      const domPath = domPathFor(el);

      lastClickedElRef.current = el;
      setSelection({ selectorType, copyId, selector, domPath, before, element: el });
    }

    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [enabled, isClient]);

  const getOverride = useCallback(
    (l: string, copyId: string) => {
      const found = changes
        .slice()
        .reverse()
        .find((c) => c.lang === l && c.copyId === copyId && c.selectorType === "copyId");
      return found?.after;
    },
    [changes]
  );

  const upsertChange = useCallback((next: CopyChange) => {
    setChanges((prev) => {
      const idx = prev.findIndex((c) => c.lang === next.lang && c.selector === next.selector);
      if (idx === -1) return [next, ...prev];
      const copy = prev.slice();
      copy[idx] = next;
      return copy;
    });
  }, []);

  const setOverride = useCallback(
    (args: {
      lang: string;
      route: string;
      copyId: string;
      selector: string;
      domPath: string;
      before: string;
      after: string;
    }) => {
      upsertChange({
        route: args.route,
        lang: args.lang,
        selectorType: "copyId",
        copyId: args.copyId,
        selector: args.selector,
        domPath: args.domPath,
        before: args.before,
        after: args.after,
        updatedAt: nowIso(),
      });
    },
    [upsertChange]
  );

  const upsertFreeChange = useCallback(
    (args: {
      lang: string;
      route: string;
      selector: string;
      domPath: string;
      before: string;
      after: string;
    }) => {
      upsertChange({
        route: args.route,
        lang: args.lang,
        selectorType: "cssPath",
        selector: args.selector,
        domPath: args.domPath,
        before: args.before,
        after: args.after,
        updatedAt: nowIso(),
      });
    },
    [upsertChange]
  );

  const downloadJson = useCallback(() => {
    if (!isClient) return;
    const payload = {
      app: "noventa-landing",
      generatedAt: nowIso(),
      changes,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `copy-changes-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [changes, isClient]);

  const clearAll = useCallback(() => {
    if (!isClient) return;
    setChanges([]);
    window.localStorage.removeItem(STORAGE_KEY);
  }, [isClient]);

  const openEditorFor = useCallback((payload: CopyEditorSelection) => {
    setSelection(payload);
  }, []);

  const value = useMemo<CopyEditContextValue>(() => {
    return {
      enabled,
      setEnabled,
      changes,
      getOverride,
      setOverride,
      upsertFreeChange,
      downloadJson,
      clearAll,
      openEditorFor,
    };
  }, [enabled, changes, getOverride, setOverride, upsertFreeChange, downloadJson, clearAll, openEditorFor]);

  const route = pathname || "/";

  return (
    <CopyEditContext.Provider value={value}>
      {children}
      <CopyEditorPanel
        enabled={enabled}
        route={route}
        currentLang={lang}
        changes={changes}
        downloadJson={downloadJson}
        clearAll={clearAll}
        selection={selection}
        onClose={() => setSelection(null)}
        onDisable={() => setEnabled(false)}
        onApply={(after: string) => {
          if (!selection) return;

          if (selection.selectorType === "copyId" && selection.copyId) {
            value.setOverride({
              lang,
              route,
              copyId: selection.copyId,
              selector: selection.selector,
              domPath: selection.domPath,
              before: selection.before,
              after,
            });
          } else {
            value.upsertFreeChange({
              lang,
              route,
              selector: selection.selector,
              domPath: selection.domPath,
              before: selection.before,
              after,
            });

            const el = selection.element || lastClickedElRef.current;
            if (el) el.textContent = after;
          }

          setSelection(null);
        }}
      />
    </CopyEditContext.Provider>
  );
}

// Wrapper que envuelve el componente interno con Suspense
// Durante SSR, el contexto usa valores por defecto
export function CopyEditProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <CopyEditContext.Provider value={defaultContextValue}>
        {children}
      </CopyEditContext.Provider>
    }>
      <CopyEditProviderInner>{children}</CopyEditProviderInner>
    </Suspense>
  );
}

export function useCopyEdit() {
  const ctx = useContext(CopyEditContext);
  return ctx;
}

export function CopyText({
  copyId,
  defaultText,
  as,
  className,
}: {
  copyId: string;
  defaultText: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const { enabled, getOverride, openEditorFor } = useCopyEdit();
  const { lang } = useLanguage();
  const pathname = usePathname();

  const Tag = (as || "span") as any;
  const after = getOverride(lang, copyId);
  const rendered = after ?? defaultText;

  return (
    <Tag
      data-copy-id={copyId}
      className={className}
      onClick={(e: React.MouseEvent) => {
        if (!enabled) return;
        // Si el usuario presiona Alt, permitir edición pero no bloquear navegación
        // Si no presiona Alt, permitir navegación normal
        if (!e.altKey) {
          // Si está dentro de un Link, permitir navegación normal
          const parentLink = (e.currentTarget as HTMLElement).closest('a');
          if (parentLink) return;
        }
        e.preventDefault();
        e.stopPropagation();
        const el = e.currentTarget as unknown as HTMLElement;
        openEditorFor({
          selectorType: "copyId",
          copyId,
          selector: `[data-copy-id=\"${copyId}\"]`,
          domPath: domPathFor(el),
          before: defaultText,
          element: el,
        });
      }}
      style={
        enabled
          ? {
              outline: "1px dashed rgba(34, 211, 238, 0.55)",
              outlineOffset: 2,
              cursor: "pointer",
            }
          : undefined
      }
      title={enabled ? `copyId: ${copyId} (Alt+Click también funciona)` : undefined}
      data-copy-route={pathname || "/"}
    >
      {rendered}
    </Tag>
  );
}

export function useCopyString(copyId: string, defaultText: string) {
  const { getOverride } = useCopyEdit();
  const { lang } = useLanguage();
  return getOverride(lang, copyId) ?? defaultText;
}
