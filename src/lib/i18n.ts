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
    contactTitle: string;
    contactForm: {
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      message: string;
      privacy: string;
      submit: string;
    };
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
          q: "Warum startet Noventa zuerst mit Unternehmen in einer Beta-Phase?",
          a: "In der Beta-Phase bereiten Unternehmen ihr Profil und ihre Stellenanzeigen vor, bevor Vertriebler gesammelt starten.",
        },
        {
          q: "Gehe ich irgendeine Verpflichtung ein?",
          a: "Nein. Die Beta-Phase dient ausschließlich der Vorbereitung. Es entstehen keine fixen Kosten und keine Abnahmeverpflichtungen.",
        },
        {
          q: "Sind meine Unternehmensdaten öffentlich sichtbar?",
          a: "Nein. Ihre Unternehmens- und Stellendaten sind nicht öffentlich einsehbar. Sie werden ausschließlich registrierten Vertrieblern angezeigt – und auch dort nur in dem Umfang, den Sie selbst festlegen.",
        },
        {
          q: "Warum sollte ich mein Profil jetzt schon anlegen, wenn die Vertriebler erst in Phase 2 kommen?",
          a: "Alle Vertriebler werden gesammelt freigeschaltet – wer dann direkt vorbereitet ist, steht von Beginn an besser da. Zusätzlich können Sie die Plattform in der Beta-Phase ohne Fixpreise kennenlernen.",
        },
        {
          q: "Was unterscheidet Noventa von klassischen Jobbörsen oder LinkedIn-Anzeigen?",
          a: "Noventa ist gebaut von Vertrieblern für Vertriebler. Matching, Ratings und Suchlogik basieren auf realen Vertriebs-Pain-Points – nicht auf Algorithmen ohne Branchenverständnis oder Selbstdarstellung. Vertriebler lernen den ganzen Markt kennen – auch Produkte, an die normal niemand denkt.",
        },
        {
          q: "Was passiert, wenn ich mich jetzt registriere, aber später nichts weiter unternehmen möchte?",
          a: "Nichts. Keine Verpflichtung, kein Druck. Ihr Profil bleibt bestehen und Sie entscheiden jederzeit, ob und wann Sie aktiv werden.",
        },
        {
          q: "Muss ich meine Stellen oder Vergütung „schönreden“, um sichtbar zu sein?",
          a: "Nein. Noventa ist auf Vergleichbarkeit und Ehrlichkeit ausgelegt. Unrealistische oder beschönigte Angaben führen nicht zu besseren Ergebnissen, sondern zu schlechterer Passung.",
        },
        {
          q: "Kann ich Noventa auch nutzen, wenn ich nur sporadisch oder projektweise rekrutiere?",
          a: "Ja. Noventa ist nicht auf Daueraktivität ausgelegt, sondern auf punktgenaue Nutzung. Sie werden nicht schlechter gestellt, wenn Sie zeitweise inaktiv sind.",
        },
      ],
      contactTitle: "Kontaktformular",
      contactForm: {
        name: "Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        phoneOptional: "optional",
        message: "Anliegen / Nachricht",
        privacy: "Ich stimme der Datenschutzerklärung zu",
        submit: "Nachricht senden",
      },
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
          q: "¿Por qué Noventa comienza primero con empresas en una fase beta?",
          a: "En la fase beta, las empresas preparan su perfil y sus anuncios de empleo antes de que los vendedores comiencen de forma colectiva.",
        },
        {
          q: "¿Asumo algún compromiso?",
          a: "No. La fase beta sirve exclusivamente para la preparación. No hay costes fijos ni obligaciones de compra.",
        },
        {
          q: "¿Son visibles públicamente los datos de mi empresa?",
          a: "No. Los datos de su empresa y de sus puestos no son visibles públicamente. Solo se muestran a los vendedores registrados, y solo en la medida en que usted mismo lo determine.",
        },
        {
          q: "¿Por qué debería crear mi perfil ahora si los vendedores no llegan hasta la Fase 2?",
          a: "Todos los vendedores se habilitarán de forma colectiva; quien ya esté preparado en ese momento estará en mejor posición desde el principio. Además, puede conocer la plataforma en la fase beta sin precios fijos.",
        },
        {
          q: "¿Qué diferencia a Noventa de las bolsas de trabajo clásicas o los anuncios de LinkedIn?",
          a: "Noventa está construida por vendedores para vendedores. El matching, las valoraciones y la lógica de búsqueda se basan en puntos de dolor reales de las ventas, no en algoritmos sin conocimiento del sector o autopromoción. Los vendedores conocen todo el mercado, incluso productos en los que normalmente nadie piensa.",
        },
        {
          q: "¿Qué pasa si me registro ahora pero luego no quiero hacer nada más?",
          a: "Nada. Sin compromiso, sin presión. Su perfil se mantiene y usted decide en cualquier momento si y cuándo activarse.",
        },
        {
          q: "¿Tengo que 'maquillar' mis puestos o remuneración para ser visible?",
          a: "No. Noventa está diseñado para la comparabilidad y la honestidad. Los datos poco realistas o maquillados no conducen a mejores resultados, sino a un peor ajuste.",
        },
        {
          q: "¿Puedo usar Noventa también si solo recluto de forma esporádica o por proyectos?",
          a: "Sí. Noventa no está diseñado para una actividad constante, sino para un uso preciso. No se verá perjudicado si está inactivo temporalmente.",
        },
      ],
      contactTitle: "Formulario de contacto",
      contactForm: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Número de teléfono",
        phoneOptional: "opcional",
        message: "Asunto / Mensaje",
        privacy: "Acepto la política de privacidad",
        submit: "Enviar mensaje",
      },
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
          q: "Why is Noventa starting with companies in a beta phase first?",
          a: "In the beta phase, companies prepare their profile and job postings before sellers join the platform collectively.",
        },
        {
          q: "Am I entering into any obligation?",
          a: "No. The beta phase is purely for preparation. There are no fixed costs and no purchase obligations.",
        },
        {
          q: "Is my company data publicly visible?",
          a: "No. Your company and job data are not publicly viewable. They are only shown to registered sellers – and only to the extent that you define yourself.",
        },
        {
          q: "Why should I create my profile now if the sellers don't come until Phase 2?",
          a: "All sellers will be activated collectively – whoever is prepared then will be in a better position from the start. Additionally, you can get to know the platform in the beta phase without fixed prices.",
        },
        {
          q: "What distinguishes Noventa from classic job boards or LinkedIn ads?",
          a: "Noventa is built by sellers for sellers. Matching, ratings, and search logic are based on real sales pain points – not on algorithms without industry understanding or self-promotion. Sellers get to know the whole market – including products that normally nobody thinks of.",
        },
        {
          q: "What happens if I register now but don't want to do anything further later?",
          a: "Nothing. No obligation, no pressure. Your profile remains, and you decide at any time if and when to become active.",
        },
        {
          q: "Do I have to 'sugarcoat' my jobs or compensation to be visible?",
          a: "No. Noventa is designed for comparability and honesty. Unrealistic or sugarcoated information does not lead to better results, but to a worse fit.",
        },
        {
          q: "Can I use Noventa even if I only recruit sporadically or on a project basis?",
          a: "Yes. Noventa is not designed for continuous activity, but for precise use. You will not be at a disadvantage if you are inactive for periods of time.",
        },
      ],
      contactTitle: "Contact Form",
      contactForm: {
        name: "Name",
        email: "Email Address",
        phone: "Phone Number",
        phoneOptional: "optional",
        message: "Subject / Message",
        privacy: "I agree to the privacy policy",
        submit: "Send Message",
      },
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
