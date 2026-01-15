"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Crown,
  Filter,
  Lock,
  MapPin,
  Search,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Unlock,
  X,
} from "lucide-react";
import Link from "next/link";

type PreviewCandidate = {
  id: string;
  name: string;
  title: string;
  location: string;
  seniority: "Junior" | "Mid" | "Senior";
  experience: string;
  skills: string[];
  industries: string[];
  availability: string;
  desiredSalary: string;
  matchScore: number;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
};

const candidatesMock: PreviewCandidate[] = [
  {
    id: "cand-1",
    name: "Max M.",
    title: "Sales Development Representative (SDR)",
    location: "Bremen",
    seniority: "Junior",
    experience: "1–2 Jahre Outbound (B2B)",
    skills: ["Cold Calling", "LinkedIn", "CRM", "Terminierung"],
    industries: ["SaaS", "Handwerk"],
    availability: "Sofort",
    desiredSalary: "40.000–50.000 €",
    matchScore: 88,
    contact: {
      email: "max.mustermann@email.com",
      phone: "+49 151 000 000",
      linkedin: "linkedin.com/in/max-m",
    },
  },
  {
    id: "cand-2",
    name: "Laura S.",
    title: "Account Executive (B2B)",
    location: "Oldenburg",
    seniority: "Mid",
    experience: "4 Jahre Closing, komplexe Angebote",
    skills: ["Discovery", "Demo", "Verhandlung", "Pipeline"],
    industries: ["Energie", "Telekommunikation"],
    availability: "In 4 Wochen",
    desiredSalary: "65.000–80.000 €",
    matchScore: 93,
    contact: {
      email: "laura.schmidt@email.com",
      phone: "+49 160 000 000",
      linkedin: "linkedin.com/in/laura-s",
    },
  },
  {
    id: "cand-3",
    name: "Thomas B.",
    title: "Key Account Manager",
    location: "Hamburg",
    seniority: "Senior",
    experience: "9 Jahre Bestandskunden, Upsell/Retention",
    skills: ["Key Accounts", "QBR", "Upsell", "Stakeholder"],
    industries: ["Industrie", "IT"],
    availability: "In 8 Wochen",
    desiredSalary: "85.000–110.000 €",
    matchScore: 90,
    contact: {
      email: "thomas.becker@email.com",
      phone: "+49 170 000 000",
      linkedin: "linkedin.com/in/thomas-b",
    },
  },
  {
    id: "cand-4",
    name: "Sarah K.",
    title: "Vertriebsleiterin (Team Lead)",
    location: "Berlin",
    seniority: "Senior",
    experience: "8 Jahre Führung, KPI/Playbooks",
    skills: ["Coaching", "Forecast", "Teamaufbau", "Prozesse"],
    industries: ["SaaS", "E-Commerce"],
    availability: "In 6 Wochen",
    desiredSalary: "100.000–130.000 €",
    matchScore: 95,
    contact: {
      email: "sarah.koehler@email.com",
      phone: "+49 171 000 000",
      linkedin: "linkedin.com/in/sarah-k",
    },
  },
];

function Pill({ children }: { children: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-200">
      {children}
    </span>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 92
      ? "from-emerald-500/30 to-emerald-500/10 border-emerald-400/30 text-emerald-200"
      : score >= 88
        ? "from-cyan-500/30 to-cyan-500/10 border-cyan-400/30 text-cyan-200"
        : "from-amber-500/30 to-amber-500/10 border-amber-400/30 text-amber-200";

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-gradient-to-br ${color} border`}
    >
      <Sparkles size={16} />
      <span className="text-sm font-semibold">Match {score}%</span>
    </div>
  );
}

export default function PreviewCandidatesPage() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return candidatesMock;
    return candidatesMock.filter((c) => {
      return (
        c.title.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.skills.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [query]);

  const selected = useMemo(
    () => candidatesMock.find((c) => c.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-purple-500/20 flex items-center justify-center">
              <Shield className="text-purple-200" size={18} />
            </div>
            <div>
              <div className="text-sm text-slate-300">Public Preview</div>
              <h1 className="text-lg font-semibold">Unternehmen – Kandidaten entdecken</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/preview/jobs"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-200 hover:bg-slate-800/60 transition"
            >
              <ArrowLeft size={16} />
              Zu den Jobs
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Headhunter-Modus (Preview)</h2>
              <p className="text-slate-300 mt-2 max-w-2xl">
                In dieser Vorschau sind Fotos und Kontaktdaten absichtlich eingeschränkt.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-800/30 border border-slate-700/50 text-slate-200">
                <Building2 size={16} className="text-slate-300" />
                Beispiel: "Conexio GmbH"
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 mb-6">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kandidaten, Skills oder Stadt suchen…"
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-700/60 text-white placeholder-slate-500 outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-700/60 text-slate-200 hover:bg-slate-900/70 transition"
          >
            <Filter size={18} className="text-slate-400" />
            Filter (Demo)
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((c, idx) => (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedId(c.id)}
              className="text-left group rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-900/40 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all overflow-hidden"
            >
              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/5 to-fuchsia-600/5" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-slate-600/40 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0" style={{ filter: "blur(10px)" }} />
                        <span className="relative text-sm font-semibold text-slate-200">{c.name.split(" ").map((p) => p[0]).join("")}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-2xl bg-slate-950 border border-slate-700/60 flex items-center justify-center">
                        <Lock size={14} className="text-amber-300" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <MapPin size={14} className="text-slate-400" />
                        {c.location}
                        <span className="text-slate-700">•</span>
                        <span className="text-slate-400">{c.availability}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mt-1">{c.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Pill>{c.seniority}</Pill>
                        <Pill>{c.experience}</Pill>
                        <Pill>{c.desiredSalary}</Pill>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <ScoreBadge score={c.matchScore} />
                  </div>
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {c.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-lg bg-slate-800/40 border border-slate-700/40 text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="relative mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                    <Briefcase size={14} />
                    Branchen: {c.industries.join(", ")}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-200 group-hover:text-purple-100 transition">
                    Profil öffnen
                    <Sparkles size={16} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="text-sm text-slate-400">
            Hinweis: Kontaktdaten sind in der Preview gesperrt.
          </div>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-600/25 border border-purple-500/30 text-white hover:bg-purple-600/35 transition"
          >
            <Unlock size={18} />
            Zum Freischalten anmelden
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedId(null)} />

            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute left-1/2 top-1/2 w-[min(920px,92vw)] max-h-[86vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/95 shadow-2xl"
            >
              <div className="px-6 py-5 border-b border-slate-800/60 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Kandidatenprofil – Vorschau</div>
                  <h3 className="text-xl font-bold mt-1">{selected.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      {selected.location}
                    </span>
                    <span className="text-slate-700">•</span>
                    <span>{selected.experience}</span>
                    <span className="text-slate-700">•</span>
                    <span className="inline-flex items-center gap-2">
                      <Crown size={16} className="text-amber-300" />
                      {selected.seniority}
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
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                  <ScoreBadge score={selected.matchScore} />
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/40 border border-slate-700/50">
                      <Trophy size={16} className="text-emerald-300" />
                      <span className="text-sm text-slate-200">Top-Performer</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/40 border border-slate-700/50">
                      <Star size={16} className="text-cyan-300" />
                      <span className="text-sm text-slate-200">Geprüft (Demo)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h4 className="font-semibold">Skills</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.skills.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-slate-300">
                      Verfügbarkeit: <span className="text-white font-medium">{selected.availability}</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      Wunschgehalt: <span className="text-white font-medium">{selected.desiredSalary}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h4 className="font-semibold">Kontaktdaten (gesperrt)</h4>
                    <div className="mt-3 space-y-3">
                      {[
                        { label: "E-Mail", value: selected.contact.email },
                        { label: "Telefon", value: selected.contact.phone },
                        { label: "LinkedIn", value: selected.contact.linkedin },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-slate-950/30 border border-slate-800/60"
                        >
                          <span className="text-sm text-slate-400">{row.label}</span>
                          <span className="text-sm text-slate-200 select-none" style={{ filter: "blur(7px)" }}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 text-sm text-amber-100">
                      <div className="flex items-start gap-3">
                        <Lock size={18} className="mt-0.5 text-amber-300" />
                        <div>
                          <div className="font-semibold">Login erforderlich</div>
                          <div className="text-amber-200/90 mt-1">
                            Nur Basisdaten sind sichtbar. Kontaktdaten werden nach dem Login freigeschaltet.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-sm text-slate-400">
                    Aktion: Kandidat kontaktieren (in der Preview deaktiviert)
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-600/25 border border-purple-500/30 text-white cursor-not-allowed"
                    disabled
                  >
                    Kontakt freischalten
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
