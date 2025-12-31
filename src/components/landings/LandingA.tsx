"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Building2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { HeroDashboard } from "@/components/landings/HeroDashboard";
import { CountUp } from "@/components/CountUp";
import { SocialMediaGallery } from "@/components/SocialMediaGallery";

const ShaderBackground = dynamic(
  () => import("@/components/ShaderBackground").then((m) => m.ShaderBackground),
  { ssr: false },
);

export function LandingA() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isShowcasePaused, setIsShowcasePaused] = useState(false);

  const showcaseCards = [
    {
      title: "Problem Statement and Roadmap",
      description: "How we’re building a pause button for biology.",
      author: "The Unit Team",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Founder Letter",
      description: "A letter from Laura and Hunter.",
      author: "Laura Deming & Hunter Davis",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Glass",
      description: "When to zoom out and when to zoom in.",
      author: "Katrina Lake",
      image:
        "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "The Hiring Playbook",
      description: "Signals that actually predict performance.",
      author: "Noventa Research",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Design Systems",
      description: "How to scale UX without slowing teams down.",
      author: "Product Studio",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Metrics that Matter",
      description: "From vanity numbers to actionable insights.",
      author: "Analytics Team",
      image:
        "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Case Study",
      description: "A recruiting pipeline rebuilt in 14 days.",
      author: "Customer Stories",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Onboarding",
      description: "First-week experiences that retain talent.",
      author: "People Ops",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "AI in Recruiting",
      description: "Automate the boring parts, keep the human ones.",
      author: "Applied AI",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Recruiting Ops",
      description: "A simple framework for consistent hiring.",
      author: "Ops Team",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
    },
  ];

  function ShowcaseCard({
    title,
    description,
    author,
    image,
  }: {
    title: string;
    description: string;
    author: string;
    image: string;
  }) {
    return (
      <div
        className="w-[420px] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
      >
        <div className="flex items-stretch justify-between gap-6 p-5">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-slate-900 truncate">{title}</div>
            <div className="mt-1 max-h-10 overflow-hidden text-sm leading-5 text-slate-600">{description}</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <div className="h-6 w-6 rounded-full bg-slate-200" />
              <div className="truncate">{author}</div>
            </div>
          </div>

          <div className="h-[96px] w-[120px] overflow-hidden rounded-xl bg-slate-100">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    );
  }

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

          <div className="space-y-6">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent" />

              <div
                className={
                  "noventa-marquee noventa-marquee--left rounded-2xl " +
                  (isShowcasePaused ? "is-paused" : "")
                }
                style={{
                  // @ts-expect-error CSS var
                  "--noventa-marquee-duration": "70s",
                }}
                onClick={() => setIsShowcasePaused((v) => !v)}
              >
                <div className="noventa-marquee__track flex gap-6 pr-6">
                  {[...showcaseCards, ...showcaseCards].map((c, idx) => (
                    <div key={idx} className="py-1">
                      <ShowcaseCard {...c} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent" />

              <div
                className={
                  "noventa-marquee noventa-marquee--right rounded-2xl " +
                  (isShowcasePaused ? "is-paused" : "")
                }
                style={{
                  // @ts-expect-error CSS var
                  "--noventa-marquee-duration": "78s",
                }}
                onClick={() => setIsShowcasePaused((v) => !v)}
              >
                <div className="noventa-marquee__track flex gap-6 pr-6">
                  {[...showcaseCards.slice(5), ...showcaseCards.slice(0, 5), ...showcaseCards.slice(5), ...showcaseCards.slice(0, 5)].map((c, idx) => (
                    <div key={idx} className="py-1">
                      <ShowcaseCard {...c} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

      <div className="bg-slate-50 dark:bg-slate-900 py-20">
        <Section id="about" className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.sections.aboutTitle}</h2>
            <p className="text-xl text-teal-600 dark:text-teal-400 mb-8">{t.sections.aboutSubtitle}</p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              {t.sections.aboutText}
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                alt="Team" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </MotionDiv>
        </Section>
      </div>

      {/* Social Media Gallery */}
      <SocialMediaGallery 
        title={t.sections.socialTitle}
        subtitle={t.sections.socialSubtitle}
        followText={t.sections.followUs}
      />

      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900">
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
          <div className="relative overflow-hidden rounded-xl shadow-2xl h-[400px] lg:h-[500px]">
            {/* ShaderBackground as animated background */}
            <div className="absolute inset-0">
              <ShaderBackground className="w-full h-full" />
            </div>
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            
            {/* Radial gradient vignette */}
            <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_black_100%)]" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 sm:px-16 lg:px-24">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.sections.finalCtaTitle}
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  {t.sections.finalCtaSubtitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="/register"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    {t.sections.finalCta}
                  </Link>
                  <span className="text-xs text-slate-300">{t.footer.note}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div>© Noventa</div>
              <div className="flex items-center gap-6">
                <span className="font-medium">{t.footer.socialMedia}:</span>
                <a href="https://instagram.com/noventa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a href="https://tiktok.com/@noventa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  TikTok
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
