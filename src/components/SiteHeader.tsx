"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { CopyText } from "@/components/CopyEditProvider";
import { Sun, Moon, ChevronDown } from "lucide-react";

const languages = [
  { code: "de" as const, flag: "🇩🇪", name: "Deutsch" },
  { code: "es" as const, flag: "🇪🇸", name: "Español" },
  { code: "en" as const, flag: "🇬🇧", name: "English" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-colors " +
        (active
          ? "bg-white/10 text-white"
          : "text-white/70 hover:text-white hover:bg-white/10")
      }
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function LanguageDropdown({ 
  lang, 
  setLang 
}: { 
  lang: "de" | "es" | "en"; 
  setLang: (l: "de" | "es" | "en") => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition-all hover:bg-white/10 hover:border-white/20"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline font-medium">{current.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-slate-700/50 bg-slate-800/95 backdrop-blur-xl shadow-xl overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-white/10 ${
                lang === l.code ? "bg-teal-500/20 text-teal-300" : "text-white"
              }`}
            >
              <span className="text-lg">{l.flag}</span>
              <span className="font-medium">{l.name}</span>
              <span className="ml-auto text-xs text-slate-400">{l.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Hide header on dashboard, login, and register pages
  const hiddenRoutes = ["/dashboard", "/login", "/register"];
  if (hiddenRoutes.some(route => pathname.startsWith(route))) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <div className="rounded-xl bg-white/95 p-2 shadow-sm">
              <Image 
              src="/Marca-N.PNG" 
              alt="Conexio Logo" 
              width={180} 
              height={50}
              className="h-12 w-auto object-contain"
              priority
              />
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            <CopyText copyId="siteHeader.nav.about" defaultText={t.nav.about} as="span" />
          </Link>
          <Link href="#faq" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            <CopyText copyId="siteHeader.nav.faq" defaultText={t.nav.faq} as="span" />
          </Link>
          <Link href="#updates" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            <CopyText copyId="siteHeader.nav.updates" defaultText={t.nav.updates} as="span" />
          </Link>
          <Link href="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            <CopyText copyId="siteHeader.nav.login" defaultText={t.nav.login} as="span" />
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-14 items-center rounded-full bg-white/10 p-1 transition-colors hover:bg-white/20"
            aria-label="Toggle theme"
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <Moon size={14} className="text-slate-900" />
              ) : (
                <Sun size={14} className="text-amber-500" />
              )}
            </div>
          </button>

          <LanguageDropdown lang={lang} setLang={setLang} />

          <nav className="flex items-center gap-1 sm:hidden">
            <Link href="/" className="rounded-lg bg-white p-1 shadow-sm">
              <Image 
                src="/Logo.PNG" 
                alt="Conexio Logo" 
                width={100} 
                height={30}
                className="h-7 w-auto object-contain"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
