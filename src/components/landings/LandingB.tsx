"use client";

import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  Rocket, 
  Zap, 
  Target, 
  Sparkles, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Bell, 
  Search,
  Filter,
  LayoutGrid,
  PieChart,
  ArrowUpRight,
  Briefcase,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export function LandingB() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0c0a1d] text-white selection:bg-violet-500/30 overflow-x-hidden">
      {/* Hero with Background Image */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a1d]/80 via-[#0c0a1d]/90 to-[#0c0a1d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20" />

        <Section className="relative z-10 pt-20 pb-20 sm:pt-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-violet-400" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    {t.hero.primaryCta} <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="#how"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 font-semibold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-white/50">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0c0a1d] bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                  ))}
                </div>
                <p>{t.hero.trustNote}</p>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              {/* Professional Dashboard */}
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="relative z-10 rounded-2xl border border-white/10 bg-[#13112a]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Top Bar */}
                  <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs">90</div>
                      <span className="text-sm font-semibold text-white">Noventa Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-white/40" />
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={14} className="text-violet-400" />
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Active</span>
                        </div>
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                          <ArrowUpRight size={10} /> +3 this week
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={14} className="text-fuchsia-400" />
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Matches</span>
                        </div>
                        <div className="text-2xl font-bold text-white">156</div>
                        <div className="text-[10px] text-white/40 mt-1">Qualified</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <PieChart size={14} className="text-sky-400" />
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Rate</span>
                        </div>
                        <div className="text-2xl font-bold text-white">92%</div>
                        <div className="text-[10px] text-white/40 mt-1">Match score</div>
                      </div>
                    </div>

                    {/* Active Campaign Card */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 mb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-xs font-medium text-violet-300 mb-1">Featured Campaign</div>
                          <h3 className="text-lg font-bold text-white">Senior Product Designer</h3>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-white/70">Munich</span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-white/70">€70k-95k</span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400">Live</span>
                          </div>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-300">
                          <TrendingUp size={20} />
                        </div>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] mt-1.5 text-white/50">
                        <span>23 applications</span>
                        <span>78% filled</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="h-8 w-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                          <LayoutGrid size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">New Campaign</div>
                          <div className="text-[10px] text-white/40">Create job offer</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="h-8 w-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                          <Filter size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Smart Filters</div>
                          <div className="text-[10px] text-white/40">50+ criteria</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 blur-3xl transform scale-110" />
              </div>
            </MotionDiv>
          </div>
        </Section>
      </div>

      <Section className="relative py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Zap, color: "text-yellow-400", title: t.sections.whyCards[0].title, desc: t.sections.whyCards[0].description },
            { icon: Filter, color: "text-violet-400", title: t.sections.whyCards[1].title, desc: t.sections.whyCards[1].description },
            { icon: Rocket, color: "text-sky-400", title: t.sections.whyCards[2].title, desc: t.sections.whyCards[2].description },
          ].map((card, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <card.icon className={`h-8 w-8 ${card.color} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      <Section id="how" className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 blur-3xl rounded-full" />
        
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">{t.sections.howTitle}</h2>
            <div className="space-y-8">
              {t.sections.howSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-none flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center text-sm font-bold text-violet-300">
                      {i + 1}
                    </div>
                    {i !== t.sections.howSteps.length - 1 && <div className="w-px h-full bg-violet-500/20 my-2" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/20 to-black p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.sections.structuredTitle}</h3>
                <p className="text-white/60 mb-6">{t.sections.structuredSubtitle}</p>
                
                <div className="flex flex-wrap gap-2">
                  {t.sections.structuredTags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-violet-500/20 hover:border-violet-500/50 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </Section>

      <Section className="relative py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">{t.sections.comingSoonTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.sections.comingSoonCards.map((c, i) => (
            <MotionDiv
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-violet-500/30 transition-all text-center group"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-violet-500/20 group-hover:text-violet-300">
                {i === 0 && <Users size={20} />}
                {i === 1 && <MessageCircle size={20} />}
                {i === 2 && <Target size={20} />}
                {i === 3 && <Search size={20} />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-white/50">{c.description}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      <Section id="cta" className="py-24">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-20 text-center sm:px-12 sm:py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {t.sections.finalCtaTitle}
            </h2>
            <p className="text-xl text-violet-100 mb-10">
              {t.sections.finalCtaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-violet-600 shadow-xl hover:bg-violet-50 hover:scale-105 transition-all"
              >
                {t.sections.finalCta} <Rocket className="ml-2 h-5 w-5" />
              </a>
              <span className="text-sm text-violet-200">{t.footer.note}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between text-sm text-white/40">
           <div>© Noventa</div>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white">Twitter</a>
             <a href="#" className="hover:text-white">LinkedIn</a>
           </div>
        </div>
      </Section>
    </div>
  );
}

