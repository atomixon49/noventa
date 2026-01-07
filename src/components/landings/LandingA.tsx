"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyText } from "@/components/CopyEditProvider";
import {
  Briefcase,
  Users,
  CheckCircle2,
  Building2,
  ArrowRight,
  ChevronDown,
  Phone,
  DoorOpen,
  Zap,
  Car,
  BarChart3,
  Filter,
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
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isShowcasePaused, setIsShowcasePaused] = useState(false);
  const [selectedShowcaseImage, setSelectedShowcaseImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const showcaseCards = [
    {
      title: "Problem Statement and Roadmap",
      description: "How we’re building a pause button for biology.",
      author: "The Unit Team",
      image: "/t1.jpeg",
    },
    {
      title: "Founder Letter",
      description: "A letter from Laura and Hunter.",
      author: "Laura Deming & Hunter Davis",
      image: "/t2.jpeg",
    },
    {
      title: "Glass",
      description: "When to zoom out and when to zoom in.",
      author: "Katrina Lake",
      image: "/t3.jpeg",
    },
    {
      title: "The Hiring Playbook",
      description: "Signals that actually predict performance.",
      author: "Noventa Research",
      image: "/t4.jpeg",
    },
    {
      title: "Design Systems",
      description: "How to scale UX without slowing teams down.",
      author: "Product Studio",
      image: "/t5.jpeg",
    },
    {
      title: "Metrics that Matter",
      description: "From vanity numbers to actionable insights.",
      author: "Analytics Team",
      image: "/t6.jpeg",
    },
    {
      title: "Case Study",
      description: "A recruiting pipeline rebuilt in 14 days.",
      author: "Customer Stories",
      image: "/t7.jpeg",
    },
    {
      title: "Onboarding",
      description: "First-week experiences that retain talent.",
      author: "People Ops",
      image: "/t8.jpeg",
    },
    {
      title: "AI in Recruiting",
      description: "Automate the boring parts, keep the human ones.",
      author: "Applied AI",
      image: "/t9.jpeg",
    },
    {
      title: "Recruiting Ops",
      description: "A simple framework for consistent hiring.",
      author: "Ops Team",
      image: "/t10.jpeg",
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
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedShowcaseImage({ src: image, title });
        }}
        className="group relative h-[320px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40"
        aria-label={`open-${title}`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-colors duration-300 group-hover:ring-white/20" />
      </button>
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
                <CopyText copyId="landingA.hero.eyebrow" defaultText={t.hero.eyebrow} as="span" />
              </div>
              
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                <CopyText copyId="landingA.hero.title" defaultText={t.hero.title} as="span" />
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                <CopyText copyId="landingA.hero.subtitle" defaultText={t.hero.subtitle} as="span" />
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-sm font-semibold text-white transition-all hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
                >
                  <CopyText copyId="landingA.hero.primaryCta" defaultText={t.hero.primaryCta} as="span" />
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/50 px-8 text-sm font-semibold text-white transition-colors hover:bg-slate-800 backdrop-blur-sm"
                >
                  <CopyText copyId="landingA.hero.secondaryCta" defaultText={t.hero.secondaryCta} as="span" />
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  {[Phone, DoorOpen, Zap, Car, BarChart3].map((Icon, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center"
                    >
                      <Icon size={14} className="text-white/85" />
                    </div>
                  ))}
                </div>
                <div>
                  <CopyText copyId="landingA.hero.trustNote" defaultText={t.hero.trustNote} as="span" />
                </div>
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
          <AnimatePresence>
            {selectedShowcaseImage && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={() => setSelectedShowcaseImage(null)}
              >
                <MotionDiv
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedShowcaseImage(null)}
                    className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/60 text-white hover:bg-black/75 transition-colors"
                    aria-label="close"
                  >
                    <span className="text-xl leading-none">×</span>
                  </button>

                  <div className="bg-slate-100">
                    <img
                      src={selectedShowcaseImage.src}
                      alt={selectedShowcaseImage.title}
                      className="w-full max-h-[70vh] object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-slate-200">
                    <div className="text-sm font-semibold text-slate-900">{selectedShowcaseImage.title}</div>
                  </div>
                </MotionDiv>
              </MotionDiv>
            )}
          </AnimatePresence>

          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              <CopyText copyId="landingA.sections.whyTitle" defaultText={t.sections.whyTitle} as="span" />
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              <CopyText
                copyId="landingA.sections.whySubtitle"
                defaultText={
                  lang === "de"
                    ? "Dann bist du nicht alleine. Noventa ist genau dafür gebaut."
                    : "Enterprise-grade recruitment tools for modern companies."
                }
                as="span"
              />
            </p>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              <CopyText copyId="landingA.sections.howTitle" defaultText={t.sections.howTitle} as="span" />
            </h2>
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
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                      <CopyText copyId={`landingA.howSteps.${idx}.title`} defaultText={s.title} as="span" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-700 leading-relaxed text-lg">
                      <CopyText copyId={`landingA.howSteps.${idx}.description`} defaultText={s.description} as="span" />
                    </p>
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
                <h3 className="text-3xl font-bold text-white dark:text-slate-900 mb-4">
                  <CopyText copyId="landingA.sections.structuredTitle" defaultText={t.sections.structuredTitle} as="span" />
                </h3>
                <p className="text-lg text-slate-400 dark:text-slate-600 leading-relaxed max-w-2xl">
                  <CopyText copyId="landingA.sections.structuredSubtitle" defaultText={t.sections.structuredSubtitle} as="span" />
                </p>
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
                      <CopyText copyId={`landingA.sections.structuredTags.${i}`} defaultText={tag} as="span" />
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              <CopyText copyId="landingA.sections.comingSoonTitle" defaultText={t.sections.comingSoonTitle} as="span" />
            </h2>
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-900 group-hover:text-teal-600 transition-colors">
                    <CopyText copyId={`landingA.sections.comingSoonCards.${i}.title`} defaultText={c.title} as="span" />
                  </h3>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <CopyText copyId="landingA.sections.comingSoonBadge" defaultText="Soon" as="span" />
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-700 leading-relaxed">
                  <CopyText copyId={`landingA.sections.comingSoonCards.${i}.description`} defaultText={c.description} as="span" />
                </p>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              <CopyText
                copyId="landingA.sections.statsTitle"
                defaultText={lang === "de" ? "Zahlen, die erklären, warum Noventa nötig ist" : "Vertrauen von führenden Unternehmen"}
                as="span"
              />
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {lang === "de" ? (
              <>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Filter className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                    160+
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.de.filterCombinations" defaultText="Filterkombinationen" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <BarChart3 className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">72%</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.de.switchReadiness" defaultText="Wechselbereitschaft von Vertriebskräften (09/2025)" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Users className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">~890.000</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.de.salesPeopleDE" defaultText="Vertriebler in DE" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Building2 className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">~4700€</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.de.hiringCost" defaultText="Hiring-Kosten pro Einstellung in Deutschland" as="span" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Building2 className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                    <CountUp value={500} suffix="+" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.es.companies" defaultText="Unternehmen" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Briefcase className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                    <CountUp value={10000} suffix="+" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.es.jobOffers" defaultText="Stellenangebote" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <Users className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                    <CountUp value={5000} suffix="+" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.es.successfulHires" defaultText="Erfolgreiche Einstellungen" as="span" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 p-8 text-center shadow-sm">
                  <CheckCircle2 className="mx-auto h-9 w-9 text-slate-900" />
                  <div className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                    <CountUp value={98} suffix="%" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-600">
                    <CopyText copyId="landingA.stats.es.satisfaction" defaultText="Zufriedenheit" as="span" />
                  </div>
                </div>
              </>
            )}
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
            <Link
              href="#about"
              className="inline-flex"
              aria-label="about"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:underline underline-offset-4">
                <CopyText copyId="landingA.sections.aboutTitle" defaultText={t.sections.aboutTitle} as="span" />
              </h2>
            </Link>
            <p className="text-xl text-teal-600 dark:text-teal-400 mb-8">
              <CopyText copyId="landingA.sections.aboutSubtitle" defaultText={t.sections.aboutSubtitle} as="span" />
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              <CopyText copyId="landingA.sections.aboutText" defaultText={t.sections.aboutText} as="span" />
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
        title={<CopyText copyId="landingA.sections.socialTitle" defaultText={t.sections.socialTitle} as="span" />}
        subtitle={<CopyText copyId="landingA.sections.socialSubtitle" defaultText={t.sections.socialSubtitle} as="span" />}
        followText={<CopyText copyId="landingA.sections.followUs" defaultText={t.sections.followUs} as="span" />}
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              <CopyText copyId="landingA.sections.faqTitle" defaultText={t.sections.faqTitle} as="span" />
            </h2>
          </MotionDiv>

          <div className="grid gap-4 lg:grid-cols-2 items-start max-w-5xl mx-auto">
            {t.sections.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <MotionDiv
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="self-start h-fit rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/90 dark:bg-white/95 backdrop-blur-sm hover:border-teal-500/20 hover:shadow-lg transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 flex items-start justify-between gap-4 text-left"
                  >
                    <div className="text-lg font-bold text-slate-900 dark:text-slate-900">
                      <CopyText copyId={`landingA.sections.faqs.${i}.q`} defaultText={f.q} as="span" />
                    </div>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-slate-500 dark:text-slate-600 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <MotionDiv
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-700 leading-relaxed">
                          <CopyText copyId={`landingA.sections.faqs.${i}.a`} defaultText={f.a} as="span" />
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </MotionDiv>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <Section id="contact" className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                <CopyText copyId="landingA.sections.contactTitle" defaultText={t.sections.contactTitle} as="span" />
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-slate-900/10 overflow-hidden">
              <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-5">
                <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8" />
                <div className="lg:col-span-3">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white ml-1">
                          <CopyText copyId="landingA.contactForm.name" defaultText={t.sections.contactForm.name} as="span" />
                        </label>
                        <input
                          type="text"
                          className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-white outline-none ring-0 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                          placeholder={t.sections.contactForm.name}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-white ml-1">
                          <CopyText copyId="landingA.contactForm.email" defaultText={t.sections.contactForm.email} as="span" />
                        </label>
                        <input
                          type="email"
                          className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-white outline-none ring-0 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                          placeholder={t.sections.contactForm.email}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900 dark:text-white ml-1">
                        <CopyText copyId="landingA.contactForm.phone" defaultText={t.sections.contactForm.phone} as="span" />{" "}
                        <span className="text-slate-400 font-normal">(<CopyText copyId="landingA.contactForm.phoneOptional" defaultText={t.sections.contactForm.phoneOptional} as="span" />)</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-white outline-none ring-0 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                        placeholder="+49..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900 dark:text-white ml-1">
                        <CopyText copyId="landingA.contactForm.message" defaultText={t.sections.contactForm.message} as="span" />
                      </label>
                      <textarea
                        rows={5}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 text-slate-900 dark:text-white outline-none ring-0 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition resize-none"
                        placeholder="..."
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3 py-2">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                          required
                        />
                      </div>
                      <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400">
                        <CopyText copyId="landingA.contactForm.privacy" defaultText={t.sections.contactForm.privacy} as="span" />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-14 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/30 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <CopyText copyId="landingA.contactForm.submit" defaultText={t.sections.contactForm.submit} as="span" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </MotionDiv>
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
                  <CopyText copyId="landingA.sections.finalCtaTitle" defaultText={t.sections.finalCtaTitle} as="span" />
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  <CopyText copyId="landingA.sections.finalCtaSubtitle" defaultText={t.sections.finalCtaSubtitle} as="span" />
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="/register"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <CopyText copyId="landingA.sections.finalCta" defaultText={t.sections.finalCta} as="span" />
                  </Link>
                  <span className="text-xs text-slate-300">
                    <CopyText copyId="landingA.footer.note" defaultText={t.footer.note} as="span" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div>© Noventa</div>
              <div className="flex items-center gap-6">
                <span className="font-medium">
                  <CopyText copyId="landingA.footer.socialMedia" defaultText={t.footer.socialMedia} as="span" />:
                </span>
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
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  <CopyText copyId="landingA.footer.privacy" defaultText="Privacy" as="span" />
                </a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  <CopyText copyId="landingA.footer.terms" defaultText="Terms" as="span" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
