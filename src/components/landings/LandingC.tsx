"use client";

import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  FileText, 
  Check, 
  ArrowRight, 
  Clock, 
  MapPin, 
  DollarSign, 
  Users, 
  MessageSquare,
  ChevronRight,
  Briefcase,
  BarChart2
} from "lucide-react";
import Link from "next/link";

export function LandingC() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white font-sans">
      {/* Hero with Background Image */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-stone-50/95" />

        <Section className="relative pt-24 pb-20 sm:pt-32">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Editorial Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-1.5 border border-stone-900 text-xs font-semibold uppercase tracking-widest">Beta</span>
                  <span className="px-4 py-1.5 border border-stone-900 text-xs font-semibold uppercase tracking-widest">Kostenlos</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-stone-900">
                  {t.hero.title}
                </h1>
                
                <div className="text-xl leading-relaxed text-stone-600 mb-12 max-w-xl">
                  {t.hero.subtitle}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link
                    href="/register"
                    className="group flex items-center gap-3 bg-stone-900 text-white px-10 py-4 text-sm font-semibold hover:bg-stone-800 transition-all hover:shadow-lg"
                  >
                    {t.hero.primaryCta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="#how"
                    className="flex items-center gap-3 px-10 py-4 text-sm font-semibold border-2 border-stone-300 hover:border-stone-900 transition-colors"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-4 text-sm text-stone-500 font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-stone-50 bg-stone-300" />
                    ))}
                  </div>
                  {t.hero.trustNote}
                </div>
              </MotionDiv>
            </div>

            {/* Right Column - Professional Document Dashboard */}
            <div className="lg:col-span-6 relative">
              <MotionDiv
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="bg-white border border-stone-200 shadow-2xl shadow-stone-900/10 overflow-hidden max-w-md mx-auto">
                  {/* Header */}
                  <div className="border-b border-stone-100 px-6 py-4 flex items-center justify-between bg-stone-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center font-bold text-xs">90</div>
                      <div>
                        <div className="text-sm font-bold text-stone-900">Noventa</div>
                        <div className="text-[10px] text-stone-500 uppercase tracking-wider">Enterprise Dashboard</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-stone-200" />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 border-b border-stone-100">
                    <div className="p-4 border-r border-stone-100 text-center">
                      <div className="text-2xl font-bold text-stone-900">12</div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">Active Jobs</div>
                    </div>
                    <div className="p-4 border-r border-stone-100 text-center">
                      <div className="text-2xl font-bold text-stone-900">248</div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">Candidates</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-600">94%</div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">Match Rate</div>
                    </div>
                  </div>

                  {/* Job Document */}
                  <div className="p-6">
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-3 font-semibold">Featured Position</div>
                    
                    <div className="border border-stone-200 p-5 mb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-stone-900">Account Executive</h3>
                          <div className="flex flex-wrap gap-3 mt-2 text-xs text-stone-600">
                            <span className="flex items-center gap-1"><MapPin size={12} /> Berlin</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> Full-time</span>
                            <span className="flex items-center gap-1"><DollarSign size={12} /> €55k-80k</span>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-semibold uppercase">Live</div>
                      </div>
                      
                      <div className="space-y-2">
                        {["B2B SaaS Experience", "Native German", "Closing Skills"].map((req, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                            <Check size={12} className="text-stone-900" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center">
                        <div className="text-xs text-stone-500">23 qualified matches</div>
                        <div className="h-1.5 w-24 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-stone-900 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-stone-50 border border-stone-100 flex items-center gap-3">
                        <Briefcase size={16} className="text-stone-400" />
                        <div>
                          <div className="text-xs font-semibold text-stone-900">5 Drafts</div>
                          <div className="text-[10px] text-stone-500">Ready to publish</div>
                        </div>
                      </div>
                      <div className="p-3 bg-stone-50 border border-stone-100 flex items-center gap-3">
                        <BarChart2 size={16} className="text-stone-400" />
                        <div>
                          <div className="text-xs font-semibold text-stone-900">+34%</div>
                          <div className="text-[10px] text-stone-500">This month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Shadow layers */}
                <div className="absolute top-3 left-3 right-[-6px] h-full bg-stone-200/50 -z-10" />
                <div className="absolute top-6 left-6 right-[-12px] h-full bg-stone-200/30 -z-20" />
              </MotionDiv>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-20 border-t border-stone-200">
        <div className="grid lg:grid-cols-3 gap-12">
          {t.sections.whyCards.map((c, i) => (
            <MotionDiv
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center mb-6 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">{c.title}</h3>
              <p className="text-stone-600 leading-relaxed">{c.description}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      <Section id="how" className="py-20 border-t border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">{t.sections.howTitle}</h2>
            <p className="text-stone-600">No complex wizards. Just three steps to value.</p>
          </div>
          
          <div className="space-y-0">
            {t.sections.howSteps.map((s, idx) => (
              <div key={s.title} className="group flex gap-8 p-8 border-b border-stone-100 hover:bg-stone-50 transition-colors">
                <div className="text-4xl font-bold text-stone-200 group-hover:text-stone-900 transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-stone-900">{s.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 border-t border-stone-200">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-stone-900">{t.sections.structuredTitle}</h2>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">{t.sections.structuredSubtitle}</p>
            
            <div className="flex flex-wrap gap-2">
              {t.sections.structuredTags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-stone-100 border border-stone-200 text-sm font-medium text-stone-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            {t.sections.comingSoonCards.map((c, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 hover:border-stone-400 transition-colors">
                <div className="mb-4 text-stone-400">
                  {i === 0 && <FileText className="w-6 h-6" />}
                  {i === 1 && <MessageSquare className="w-6 h-6" />}
                  {i === 2 && <Users className="w-6 h-6" />}
                  {i === 3 && <Clock className="w-6 h-6" />}
                </div>
                <h4 className="font-bold mb-2 text-stone-900">{c.title}</h4>
                <p className="text-sm text-stone-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 border-t border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-stone-900">{t.sections.faqTitle}</h2>
          {t.sections.faqs.map((f) => (
            <div key={f.q} className="group border border-stone-200 p-6 hover:bg-stone-50 transition-colors cursor-default">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-stone-900">{f.q}</h3>
                <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-600 transition-colors" />
              </div>
              <p className="text-stone-600">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cta" className="py-32 text-center bg-stone-50">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 text-stone-900">
          {t.sections.finalCtaTitle}
        </h2>
        <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
          {t.sections.finalCtaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#"
            className="px-8 py-4 bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-colors"
          >
            {t.sections.finalCta}
          </a>
          <span className="text-sm font-medium text-stone-500">{t.footer.note}</span>
        </div>
        
        <div className="mt-32 pt-8 border-t border-stone-200 flex justify-between text-xs font-medium text-stone-500">
          <span>© Noventa</span>
          <div className="space-x-4">
            <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
          </div>
        </div>
      </Section>
    </div>
  );
}
