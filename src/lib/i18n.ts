export type Language = "de" | "es" | "en";

export const defaultLanguage: Language = "de";

export type Translations = {
  nav: {
    productName: string;
    productTagline: string;
    variantA: string;
    variantB: string;
    variantC: string;
    languageLabel: string;
    about: string;
    faq: string;
    login: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustNote: string;
  };
  sections: {
    whyTitle: string;
    whyCards: { title: string; description: string }[];
    howTitle: string;
    howSteps: { title: string; description: string }[];
    structuredTitle: string;
    structuredSubtitle: string;
    structuredTags: string[];
    comingSoonTitle: string;
    comingSoonCards: { title: string; description: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCta: string;
  };
  footer: {
    note: string;
  };
};

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      productName: "Noventa",
      productTagline: "Jobs strukturieren. Vertrauen erhöhen.",
      variantA: "Variante A",
      variantB: "Variante B",
      variantC: "Variante C",
      languageLabel: "Sprache",
      about: "Über uns",
      faq: "FAQ",
      login: "Firmen-Login",
    },
    hero: {
      eyebrow: "Für Unternehmen (Beta)",
      title: "Veröffentliche seriöse Stellenangebote in Minuten — nicht in Tagen.",
      subtitle:
        "Noventa hilft dir, Sales-Jobs sauber, vergleichbar und filterbar zu veröffentlichen. Mit Pflichtangaben wie Gehaltsrange und Ansprechpartner:in — für mehr Vertrauen und bessere Bewerbungen.",
      primaryCta: "Jetzt registrieren",
      secondaryCta: "So funktioniert’s",
      trustNote:
        "Beta & kostenlos. Keine unnötigen Marketing-Texte — nur klare Felder und klare Ergebnisse.",
    },
    sections: {
      whyTitle: "Warum Noventa für Unternehmen?",
      whyCards: [
        {
          title: "Mehr Vertrauen",
          description:
            "Logo + öffentliche Kontaktperson + Gehaltsrange reduzieren Fake-Feeling und steigern die Bewerbungsrate.",
        },
        {
          title: "Maximal filterbar",
          description:
            "Rolle, Arbeitsmodell, Region + Radius, Vergütung, Branche, Erfahrung — Kandidat:innen finden schneller passende Jobs.",
        },
        {
          title: "In 3 Minuten startklar",
          description:
            "Profil erstellen, Job posten, fertig. Der Rest wächst Schritt für Schritt — transparent im Dashboard.",
        },
      ],
      howTitle: "So läuft Phase 1 ab",
      howSteps: [
        {
          title: "Unternehmensprofil",
          description:
            "Wer seid ihr? Stabil, seltene Änderungen. Separate Basis für mehrere Stellen.",
        },
        {
          title: "Stellenanzeige erstellen",
          description:
            "Wen sucht ihr jetzt? Strukturierte Pflichtfelder — kein leeres Bla Bla.",
        },
        {
          title: "Dashboard & nächste Schritte",
          description:
            "Du siehst klar, was als Nächstes kommt: Bewerbungen, Chats, Leads — alles als ‚coming soon‘ sichtbar.",
        },
        {
          title: "Verkäufer anziehen",
          description:
            "Attraktive Profile und klare Angebote ziehen die besten Verkäufer auf die Plattform.",
        },
        {
          title: "Leads generieren",
          description:
            "Mit Noventa kannst du Leads generieren und deine Verkaufsstrategie optimieren.",
        },
      ],
      structuredTitle: "Eine Anzeige, die automatisch ‚gut‘ ist",
      structuredSubtitle:
        "Noventa baut aus deinen Antworten eine klare, vergleichbare Anzeige. Ohne individuelle Textwüsten.",
      structuredTags: [
        "Rolle (AE/SDR/D2D)",
        "Remote/Hybrid/Onsite",
        "Stadt + Radius",
        "Startdatum",
        "Fix/OTE/Kommission",
        "Branche",
        "B2B/B2C",
        "Lead-Quelle",
        "Sales-Cycle",
        "Erfahrung",
        "Sprache",
      ],
      comingSoonTitle: "Dashboard (Fase 1) — mit klaren Hinweisen",
      comingSoonCards: [
        {
          title: "Eingehende Bewerbungen (coming soon)",
          description:
            "Hier werden später Bewerbungen und Status sichtbar — sauber, schnell, ohne Chaos.",
        },
        {
          title: "Chats (coming soon)",
          description:
            "Direkte Kommunikation mit Kandidat:innen — sobald das Modul live geht.",
        },
        {
          title: "Leads freischalten (coming soon)",
          description:
            "Transparente Lead-Mechanik für den nächsten Schritt der Plattform.",
        },
        {
          title: "Vendors beobachten (coming soon)",
          description:
            "Später: Performance-Ansicht für externe Verkäufer:innen — klar gekennzeichnet.",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          q: "Warum ist die Gehaltsrange Pflicht?",
          a: "Weil Gehalt einer der stärksten Filter ist. Ohne Range sinkt Vertrauen und die Matching-Qualität.",
        },
        {
          q: "Ist Noventa kostenlos?",
          a: "Ja, in der Beta ist Noventa kostenlos. Wir bauen zuerst eine saubere Basis mit hoher Vergleichbarkeit.",
        },
        {
          q: "Welche Rollen werden unterstützt?",
          a: "Closer/Account Executive, Setter/SDR, D2D, Telesales, Team Lead/Head of Sales — fokussiert und filterbar.",
        },
        {
          q: "Kann eine Firma mehrere Stellen posten?",
          a: "Ja. Unternehmensprofil bleibt stabil, Stellenanzeigen sind variabel und können parallel laufen.",
        },
      ],
      finalCtaTitle: "Bereit, die erste Stelle auf Noventa zu posten?",
      finalCtaSubtitle:
        "Strukturierte Felder, klare Filter, mehr Vertrauen. Starte jetzt — in der Beta kostenlos.",
      finalCta: "Unternehmen registrieren",
    },
    footer: {
      note: "Noventa ist in Beta. Einige Module sind als ‚coming soon‘ markiert.",
    },
  },
  es: {
    nav: {
      productName: "Noventa",
      productTagline: "Publica mejor. Filtra mejor.",
      variantA: "Variante A",
      variantB: "Variante B",
      variantC: "Variante C",
      languageLabel: "Idioma",
      about: "Sobre nosotros",
      faq: "FAQ",
      login: "Acceso empresas",
    },
    hero: {
      eyebrow: "Para empresas (Beta)",
      title: "Publica ofertas serias en minutos — no en días.",
      subtitle:
        "Noventa te ayuda a publicar empleos de ventas de forma limpia, comparable y filtrable. Con campos obligatorios como rango salarial y contacto público para generar confianza.",
      primaryCta: "Registrarme",
      secondaryCta: "Cómo funciona",
      trustNote:
        "Beta y gratis. Cero marketing vacío: solo campos claros y resultados claros.",
    },
    sections: {
      whyTitle: "¿Por qué Noventa para empresas?",
      whyCards: [
        {
          title: "Más confianza",
          description:
            "Logo + contacto público + rango salarial reducen la sensación de oferta falsa y suben la calidad de candidatos.",
        },
        {
          title: "Máxima filtrabilidad",
          description:
            "Rol, modelo de trabajo, zona, compensación, industria, experiencia — la gente encuentra rápido lo adecuado.",
        },
        {
          title: "Listo en 3 minutos",
          description:
            "Perfil, oferta, listo. Y el dashboard muestra qué viene después (coming soon) para dar claridad.",
        },
      ],
      howTitle: "Así funciona la Fase 1",
      howSteps: [
        {
          title: "Perfil de empresa",
          description:
            "¿Quiénes somos? Estable y separado de las ofertas para que puedas publicar varias.",
        },
        {
          title: "Crear oferta",
          description:
            "¿A quién buscas ahora? Campos estructurados obligatorios: sin textos eternos.",
        },
        {
          title: "Dashboard y siguientes pasos",
          description:
            "Verás claro lo que viene: candidaturas, chats, leads — marcado como ‘próximamente’.",
        },
        {
          title: "Atraer los vendedores a la plataforma",
          description:
            "Perfiles atractivos y ofertas claras atraen a los mejores vendedores.",
        },
        {
          title: "Generar leads",
          description:
            "Con Noventa puedes generar leads y optimizar tu estrategia de ventas.",
        },
      ],
      structuredTitle: "Una oferta que se construye ‘bien’ automáticamente",
      structuredSubtitle:
        "Noventa genera una oferta limpia y comparable a partir de respuestas. Sin humo.",
      structuredTags: [
        "Rol (AE/SDR/D2D)",
        "Remoto/Híbrido/Presencial",
        "Ciudad + radio",
        "Inicio",
        "Fijo/OTE/Comisión",
        "Industria",
        "B2B/B2C",
        "Origen de leads",
        "Ciclo de ventas",
        "Experiencia",
        "Idiomas",
      ],
      comingSoonTitle: "Dashboard (Fase 1) — con pistas claras",
      comingSoonCards: [
        {
          title: "Candidaturas entrantes (próximamente)",
          description:
            "Aquí verás candidaturas y estados — ordenado y rápido.",
        },
        {
          title: "Chats (próximamente)",
          description:
            "Mensajería directa con candidatos cuando el módulo esté listo.",
        },
        {
          title: "Leads desbloqueados (próximamente)",
          description:
            "Mecánica transparente de leads para el siguiente paso.",
        },
        {
          title: "Vendedores en observación (próximamente)",
          description:
            "Más adelante: panel de performance de vendedores externos.",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          q: "¿Por qué el rango salarial es obligatorio?",
          a: "Porque es uno de los filtros más fuertes. Sin salario baja la confianza y la calidad del match.",
        },
        {
          q: "¿Noventa es gratis?",
          a: "Sí, en beta es gratis. Primero construimos una base limpia y totalmente filtrable.",
        },
        {
          q: "¿Qué roles soporta?",
          a: "Closer/Account Executive, Setter/SDR, D2D, Telesales y Team Lead/Head of Sales.",
        },
        {
          q: "¿Puedo publicar varias ofertas?",
          a: "Sí. El perfil de empresa es estable; las ofertas son variables y pueden ser múltiples.",
        },
      ],
      finalCtaTitle: "¿Listo para publicar tu primera oferta en Noventa?",
      finalCtaSubtitle:
        "Campos estructurados, filtros claros, más confianza. Empieza hoy — beta gratis.",
      finalCta: "Registrar empresa",
    },
    footer: {
      note: "Noventa está en beta. Algunos módulos aparecen como ‘próximamente’.",
    },
  },
  en: {
    nav: {
      productName: "Noventa",
      productTagline: "Structured hiring, faster matching.",
      variantA: "Variant A",
      variantB: "Variant B",
      variantC: "Variant C",
      languageLabel: "Language",
      about: "About us",
      faq: "FAQ",
      login: "Login",
    },
    hero: {
      eyebrow: "For companies (Beta)",
      title: "Publish serious job campaigns in minutes — not days.",
      subtitle:
        "Noventa helps you post sales roles in a clean, comparable, fully filterable format. With mandatory fields like salary range and a public contact — to build trust.",
      primaryCta: "Get started",
      secondaryCta: "How it works",
      trustNote:
        "Beta & free. No empty marketing — just clear fields and clear outcomes.",
    },
    sections: {
      whyTitle: "Why Noventa for companies",
      whyCards: [
        {
          title: "Higher trust",
          description:
            "Logo + public contact + salary range reduce the ‘fake job’ feeling and increase application quality.",
        },
        {
          title: "Fully filterable",
          description:
            "Role, work model, location + radius, compensation, industry, experience — candidates find the right fit fast.",
        },
        {
          title: "Ready in 3 minutes",
          description:
            "Create profile, post a job, done. The dashboard shows what’s next (coming soon) with clarity.",
        },
      ],
      howTitle: "How Phase 1 works",
      howSteps: [
        {
          title: "Company profile",
          description:
            "Who are you? Stable, rarely changed — and separate from job postings.",
        },
        {
          title: "Create a job post",
          description:
            "Who do you need now? Structured mandatory fields — no long text walls.",
        },
        {
          title: "Dashboard & next steps",
          description:
            "You’ll clearly see what’s next: applications, chats, leads — labeled as coming soon.",
        },
        {
          title: "Attract sellers to the platform",
          description:
            "Attractive profiles and clear offers attract the best sellers to the platform.",
        },
        {
          title: "Generate leads",
          description:
            "With Noventa, you can generate leads and optimize your sales strategy.",
        },
      ],
      structuredTitle: "A job post that becomes ‘good’ by default",
      structuredSubtitle:
        "Noventa builds a clean, comparable posting from your answers. No fluff.",
      structuredTags: [
        "Role (AE/SDR/D2D)",
        "Remote/Hybrid/Onsite",
        "City + radius",
        "Start date",
        "Fixed/OTE/Commission",
        "Industry",
        "B2B/B2C",
        "Lead source",
        "Sales cycle",
        "Experience",
        "Languages",
      ],
      comingSoonTitle: "Dashboard (Phase 1) — with clear hints",
      comingSoonCards: [
        {
          title: "Incoming applications (coming soon)",
          description:
            "A clean view of applicants and statuses — once the module is live.",
        },
        {
          title: "Chats (coming soon)",
          description:
            "Direct messaging with candidates when the feature ships.",
        },
        {
          title: "Unlocked leads (coming soon)",
          description:
            "A transparent lead mechanic for the next platform step.",
        },
        {
          title: "Vendor watch (coming soon)",
          description:
            "Later: performance view for external sellers — clearly labeled.",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          q: "Why is salary range mandatory?",
          a: "Salary is one of the strongest filters. Without it, trust and match quality drop.",
        },
        {
          q: "Is Noventa free?",
          a: "Yes—during beta, it’s free. We’re building a clean, fully filterable foundation first.",
        },
        {
          q: "Which roles are supported?",
          a: "Closer/Account Executive, Setter/SDR, D2D, Telesales, Team Lead/Head of Sales.",
        },
        {
          q: "Can a company post multiple roles?",
          a: "Yes. Company profile is stable; job postings are variable and can run in parallel.",
        },
      ],
      finalCtaTitle: "Ready to post your first role on Noventa?",
      finalCtaSubtitle:
        "Structured fields, clear filters, higher trust. Start today — beta is free.",
      finalCta: "Register your company",
    },
    footer: {
      note: "Noventa is in beta. Some modules are labeled as coming soon.",
    },
  },
};
