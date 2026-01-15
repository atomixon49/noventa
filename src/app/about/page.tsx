"use client";

import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyText, useCopyString } from "@/components/CopyEditProvider";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  Building2,
  TrendingUp,
  Zap,
  Shield,
  Eye,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const { lang } = useLanguage();

  const screenshotSlides = ["/vendor-side.png", "/company-side.png"];
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveScreenshot((i) => (i + 1) % screenshotSlides.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [screenshotSlides.length]);

  const heroTeamAlt = useCopyString(
    "about.hero.photo1.alt",
    lang === "de" ? "Team" : "Equipo"
  );
  const foundersDoorAlt = useCopyString(
    "about.founders.photo2.alt",
    lang === "de" ? "Vertrieb (Door-to-door)" : "Ventas (puerta a puerta)"
  );
  const coincidenceTeamAlt = useCopyString(
    "about.coincidence.photo3.alt",
    lang === "de" ? "Team" : "Equipo"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section (1) */}
      <Section id="hero" className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <CopyText
                copyId="about.hero.title"
                defaultText={
                  lang === "de"
                    ? "Conexio ist nicht aus einer Idee entstanden – sondern aus Realität."
                    : "Conexio no nació de una idea – sino de la realidad."
                }
                as="span"
              />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              <CopyText
                copyId="about.hero.subtitle"
                defaultText={
                  lang === "de"
                    ? "Gebaut von Vertrieblern, für Vertriebler."
                    : "Construida por vendedores – para vendedores."
                }
                as="span"
              />
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              <CopyText
                copyId="about.hero.description"
                defaultText={
                  lang === "de"
                    ? "Transparente Jobs. Ehrliche Gehälter. Klare Matches im Vertrieb."
                    : "Trabajos transparentes. Salarios honestos. Matches claros en ventas."
                }
                as="span"
              />
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-xl"
            >
              <CopyText
                copyId="about.hero.cta"
                defaultText={lang === "de" ? "Plattform entdecken" : "Descubre la plataforma"}
                as="span"
              />
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionDiv>

          {/* Foto 1: Juan & Kerem */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <div className="relative w-full h-96">
              <Image
                src="/team.PNG"
                alt={heroTeamAlt}
                fill
                className="object-cover object-[75%_40%]"
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </Section>

      {/* Problem Section (5) */}
      <Section id="problem" className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              <CopyText
                copyId="about.problem.title"
                defaultText={lang === "de" ? "Das Problem" : "El Problema"}
                as="span"
              />
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "about.problem.salaries",
                defaultText: lang === "de" ? "Gehälter sind unklar" : "Salarios no transparentes",
                icon: Eye,
              },
              {
                id: "about.problem.promises",
                defaultText:
                  lang === "de"
                    ? "Unternehmen versprechen viel und halten wenig"
                    : "Promesas vacías",
                icon: Shield,
              },
              {
                id: "about.problem.waste",
                defaultText:
                  lang === "de"
                    ? "Interviews ohne Orientierung"
                    : "Postulaciones que hacen perder tiempo",
                icon: Zap,
              },
              {
                id: "about.problem.matches",
                defaultText:
                  lang === "de" ? "Frustration statt Perspektive" : "Malos matches",
                icon: Heart,
              },
            ].map((problem, idx) => (
              <MotionDiv
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <problem.icon className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  <CopyText copyId={problem.id} defaultText={problem.defaultText} as="span" />
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Founders' Insight Section (10) */}
      <Section id="founders-insight" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto 2: Door-to-door sales */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-96">
                <Image
                  src="/service.PNG"
                  alt={foundersDoorAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                <CopyText
                  copyId="about.founders.title"
                  defaultText={
                    lang === "de" ? "Einblick der Gründer" : "Insight de los Fundadores"
                  }
                  as="span"
                />
              </h2>

              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                <p>
                  <CopyText
                    copyId="about.founders.juan.name"
                    defaultText={lang === "de" ? "Mein Name ist Juan." : "Mi nombre es Juan."}
                    as="span"
                  />
                </p>

                <p>
                  <CopyText
                    copyId="about.founders.juan.story"
                    defaultText={
                      lang === "de"
                        ? "Vor über drei Jahren bin ich im Vertrieb gelandet – nicht aus Karrieregründen, sondern aus Notwendigkeit. Ich habe verkauft, als ginge es ums Überleben. Von Tür zu Tür. Bis heute."
                        : "Hace más de tres años aterricé en ventas – no por razones de carrera, sino por necesidad. Vendí como si se tratara de sobrevivir. De puerta en puerta. Hasta hoy."
                    }
                    as="span"
                  />
                </p>

                <p>
                  <CopyText
                    copyId="about.founders.juan.learning"
                    defaultText={
                      lang === "de"
                        ? "Dabei habe ich gelernt: Sales entscheidet nicht nur über Einkommen, sondern über Lebensqualität."
                        : "En el proceso aprendí: las ventas no solo deciden sobre los ingresos, sino sobre la calidad de vida."
                    }
                    as="span"
                  />
                </p>

                <p>
                  <CopyText
                    copyId="about.founders.juan.reality"
                    defaultText={
                      lang === "de"
                        ? "Denn im Vertrieb zeigt sich schnell, was wirklich zählt: Leistung zählt. Der richtige Vertrieb verändert Leben. Transparenz fehlt im Markt."
                        : "Porque en ventas se ve rápidamente lo que realmente importa: el rendimiento cuenta. Las ventas correctas cambian vidas. La transparencia falta en el mercado."
                    }
                    as="span"
                  />
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* Question Section (14) */}
      <Section id="question" className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              <CopyText
                copyId="about.question.title"
                defaultText={
                  lang === "de"
                    ? "Warum gibt es keine transparente Plattform für Vertrieb?"
                    : "¿Por qué no existe una plataforma transparente para ventas?"
                }
                as="span"
              />
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              <CopyText
                copyId="about.question.description"
                defaultText={
                  lang === "de"
                    ? "Weil der Markt bis heute mehr auf Versprechen als auf Vergleichbarkeit setzt."
                    : "Porque el mercado todavía se basa más en promesas que en comparabilidad."
                }
                as="span"
              />
            </p>
          </MotionDiv>
        </div>
      </Section>

      {/* Coincidence Section (16) */}
      <Section id="coincidence" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                <CopyText
                  copyId="about.coincidence.title"
                  defaultText={lang === "de" ? "Der Zufall" : "La coincidencia"}
                  as="span"
                />
              </h2>

              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                <p>
                  <CopyText
                    copyId="about.coincidence.kerem"
                    defaultText={
                      lang === "de"
                        ? "Kurz bevor ich anfing, traf ich Kerem. Vertriebler durch und durch. Analytisch, hoch energetisch, klar."
                        : "Poco antes de empezar, conocí a Kerem. Vendedor de principio a fin. Analítico, de alta energía, claro."
                    }
                    as="span"
                  />
                </p>

                <p>
                  <CopyText
                    copyId="about.coincidence.vision"
                    defaultText={
                      lang === "de"
                        ? "Er hatte die gleiche Vision – aus einer anderen Perspektive: Klarheit schaffen, bevor Menschen ihre Zeit investieren."
                        : "Tenía la misma visión – desde una perspectiva diferente: crear claridad antes de que las personas inviertan su tiempo."
                    }
                    as="span"
                  />
                </p>

                <p>
                  <CopyText
                    copyId="about.coincidence.match"
                    defaultText={
                      lang === "de"
                        ? "Von diesem Moment an war klar: Das ist kein Zufall. Das ist ein Match."
                        : "Desde ese momento quedó claro: esto no es una coincidencia. Es un match."
                    }
                    as="span"
                  />
                </p>
              </div>
            </MotionDiv>

            {/* Foto 3: Juan & Kerem juntos */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-96">
                <Image
                  src="/team2.PNG"
                  alt={coincidenceTeamAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* Vision Section (15) */}
      <Section id="vision" className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              <CopyText
                copyId="about.vision.title"
                defaultText={lang === "de" ? "Die Vision" : "La Visión"}
                as="span"
              />
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              <CopyText
                copyId="about.vision.description"
                defaultText={
                  lang === "de"
                    ? "Eine Plattform, auf der alle Vertriebsjobs transparent, zugänglich und ehrlich sind – nach Gehalt, Region, Branche und Akquisitionsart."
                    : "Una plataforma donde todos los trabajos de ventas sean transparentes, accesibles y honestos – por salario, región, industria y tipo de adquisición."
                }
                as="span"
              />
            </p>
          </MotionDiv>
        </div>
      </Section>

      {/* What is Conexio Section (20) */}
      <Section id="what-is-conexio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto: Screenshot de la plataforma */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800"
            >
              <div className="relative w-full h-96">
                {screenshotSlides.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={
                      lang === "de"
                        ? "Produkt-Screenshot"
                        : "Screenshot del producto"
                    }
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      i === activeScreenshot ? "opacity-100" : "opacity-0"
                    }`}
                    draggable={false}
                  />
                ))}

                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  {screenshotSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveScreenshot(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        i === activeScreenshot
                          ? "bg-white shadow"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={
                        lang === "de"
                          ? `Screenshot ${i + 1}`
                          : `Screenshot ${i + 1}`
                      }
                    />
                  ))}
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                <CopyText
                  copyId="about.noventa.title"
                  defaultText={
                    lang === "de" ? "Was Conexio ist" : "Qué es Conexio"
                  }
                  as="span"
                />
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                <CopyText
                  copyId="about.noventa.notJobBoard"
                  defaultText={
                    lang === "de"
                      ? "Conexio ist kein klassisches Jobboard."
                      : "Conexio no es un tablón de empleo clásico."
                  }
                  as="span"
                />
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                <CopyText
                  copyId="about.noventa.definition"
                  defaultText={
                    lang === "de"
                      ? "Conexio ist eine Matching-Plattform für die gesamte Vertriebsbranche."
                      : "Conexio es una plataforma de matching para toda la industria de ventas."
                  }
                  as="span"
                />
              </p>

              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600 dark:text-slate-300">
                    <CopyText
                      copyId="about.noventa.matching"
                      defaultText={
                        lang === "de"
                          ? "Matching statt Zufall"
                          : "Matching en vez de coincidencias"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600 dark:text-slate-300">
                    <CopyText
                      copyId="about.noventa.transparency"
                      defaultText={
                        lang === "de" ? "Transparenz" : "Transparencia"
                      }
                      as="span"
                    />
                  </span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* Value Proposition Section (23) - Multi Target */}
      <Section id="value-proposition" className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              <CopyText
                copyId="about.value.title"
                defaultText={
                  lang === "de" ? "Mehrwert" : "Propuesta de Valor"
                }
                as="span"
              />
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Para Vendedores (24) */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <CopyText
                    copyId="about.value.sellers.title"
                    defaultText={
                      lang === "de" ? "Für Vertriebler" : "Para vendedores"
                    }
                    as="span"
                  />
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.sellers.point1"
                      defaultText={
                        lang === "de"
                          ? "Neue Vertriebsmärkte"
                          : "Nuevos mercados de ventas"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.sellers.point2"
                      defaultText={
                        lang === "de"
                          ? "Unternehmen bewerben sich bei dir"
                          : "Las empresas se postulan a ti"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.sellers.point3"
                      defaultText={
                        lang === "de"
                          ? "Kritische Jobfilter"
                          : "Filtros críticos de trabajo"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.sellers.point4"
                      defaultText={
                        lang === "de"
                          ? "Prozent-Matching nach gewünschten Bedingungen"
                          : "Matching por porcentaje según condiciones deseadas"
                      }
                      as="span"
                    />
                  </span>
                </li>
              </ul>
            </MotionDiv>

            {/* Para Quereinsteiger (29) */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <CopyText
                    copyId="about.value.careerChangers.title"
                    defaultText={
                      lang === "de"
                        ? "Für Quereinsteiger"
                        : "Para personas sin experiencia"
                    }
                    as="span"
                  />
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.careerChangers.point1"
                      defaultText={
                        lang === "de"
                          ? "Zugang zu Vertrieb ohne Zufall"
                          : "Acceso a ventas sin coincidencia"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.careerChangers.point2"
                      defaultText={
                        lang === "de"
                          ? "Faire Chancen"
                          : "Oportunidades justas"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.careerChangers.point3"
                      defaultText={
                        lang === "de"
                          ? "Orientierung statt blindem Flug"
                          : "Orientación en lugar de vuelo ciego"
                      }
                      as="span"
                    />
                  </span>
                </li>
              </ul>
            </MotionDiv>

            {/* Para Empresas (33) */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <CopyText
                    copyId="about.value.companies.title"
                    defaultText={
                      lang === "de" ? "Für Unternehmen" : "Para empresas"
                    }
                    as="span"
                  />
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.companies.point1"
                      defaultText={
                        lang === "de"
                          ? "Zugang zu qualifizierten Vertrieblern"
                          : "Acceso a vendedores calificados"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.companies.point2"
                      defaultText={
                        lang === "de"
                          ? "Transparente Kommunikation"
                          : "Comunicación transparente"
                      }
                      as="span"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <CopyText
                      copyId="about.value.companies.point3"
                      defaultText={
                        lang === "de"
                          ? "Bessere Matches durch klare Kriterien"
                          : "Mejores matches mediante criterios claros"
                      }
                      as="span"
                    />
                  </span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* Why Sales Section (37) */}
      <Section id="why-sales" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              <CopyText
                copyId="about.whySales.title"
                defaultText={
                  lang === "de" ? "Warum Sales?" : "¿Por qué Ventas?"
                }
                as="span"
              />
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              <CopyText
                copyId="about.whySales.description"
                defaultText={
                  lang === "de"
                    ? "Sales entscheidet über Lebensqualität. Wir machen den Markt transparent."
                    : "Las ventas deciden sobre la calidad de vida. Hacemos el mercado transparente."
                }
                as="span"
              />
            </p>
          </MotionDiv>
        </div>
      </Section>

      {/* Conclusion Section (40) */}
      <Section id="conclusion" className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <CopyText
                copyId="about.conclusion.title"
                defaultText={
                  lang === "de"
                    ? "Bereit, den nächsten Schritt zu machen?"
                    : "¿Listo para dar el siguiente paso?"
                }
                as="span"
              />
            </h2>
            <p className="text-xl text-white/90 mb-8">
              <CopyText
                copyId="about.conclusion.description"
                defaultText={
                  lang === "de"
                    ? "Entdecke eine neue Art, im Vertrieb zu arbeiten."
                    : "Descubre una nueva forma de trabajar en ventas."
                }
                as="span"
              />
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
            >
              <CopyText
                copyId="about.conclusion.cta"
                defaultText={
                  lang === "de" ? "Profil erstellen" : "Crear perfil"
                }
                as="span"
              />
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionDiv>
        </div>
      </Section>
    </div>
  );
}
