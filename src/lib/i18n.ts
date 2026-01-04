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
    updates: string;
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
    aboutTitle: string;
    aboutSubtitle: string;
    aboutText: string;
    socialTitle: string;
    socialSubtitle: string;
    followUs: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCta: string;
  };
  footer: {
    note: string;
    socialMedia: string;
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
      updates: "Updates",
    },
    hero: {
      eyebrow: "Für Unternehmen (Beta)",
      title: "Gezieltes Recruiting für deinen Vertrieb",
      subtitle:
        "Noventa ist eine Plattform für alle Arten von Vertrieb. Von Quereinsteigern bis zu erfahrenen Sales-Profis – Unternehmen können sich präsentieren oder gezielt Vertriebler kontaktieren, die den nächsten Schritt suchen.",
      primaryCta: "Unternehmensprofil erstellen",
      secondaryCta: "So funktioniert’s",
      trustNote:
        "Beta-Version (kostenlos) •  In wenigen Schritten startklar – bevor Kandidatenkontakt startet",
    },
    sections: {
      whyTitle: "Kennst du das aus deinem Vertriebsalltag?",
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
      howTitle: "So läuft die Beta für Unternehmen ab",
      howSteps: [
        {
          title: "Unternehmensprofil anlegen",
          description:
            "Du legst einmal die Basis fest – so, wie dein Unternehmen den Vertrieblern präsentiert werden soll.",
        },
        {
          title: "Kampagne starten",
          description:
            "Du gibst die Eckdaten vor – wir übersetzen sie in eine Kampagne, die später automatisch auf passende Profile matcht.",
        },
        {
          title: "Live-Check",
          description: "Vorschau prüfen, live schalten – und bei Bedarf jederzeit nachziehen.",
        },
        {
          title: "Vertriebler-Setup (mit Countdown-Teaser)",
          description:
            "Der Countdown läuft im Dashboard bereits mit. So bist du startklar, sobald der Kandidatenpool freigeschaltet wird.",
        },
        {
          title: "Vertriebler-Launch (Payoff)",
          description:
            "Du filterst und vergleichst Profile – mit zwei Scores: Skills-Fit (%) und Wunsch-Fit (%). Weil deine Kampagne schon sauber steht, läuft Kontakt in beide Richtungen: du sprichst Kandidaten an – passende Vertriebler kontaktieren dich.",
        },
      ],
      structuredTitle: "Eine Kampagne, die Vertriebler sofort verstehen.",
      structuredSubtitle:
        "Du gibst klare Kriterien vor – Noventa macht daraus zwei Perspektiven: Skills-Fit (%) und Wunsch-Fit (%). So sehen beide Seiten sofort, ob es passt.",
      structuredTags: [
        "Rolle (D2D/Führungskraft/Telesales)",
        "Remote/Hybrid/Onsite",
        "Stadt + Radius",
        "Startdatum",
        "Fix/Provision/Zielgehalt",
        "Branche",
        "Neben-/Hauptberuflichkeit",
        "Lead-Quelle",
        "Ausbildung/Traineeprogramm",
        "Erfahrung",
        "Reisebereitschaft",
        "Individuelle Ausschlusskriterien",
      ],
      comingSoonTitle: "Noventa (Phase 2) – darauf könnt ihr euch freuen und profitieren",
      comingSoonCards: [
        {
          title: "Vertrieblerpool freischalten",
          description:
            "Kontakt in beide Richtungen: ihr sprecht Kandidaten an, passende Kandidaten melden sich auch bei euch",
        },
        {
          title: "Employer Spotlight",
          description:
            "Stellt euch den Vertrieblern in einem Kurzvideo vor. Warum sollte man bei euch verkaufen?",
        },
        {
          title: "Dual-Score-Matching",
          description:
            "Skills und Motivation getrennt sichtbar – damit ihr schneller die richtigen Gespräche führt",
        },
        {
          title: "Leaderboard für Vertriebler und Unternehmen",
          description:
            "Wir fragen Vertriebler und belohnen Ausbildungsqualität, Onboarding, Transparenz, schnelle Rückmeldungen und beste Karrierechancen",
        },
      ],
      aboutTitle: "Über Noventa",
      aboutSubtitle: "Von Vertrieblern, für Vertriebler",
      aboutText:
        "Sales entscheidet nicht nur über Einkommen – sondern über Lebensqualität. Und trotzdem sehen wir zu oft, wie gute Leute im Vertrieb unter Wert arbeiten: nicht wegen fehlendem Talent, sondern weil sie den Markt nicht überblicken, in der falschen Rolle landen oder in einer Bubble feststecken, die nur wenige Optionen zeigt.\nUnsere Mission ist Orientierung über den gesamten Sales-Markt: mehr Möglichkeiten sichtbar machen, Zugänge schaffen – und Menschen dabei helfen, den Weg zu finden, der wirklich zu ihrer Persönlichkeit und ihrem Leben passt.",
      socialTitle: "Folge uns auf Social Media",
      socialSubtitle: "Bleib auf dem Laufenden mit unseren neuesten Updates",
      followUs: "Folge @noventacrew",
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
        {
          q: "Wie lange dauert die Registrierung?",
          a: "Weniger als 3 Minuten. Unternehmensprofil einmal ausfüllen, dann können Sie direkt Stellen veröffentlichen.",
        },
        {
          q: "Wann kommen Bewerbungen und Chats?",
          a: "Diese Features sind als 'coming soon' markiert. Wir bauen die Plattform Schritt für Schritt auf und halten Sie transparent informiert.",
        },
        {
          q: "Kann ich meine Stellenanzeigen bearbeiten?",
          a: "Ja, Sie können Ihre Anzeigen jederzeit im Dashboard bearbeiten, pausieren oder löschen.",
        },
        {
          q: "Warum ist ein öffentlicher Ansprechpartner wichtig?",
          a: "Transparenz schafft Vertrauen. Ein echter Name und eine Position zeigen, dass Ihr Unternehmen seriös ist und reduzieren Fake-Job-Bedenken erheblich.",
        },
      ],
      finalCtaTitle: "Bereit, deine erste Kampagne auf Noventa zu starten?",
      finalCtaSubtitle: "Bereite dich und dein Unternehmen vor für den Launch – in der Beta kostenlos",
      finalCta: "Unternehmen registrieren",
    },
    footer: {
      note: "Noventa ist in der Beta. Einige Module sind als ‚coming soon‘ markiert und werden schrittweise freigeschaltet.",
      socialMedia: "Social Media",
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
      updates: "Actualizaciones",
    },
    hero: {
      eyebrow: "Para empresas (Beta)",
      title: "Reclutamiento dirigido para tu equipo comercial",
      subtitle:
        "Noventa es una plataforma para todo tipo de ventas. Desde personas sin experiencia previa hasta profesionales senior: las empresas pueden presentarse o contactar directamente a vendedores que buscan dar el siguiente paso.",
      primaryCta: "Crear perfil de empresa",
      secondaryCta: "Cómo funciona",
      trustNote:
        "Beta (gratis) • Listo en pocos pasos — antes de habilitar el contacto con candidatos",
    },
    sections: {
      whyTitle: "¿Te suena esto en tu día a día en ventas?",
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
      howTitle: "Así funciona la beta para empresas",
      howSteps: [
        {
          title: "Crear perfil de empresa",
          description:
            "Defines una sola vez la base — cómo quieres que tu empresa se muestre a los vendedores.",
        },
        {
          title: "Lanzar campaña",
          description:
            "Indicas los datos clave — nosotros lo convertimos en una campaña que luego matchea con perfiles relevantes.",
        },
        {
          title: "Revisión final",
          description:
            "Revisas la vista previa, publicas — y puedes ajustar cuando lo necesites.",
        },
        {
          title: "Setup de vendedores (con cuenta regresiva)",
          description:
            "La cuenta regresiva ya corre en el dashboard. Así estás listo cuando se habilite el pool de candidatos.",
        },
        {
          title: "Lanzamiento (resultado)",
          description:
            "Filtras y comparas perfiles con dos scores: Skills-Fit (%) y Wish-Fit (%). Como tu campaña ya está lista, el contacto funciona en ambas direcciones.",
        },
      ],
      structuredTitle: "Una campaña que los vendedores entienden al instante.",
      structuredSubtitle:
        "Tú defines criterios claros — Noventa los traduce a dos perspectivas: Skills-Fit (%) y Wish-Fit (%). Así ambos lados ven rápido si encaja.",
      structuredTags: [
        "Rol (D2D/Líder/Telesales)",
        "Remoto/Híbrido/Presencial",
        "Ciudad + radio",
        "Inicio",
        "Fijo/Comisión/Objetivo",
        "Industria",
        "Parcial/Completo",
        "Origen de leads",
        "Formación/Programa trainee",
        "Experiencia",
        "Disponibilidad de viaje",
        "Criterios de exclusión",
      ],
      comingSoonTitle: "Noventa (Fase 2) — lo que viene y por qué te beneficiará",
      comingSoonCards: [
        {
          title: "Desbloquear pool de vendedores",
          description:
            "Contacto en ambas direcciones: tú contactas candidatos y candidatos relevantes también te contactan.",
        },
        {
          title: "Employer Spotlight",
          description:
            "Preséntate con un video corto. ¿Por qué alguien debería vender en tu empresa?",
        },
        {
          title: "Dual-Score matching",
          description:
            "Skills y motivación visibles por separado — para ir directo a las conversaciones correctas.",
        },
        {
          title: "Leaderboard para vendedores y empresas",
          description:
            "Recompensamos calidad de formación, onboarding, transparencia, rapidez de respuesta y mejores oportunidades.",
        },
      ],
      aboutTitle: "Sobre Noventa",
      aboutSubtitle: "De vendedores, para vendedores",
      aboutText:
        "Las ventas no solo deciden ingresos — también calidad de vida. Y aun así vemos demasiado a menudo cómo buenas personas trabajan por debajo de su valor: no por falta de talento, sino porque no ven el mercado completo, terminan en el rol equivocado o quedan atrapadas en una burbuja con pocas opciones.\nNuestra misión es dar orientación sobre el mercado de ventas: hacer visibles más oportunidades, abrir accesos — y ayudar a cada persona a encontrar el camino que realmente encaja con su personalidad y su vida.",
      socialTitle: "Síguenos en redes sociales",
      socialSubtitle: "Mantente al día con nuestras últimas novedades",
      followUs: "Sigue a @noventacrew",
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
        {
          q: "¿Cuánto tarda el registro?",
          a: "Menos de 3 minutos. Crea tu perfil de empresa una vez y luego publica ofertas directamente.",
        },
        {
          q: "¿Cuándo llegan candidaturas y chats?",
          a: "Estos módulos están marcados como 'próximamente'. Construimos la plataforma paso a paso con total transparencia.",
        },
        {
          q: "¿Puedo editar mis ofertas?",
          a: "Sí, puedes editar, pausar o eliminar tus ofertas en cualquier momento desde el dashboard.",
        },
        {
          q: "¿Por qué es importante un contacto público?",
          a: "La transparencia genera confianza. Un nombre real y cargo muestran que tu empresa es seria y reduce enormemente las dudas sobre ofertas falsas.",
        },
      ],
      finalCtaTitle: "¿Listo para lanzar tu primera campaña en Noventa?",
      finalCtaSubtitle: "Prepara tu empresa para el lanzamiento — en beta gratis",
      finalCta: "Registrar empresa",
    },
    footer: {
      note: "Noventa está en beta. Algunos módulos están marcados como 'próximamente' y se irán habilitando paso a paso.",
      socialMedia: "Síguenos",
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
      updates: "Updates",
    },
    hero: {
      eyebrow: "For companies (Beta)",
      title: "Targeted recruiting for your sales team",
      subtitle:
        "Noventa is a platform for all kinds of sales. From career changers to experienced sales pros — companies can present themselves or directly contact sellers ready for the next step.",
      primaryCta: "Create company profile",
      secondaryCta: "How it works",
      trustNote:
        "Beta (free) • Ready in a few steps — before candidate contact starts",
    },
    sections: {
      whyTitle: "Does this sound like your day-to-day in sales?",
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
      howTitle: "How the beta works for companies",
      howSteps: [
        {
          title: "Create a company profile",
          description:
            "Set the foundation once — how your company should be presented to sellers.",
        },
        {
          title: "Launch a campaign",
          description:
            "You provide key inputs — we translate them into a campaign that later matches the right profiles.",
        },
        {
          title: "Live check",
          description:
            "Review the preview, go live — and adjust anytime if needed.",
        },
        {
          title: "Seller setup (with countdown teaser)",
          description:
            "A countdown already runs in the dashboard. You’ll be ready once the candidate pool goes live.",
        },
        {
          title: "Seller launch (payoff)",
          description:
            "Filter and compare profiles using two scores: Skills-Fit (%) and Wish-Fit (%). Because your campaign is clean, contact works both ways.",
        },
      ],
      structuredTitle: "A campaign sellers instantly understand.",
      structuredSubtitle:
        "You define clear criteria — Noventa turns them into two perspectives: Skills-Fit (%) and Wish-Fit (%). Both sides see fast if it matches.",
      structuredTags: [
        "Role (D2D/Leader/Telesales)",
        "Remote/Hybrid/Onsite",
        "City + radius",
        "Start date",
        "Base/commission/target",
        "Industry",
        "Part-time/Full-time",
        "Lead source",
        "Training/trainee program",
        "Experience",
        "Travel willingness",
        "Exclusion criteria",
      ],
      comingSoonTitle: "Noventa (Phase 2) — what’s next and why it helps",
      comingSoonCards: [
        {
          title: "Unlock the seller pool",
          description:
            "Two-way contact: you reach out to candidates, and relevant candidates reach out to you as well.",
        },
        {
          title: "Employer Spotlight",
          description:
            "Introduce yourself in a short video. Why should someone sell with you?",
        },
        {
          title: "Dual-score matching",
          description:
            "Skills and motivation shown separately — so you get to the right conversations faster.",
        },
        {
          title: "Leaderboard for sellers and companies",
          description:
            "We reward training quality, onboarding, transparency, fast responses, and the best career opportunities.",
        },
      ],
      aboutTitle: "About Noventa",
      aboutSubtitle: "By sellers, for sellers",
      aboutText:
        "Sales doesn’t just decide income — it also impacts quality of life. Yet we still see great people working below their value: not because they lack talent, but because they can’t see the market, end up in the wrong role, or get stuck in a bubble with too few options.\nOur mission is to provide orientation across the entire sales market: make more opportunities visible, create access — and help people find the path that truly fits their personality and life.",
      socialTitle: "Follow us on social media",
      socialSubtitle: "Stay updated with our latest news",
      followUs: "Follow @noventacrew",
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
        {
          q: "How long does registration take?",
          a: "Less than 3 minutes. Fill out your company profile once, then post jobs directly.",
        },
        {
          q: "When are applications and chats coming?",
          a: "These features are marked as 'coming soon'. We’re building the platform step by step with full transparency.",
        },
        {
          q: "Can I edit my job postings?",
          a: "Yes, you can edit, pause, or delete your postings anytime from the dashboard.",
        },
        {
          q: "Why is a public contact person important?",
          a: "Transparency builds trust. A real name and position show your company is legitimate and significantly reduce fake job concerns.",
        },
      ],
      finalCtaTitle: "Ready to launch your first campaign on Noventa?",
      finalCtaSubtitle: "Get your company ready for the launch — free in beta",
      finalCta: "Register company",
    },
    footer: {
      note: "Noventa is in beta. Some modules are marked as 'coming soon' and will roll out step by step.",
      socialMedia: "Follow us",
    },
  },
};
