"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Settings, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Filter,
  Building2,
  FileText,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { HeroDashboard } from "@/components/landings/HeroDashboard";
import { CountUp } from "@/components/CountUp";

function Card({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition-all hover:border-teal-500/30 hover:bg-slate-800/80">
      <Icon className="h-7 w-7 text-teal-400" />
      <div className="mt-4 text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-400">{description}</div>
    </div>
  );
}

export function LandingA() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-950 text-white selection:bg-teal-500/30">
      {/* Hero with Background Image + Overlay */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-slate-900/90 dark:bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900 dark:from-slate-950/50 dark:to-slate-950" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MotionDiv
            className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ y: [0, -18, 0], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <MotionDiv
            className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
            animate={{ y: [0, 16, 0], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <MotionDiv
            className="absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{ y: [0, -20, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <MotionDiv
            className="absolute left-1/4 top-1/2 h-3 w-3 rounded-full bg-white/50"
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <MotionDiv
            className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-cyan-200/60"
            animate={{ y: [0, 14, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <MotionDiv
            className="absolute right-1/3 bottom-1/4 h-2.5 w-2.5 rounded-full bg-teal-200/60"
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          />
        </div>

        <Section className="relative pt-20 pb-24 sm:pt-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span>{t.hero.eyebrow}</span>
              </div>
              
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                {t.hero.subtitle}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-sm font-semibold text-white transition-all hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/50 px-8 text-sm font-semibold text-white transition-colors hover:bg-slate-800 backdrop-blur-sm"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-600 to-slate-700" />
                  ))}
                </div>
                <div>{t.hero.trustNote}</div>
              </div>
            </div>

            {/* Professional Dashboard Mockup */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <HeroDashboard />
              
              {/* Subtle glow */}
              <div className="absolute -z-10 inset-0 bg-teal-500/10 blur-3xl rounded-full transform scale-110" />
            </MotionDiv>
          </MotionDiv>
        </Section>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 py-24">
        <Section className="relative">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.sections.whyTitle}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Enterprise-grade recruitment tools for modern companies.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, ...t.sections.whyCards[0] },
              { icon: Filter, ...t.sections.whyCards[1] },
              { icon: CheckCircle2, ...t.sections.whyCards[2] },
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white/95 p-6 shadow-sm transition-all hover:border-teal-500/30 hover:shadow-md">
                <card.icon className="h-7 w-7 text-teal-600 dark:text-teal-600" />
                <div className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-900">{card.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-700">{card.description}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <Section id="how" className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">{t.sections.howTitle}</h2>
          </MotionDiv>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-200 dark:bg-slate-800 hidden lg:block" />
            <div className="grid gap-12">
              {t.sections.howSteps.map((s, idx) => (
                <MotionDiv 
                  key={s.title} 
                  className="relative pl-0 lg:pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="hidden lg:flex absolute left-0 top-2 h-12 w-12 items-center justify-center">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-20 dark:opacity-40"></span>
                      <span className="relative inline-flex h-12 w-12 rounded-full border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 items-center justify-center text-sm font-bold text-teal-600 dark:text-white shadow-sm z-10">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                  <div className="group rounded-2xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white/95 p-8 hover:border-teal-500/30 hover:shadow-lg transition-all duration-300">
                    <div className="lg:hidden mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-900/30 text-xs font-bold text-teal-600 dark:text-white">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{s.title}</h3>
                    <p className="text-slate-600 dark:text-slate-700 leading-relaxed text-lg">{s.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 py-24">
        <Section className="relative">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-slate-900 dark:bg-white shadow-2xl overflow-hidden relative transform hover:scale-[1.01] transition-transform duration-500">
              {/* Window Controls */}
              <div className="border-b border-slate-800 dark:border-slate-200 bg-slate-900/50 dark:bg-white/60 px-6 py-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="p-8 md:p-16 relative z-10">
                <h3 className="text-3xl font-bold text-white dark:text-slate-900 mb-4">{t.sections.structuredTitle}</h3>
                <p className="text-lg text-slate-400 dark:text-slate-600 leading-relaxed max-w-2xl">{t.sections.structuredSubtitle}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {t.sections.structuredTags.map((tag, i) => (
                    <MotionDiv
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-lg border border-slate-700 dark:border-slate-200 bg-slate-800/50 dark:bg-slate-50 px-4 py-2 text-sm text-teal-200 dark:text-teal-700 font-mono hover:bg-slate-800 dark:hover:bg-white hover:border-teal-500/50 transition-colors cursor-default"
                    >
                      {tag}
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        </Section>
      </div>

      <div className="relative overflow-hidden bg-white dark:bg-slate-950 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-white/92 dark:bg-slate-950/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white dark:from-slate-950/70 dark:to-slate-950" />
        <Section className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">{t.sections.comingSoonTitle}</h2>
          </MotionDiv>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {t.sections.comingSoonCards.map((c, i) => (
              <MotionDiv 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-900 group-hover:text-teal-600 transition-colors">{c.title}</h3>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Soon</span>
                </div>
                <p className="text-slate-600 dark:text-slate-700 leading-relaxed">{c.description}</p>
              </MotionDiv>
            ))}
          </div>
        </Section>
      </div>

      <div className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        {/* Snow/Sparkle particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <MotionDiv
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-slate-400/40 dark:bg-white/30"
              style={{
                left: `${5 + (i * 5.2) % 90}%`,
                top: `${(i * 17) % 100}%`,
              }}
              animate={{
                y: [0, 80 + (i % 3) * 30, 0],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <Section className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Vertrauen von führenden Unternehmen</h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
              <Building2 className="mx-auto h-9 w-9 text-slate-900" />
              <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                <CountUp value={500} suffix="+" />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">Unternehmen</div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
              <Briefcase className="mx-auto h-9 w-9 text-slate-900" />
              <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                <CountUp value={10000} suffix="+" />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">Stellenangebote</div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
              <Users className="mx-auto h-9 w-9 text-slate-900" />
              <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                <CountUp value={5000} suffix="+" />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">Erfolgreiche Einstellungen</div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
              <CheckCircle2 className="mx-auto h-9 w-9 text-slate-900" />
              <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                <CountUp value={98} suffix="%" />
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">Zufriedenheit</div>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-24">
        <video
          className="hidden lg:block absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
        >
          <source src="https://www.pexels.com/es-es/download/video/3196062/" type="video/mp4" />
        </video>
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-slate-50/92 dark:bg-slate-900/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-transparent to-slate-50 dark:from-slate-900/70 dark:to-slate-900" />
        <Section id="faq" className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t.sections.faqTitle}</h2>
          </MotionDiv>

          <div className="grid gap-4 lg:grid-cols-2 max-w-5xl mx-auto">
            {t.sections.faqs.map((f, i) => (
              <MotionDiv
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 backdrop-blur-sm hover:border-teal-500/20 hover:shadow-lg transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq((curr) => (curr === i ? null : i))}
                  className="w-full p-6 flex items-start justify-between gap-4 text-left"
                >
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-900">{f.q}</div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-slate-500 dark:text-slate-600 transition-transform ${openFaq === i ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i ? (
                    <MotionDiv
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-700 leading-relaxed">{f.a}</div>
                    </MotionDiv>
                  ) : null}
                </AnimatePresence>
              </MotionDiv>
            ))}
          </div>
        </Section>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 pt-10 pb-10">
        <Section id="cta" className="relative pb-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.sections.finalCtaTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-teal-100">
                {t.sections.finalCtaSubtitle}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50 transition-colors"
                >
                  {t.sections.finalCta}
                </a>
                <span className="text-xs text-teal-200">{t.footer.note}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div>© Noventa</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
