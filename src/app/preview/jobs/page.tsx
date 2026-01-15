"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Briefcase,
  Building2,
  Clock,
  Euro,
  Eye,
  MapPin,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";

type PreviewJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: "Vollzeit" | "Teilzeit" | "Hybrid" | "Remote";
  salary: string;
  seniority: "Junior" | "Mid" | "Senior";
  imageUrl: string;
  tags: string[];
  highlights: string[];
  description: string;
  requirements: string[];
  perks: string[];
  stats: {
    views: number;
    applications: number;
  };
  publishedAt: string;
};

const jobsMock: PreviewJob[] = [
  {
    id: "job-1",
    title: "Vertriebsberater (m/w/d) – B2B Neukunden",
    company: "Conexio GmbH",
    location: "Oldenburg, Niedersachsen",
    employmentType: "Hybrid",
    salary: "45.000 – 65.000 € + Provision",
    seniority: "Mid",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    tags: ["SaaS", "Outbound", "CRM", "B2B"],
    highlights: [
      "Klare Lead-Listen und Playbooks",
      "Schnelle Entscheidungswege",
      "Moderne Tools (CRM, Sequencing)",
    ],
    description:
      "Du übernimmst die aktive Ansprache von B2B-Unternehmen und führst sie bis zur Demo. Du arbeitest eng mit Marketing und Teamlead zusammen und bekommst klare Ziele, transparente KPIs und eine starke Provision.",
    requirements: [
      "Erfahrung im B2B-Vertrieb (Outbound oder Inbound)",
      "Sehr gute Deutschkenntnisse (C1)",
      "Strukturierte Arbeitsweise und Ownership",
    ],
    perks: [
      "Flexible Arbeitszeiten",
      "Remote-Anteil möglich",
      "Weiterbildung & Coaching",
      "30 Tage Urlaub",
    ],
    stats: { views: 1284, applications: 37 },
    publishedAt: "Vor 2 Tagen",
  },
  {
    id: "job-2",
    title: "Sales Development Representative (m/w/d)",
    company: "A&J Elektrotechnik GmbH",
    location: "Rastede",
    employmentType: "Vollzeit",
    salary: "35.000 – 48.000 € + Bonus",
    seniority: "Junior",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    tags: ["SDR", "Telefon", "Prospecting"],
    highlights: [
      "Onboarding in 14 Tagen",
      "Mentoring & Skripte",
      "Klarer Karrierepfad",
    ],
    description:
      "Als SDR bist du die erste Stimme unserer Marke. Du qualifizierst Interessenten, vereinbarst Termine und arbeitest eng mit dem Closer-Team zusammen.",
    requirements: [
      "Kommunikationsstärke",
      "Lernbereitschaft und Disziplin",
      "Erste Erfahrung im Vertrieb (optional)",
    ],
    perks: ["Moderne Ausstattung", "Team-Events", "Bonusmodell"],
    stats: { views: 842, applications: 19 },
    publishedAt: "Vor 6 Tagen",
  },
  {
    id: "job-3",
    title: "Key Account Manager (m/w/d) – Bestandskunden",
    company: "Nordic Solutions AG",
    location: "Bremen",
    employmentType: "Remote",
    salary: "60.000 – 80.000 €",
    seniority: "Senior",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Key Accounts", "Retention", "Upsell"],
    highlights: ["Große Bestandskunden", "Eigenverantwortung", "Top Produkt"],
    description:
      "Du betreust strategische Bestandskunden, identifizierst Upsell-Potenziale und sorgst für langfristige Partnerschaften. Fokus auf Wertschöpfung statt Kaltakquise.",
    requirements: [
      "Mehrjährige Erfahrung im Account Management",
      "Sicheres Auftreten auf Entscheider-Ebene",
      "Analytisches Denken",
    ],
    perks: ["Remote-first", "Home-Office Budget", "Betriebliche Altersvorsorge"],
    stats: { views: 533, applications: 11 },
    publishedAt: "Vor 2 Wochen",
  },
  {
    id: "job-4",
    title: "Closer (m/w/d) – High Ticket B2B",
    company: "Conexio Partnernetzwerk",
    location: "Hamburg",
    employmentType: "Hybrid",
    salary: "70.000 – 110.000 € OTE",
    seniority: "Senior",
    imageUrl:
      "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?auto=format&fit=crop&w=1600&q=80",
    tags: ["Closing", "Verhandlung", "B2B", "Sales"],
    highlights: [
      "Warmes Lead-Volumen",
      "Klare ICPs",
      "Starkes Provisionmodell",
    ],
    description:
      "Du führst qualifizierte B2B-Leads durch Discovery, Demo und Verhandlung bis zum Abschluss. Fokus auf Qualität, nicht Masse.",
    requirements: [
      "Mehrjährige Closing-Erfahrung",
      "Sichere Verhandlungsführung",
      "Sauberes Pipeline-Management",
    ],
    perks: ["Home-Office Budget", "Weiterbildung", "Top-Kommission"],
    stats: { views: 1560, applications: 28 },
    publishedAt: "Gestern",
  },
  {
    id: "job-5",
    title: "Vertriebsinnendienst (m/w/d)",
    company: "Mittelstand Digital KG",
    location: "Osnabrück",
    employmentType: "Teilzeit",
    salary: "28.000 – 36.000 €",
    seniority: "Junior",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80",
    tags: ["Inbound", "CRM", "Organisation"],
    highlights: ["Stabiles Team", "Planbare Zeiten", "Gute Einarbeitung"],
    description:
      "Du unterstützt den Vertrieb im Tagesgeschäft, pflegst CRM-Daten, erstellst Angebote und koordinierst Termine. Ideal für den Einstieg.",
    requirements: [
      "Struktur und Genauigkeit",
      "Gute Kommunikation",
      "Grundkenntnisse MS Office",
    ],
    perks: ["Teilzeit möglich", "Deutschlandticket", "Weiterbildung"],
    stats: { views: 420, applications: 9 },
    publishedAt: "Vor 4 Tagen",
  },
  {
    id: "job-6",
    title: "Sales Manager (m/w/d) – Energie/PV",
    company: "GreenVolt GmbH",
    location: "Berlin",
    employmentType: "Remote",
    salary: "55.000 – 90.000 € OTE",
    seniority: "Mid",
    imageUrl:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80",
    tags: ["Energie", "B2C", "Beratung", "Field"],
    highlights: ["Hohe Nachfrage", "Leads verfügbar", "Schnelle Abschlüsse"],
    description:
      "Du berätst Kunden zu PV- und Energiespeicher-Lösungen und führst sie bis zum Abschluss. Mix aus Remote und Vor-Ort-Terminen.",
    requirements: [
      "Erfahrung im beratenden Vertrieb",
      "Reisebereitschaft in der Region",
      "Starke Abschlussorientierung",
    ],
    perks: ["Firmenwagen (optional)", "Flexible Zeiten", "Provision"],
    stats: { views: 980, applications: 17 },
    publishedAt: "Vor 1 Woche",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-200">
      {children}
    </span>
  );
}

function StatPill({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/40 border border-slate-700/50">
      <div className="text-slate-300">{icon}</div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-slate-500">{label}</span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </div>
    </div>
  );
}

export default function PreviewJobsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => jobsMock.find((j) => j.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center">
              <Briefcase className="text-cyan-300" size={18} />
            </div>
            <div>
              <div className="text-sm text-slate-300">Public Preview</div>
              <h1 className="text-lg font-semibold">Stellenangebote – Karten & Detailansicht</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-200 hover:bg-slate-800/60 transition"
            >
              <ArrowLeft size={16} />
              Zur Landing
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Entdecke passende Jobs</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">
            Diese Seite ist nur für Screenshots gedacht. Alle Daten sind simuliert.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {jobsMock.map((job, idx) => (
            <motion.button
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              onClick={() => setSelectedId(job.id)}
              className="text-left group rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-900/40 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all overflow-hidden"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={job.imageUrl}
                  alt={job.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                      <Building2 size={14} className="text-slate-400" />
                      <span className="font-medium">{job.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} className="text-slate-400" />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Tag>{job.employmentType}</Tag>
                      <Tag>{job.seniority}</Tag>
                      {job.tags.slice(0, 2).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-2">
                    <div className="text-sm font-semibold text-white inline-flex items-center gap-2">
                      <Euro size={16} className="text-cyan-300" />
                      {job.salary}
                    </div>
                    <div className="text-xs text-slate-400 inline-flex items-center gap-1">
                      <Clock size={14} />
                      {job.publishedAt}
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {job.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 rounded-lg bg-slate-800/40 border border-slate-700/40 text-slate-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="relative mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Eye size={14} /> {job.stats.views} Aufrufe
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Users size={14} /> {job.stats.applications} Bewerbungen
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition">
                    Details ansehen
                    <Sparkles size={16} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/preview/candidates"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600/30 to-fuchsia-600/20 border border-purple-500/30 text-white hover:from-purple-600/40 hover:to-fuchsia-600/30 transition"
          >
            Zur Unternehmens-Ansicht: Kandidaten entdecken
            <ArrowLeft className="rotate-180" size={16} />
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSelectedId(null)}
            />

            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute left-1/2 top-1/2 w-[min(920px,92vw)] max-h-[86vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/95 shadow-2xl"
            >
              <div className="relative h-48">
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>

              <div className="px-6 py-5 border-b border-slate-800/60 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Stellenangebot – Vorschau</div>
                  <h3 className="text-xl font-bold mt-1">{selected.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <Building2 size={16} className="text-slate-400" />
                      {selected.company}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      {selected.location}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="inline-flex items-center gap-2">
                      <Euro size={16} className="text-slate-400" />
                      {selected.salary}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedId(null)}
                  className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition"
                  aria-label="Schließen"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(86vh-86px)]">
                <div className="grid gap-4 md:grid-cols-3">
                  <StatPill icon={<BadgeCheck size={16} className="text-emerald-300" />} label="Level" value={selected.seniority} />
                  <StatPill icon={<Clock size={16} className="text-cyan-300" />} label="Modell" value={selected.employmentType} />
                  <StatPill icon={<Briefcase size={16} className="text-purple-300" />} label="Status" value="Aktiv" />
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h4 className="font-semibold">Beschreibung</h4>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      {selected.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h4 className="font-semibold">Anforderungen</h4>
                    <ul className="mt-2 space-y-2 text-slate-300">
                      {selected.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                  <h4 className="font-semibold">Vorteile</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.perks.map((p) => (
                      <Tag key={p}>{p}</Tag>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-sm text-slate-400">
                    Hinweis: Bewerbung ist in dieser Preview deaktiviert.
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-100 cursor-not-allowed"
                    disabled
                  >
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
