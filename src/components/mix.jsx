import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  Building2,
  Target,
  BarChart3,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const translations = {
  de: {
    nav: {
      features: 'Funktionen',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      cta: 'Jetzt starten'
    },
    hero: {
      badge: '🎉 Beta-Version - Kostenlos verfügbar',
      title: 'Finden Sie die besten Talente für Ihr Unternehmen',
      subtitle: 'Conexio verbindet Unternehmen mit qualifizierten Fachkräften. Veröffentlichen Sie Stellenangebote, erreichen Sie Tausende von Kandidaten und bauen Sie Ihr Traumteam auf.',
      cta: 'Kostenlos registrieren',
      ctaSecondary: 'Mehr erfahren'
    },
    proof: {
      title: 'Vertrauen von führenden Unternehmen',
      companies: 'Unternehmen',
      jobs: 'Stellenangebote',
      hires: 'Erfolgreiche Einstellungen',
      satisfaction: 'Zufriedenheit'
    },
    features: {
      title: 'Alles, was Sie brauchen, um großartige Talente einzustellen',
      subtitle: 'Leistungsstarke Tools, die den Einstellungsprozess vereinfachen',
      items: [
        {
          title: 'Schnelle Veröffentlichung',
          description: 'Erstellen und veröffentlichen Sie Stellenangebote in wenigen Minuten mit unserer intuitiven Plattform.'
        },
        {
          title: 'Gezielte Reichweite',
          description: 'Erreichen Sie qualifizierte Kandidaten mit intelligenten Matching-Algorithmen.'
        },
        {
          title: 'Echtzeit-Analysen',
          description: 'Verfolgen Sie die Leistung Ihrer Stellenangebote mit detaillierten Analysen und Einblicken.'
        },
        {
          title: 'Bewerbermanagement',
          description: 'Verwalten Sie alle Bewerbungen an einem Ort mit unserem ATS-System.'
        },
        {
          title: 'Team-Zusammenarbeit',
          description: 'Arbeiten Sie mit Ihrem Team zusammen, um die besten Kandidaten zu bewerten und auszuwählen.'
        },
        {
          title: 'Sicherer Datenschutz',
          description: 'Ihre Daten sind mit erstklassiger Sicherheit und DSGVO-Konformität geschützt.'
        }
      ]
    },
    benefits: {
      title: 'Warum Conexio wählen?',
      subtitle: 'Vorteile, die Ihr Unternehmen voranbringen',
      items: [
        {
          title: 'Kostenlose Beta-Version',
          description: 'Nutzen Sie alle Premium-Funktionen kostenlos während unserer Beta-Phase.'
        },
        {
          title: 'Zeitsparend',
          description: 'Reduzieren Sie die Zeit bis zur Einstellung um bis zu 60% mit automatisierten Workflows.'
        },
        {
          title: 'Qualitätskandidaten',
          description: 'Zugang zu einem Pool von vorqualifizierten, motivierten Fachkräften.'
        },
        {
          title: 'Dedizierter Support',
          description: '24/7 Kundensupport, um Ihnen bei jedem Schritt zu helfen.'
        }
      ]
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Erfolgsgeschichten von Unternehmen, die Conexio nutzen',
      items: [
        {
          name: 'Anna Schmidt',
          role: 'HR-Leiterin',
          company: 'TechVision GmbH',
          content: 'Conexio hat unseren Einstellungsprozess revolutioniert. Wir haben in nur 2 Wochen 5 großartige Entwickler gefunden!'
        },
        {
          name: 'Michael Weber',
          role: 'CEO',
          company: 'StartUp Innovation',
          content: 'Die Plattform ist unglaublich benutzerfreundlich. Wir konnten unser Team schnell skalieren, ohne ein Vermögen auszugeben.'
        },
        {
          name: 'Sarah Müller',
          role: 'Recruiting Manager',
          company: 'Global Solutions AG',
          content: 'Die Qualität der Kandidaten auf Conexio ist außergewöhnlich. Sehr empfehlenswert für jedes wachsende Unternehmen.'
        }
      ]
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie über Conexio wissen müssen',
      items: [
        {
          question: 'Ist Conexio wirklich kostenlos?',
          answer: 'Ja! Während unserer Beta-Phase ist Conexio völlig kostenlos. Sie erhalten Zugang zu allen Premium-Funktionen ohne versteckte Kosten.'
        },
        {
          question: 'Wie schnell kann ich mit der Veröffentlichung von Stellenangeboten beginnen?',
          answer: 'Sie können sofort nach der Registrierung beginnen. Der gesamte Prozess dauert weniger als 5 Minuten.'
        },
        {
          question: 'Welche Art von Unternehmen nutzt Conexio?',
          answer: 'Von Startups bis zu etablierten Unternehmen - Conexio ist für Organisationen jeder Größe konzipiert, die qualifizierte Talente einstellen möchten.'
        },
        {
          question: 'Wie unterscheidet sich Conexio von anderen Plattformen?',
          answer: 'Conexio kombiniert moderne Technologie mit einem benutzerfreundlichen Interface und bietet intelligentes Matching, Echtzeit-Analysen und dedizierten Support.'
        },
        {
          question: 'Ist meine Unternehmensdaten sicher?',
          answer: 'Absolut. Wir verwenden erstklassige Verschlüsselung und sind vollständig DSGVO-konform, um Ihre Daten zu schützen.'
        }
      ]
    },
    footer: {
      tagline: 'Die moderne Plattform für Talentakquise',
      product: 'Produkt',
      company: 'Unternehmen',
      resources: 'Ressourcen',
      legal: 'Rechtliches',
      rights: ' 2024 Conexio. Alle Rechte vorbehalten.'
    }
  },
  en: {
    nav: {
      features: 'Features',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      cta: 'Get Started'
    },
    hero: {
      badge: '🎉 Beta Version - Free to Use',
      title: 'Find the Best Talent for Your Company',
      subtitle: 'Conexio connects companies with qualified professionals. Post job openings, reach thousands of candidates, and build your dream team.',
      cta: 'Sign Up Free',
      ctaSecondary: 'Learn More'
    },
    proof: {
      title: 'Trusted by Leading Companies',
      companies: 'Companies',
      jobs: 'Job Postings',
      hires: 'Successful Hires',
      satisfaction: 'Satisfaction'
    },
    features: {
      title: 'Everything You Need to Hire Great Talent',
      subtitle: 'Powerful tools that simplify the hiring process',
      items: [
        {
          title: 'Quick Publishing',
          description: 'Create and publish job postings in minutes with our intuitive platform.'
        },
        {
          title: 'Targeted Reach',
          description: 'Reach qualified candidates with intelligent matching algorithms.'
        },
        {
          title: 'Real-time Analytics',
          description: 'Track your job posting performance with detailed analytics and insights.'
        },
        {
          title: 'Applicant Management',
          description: 'Manage all applications in one place with our ATS system.'
        },
        {
          title: 'Team Collaboration',
          description: 'Collaborate with your team to evaluate and select the best candidates.'
        },
        {
          title: 'Secure Privacy',
          description: 'Your data is protected with top-tier security and GDPR compliance.'
        }
      ]
    },
    benefits: {
      title: 'Why Choose Conexio?',
      subtitle: 'Benefits that drive your business forward',
      items: [
        {
          title: 'Free Beta Access',
          description: 'Use all premium features for free during our beta phase.'
        },
        {
          title: 'Time-Saving',
          description: 'Reduce time-to-hire by up to 60% with automated workflows.'
        },
        {
          title: 'Quality Candidates',
          description: 'Access to a pool of pre-qualified, motivated professionals.'
        },
        {
          title: 'Dedicated Support',
          description: '24/7 customer support to help you every step of the way.'
        }
      ]
    },
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Success stories from companies using Conexio',
      items: [
        {
          name: 'Anna Schmidt',
          role: 'HR Director',
          company: 'TechVision GmbH',
          content: 'Conexio has revolutionized our hiring process. We found 5 amazing developers in just 2 weeks!'
        },
        {
          name: 'Michael Weber',
          role: 'CEO',
          company: 'StartUp Innovation',
          content: 'The platform is incredibly user-friendly. We were able to scale our team quickly without breaking the bank.'
        },
        {
          name: 'Sarah Müller',
          role: 'Recruiting Manager',
          company: 'Global Solutions AG',
          content: 'The quality of candidates on Conexio is exceptional. Highly recommended for any growing company.'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Conexio',
      items: [
        {
          question: 'Is Conexio really free?',
          answer: 'Yes! During our beta phase, Conexio is completely free. You get access to all premium features with no hidden costs.'
        },
        {
          question: 'How quickly can I start posting jobs?',
          answer: 'You can start immediately after registration. The entire process takes less than 5 minutes.'
        },
        {
          question: 'What type of companies use Conexio?',
          answer: 'From startups to established enterprises - Conexio is designed for organizations of all sizes looking to hire qualified talent.'
        },
        {
          question: 'How is Conexio different from other platforms?',
          answer: 'Conexio combines cutting-edge technology with a user-friendly interface, offering intelligent matching, real-time analytics, and dedicated support.'
        },
        {
          question: 'Is my company data secure?',
          answer: 'Absolutely. We use top-tier encryption and are fully GDPR compliant to protect your data.'
        }
      ]
    },
    footer: {
      tagline: 'The modern platform for talent acquisition',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      rights: ' 2024 Conexio. All rights reserved.'
    }
  },
  es: {
    nav: {
      features: 'Características',
      testimonials: 'Testimonios',
      faq: 'Preguntas',
      cta: 'Comenzar'
    },
    hero: {
      badge: '🎉 Versión Beta - Gratis',
      title: 'Encuentra el Mejor Talento para tu Empresa',
      subtitle: 'Conexio conecta empresas con profesionales calificados. Publica ofertas de trabajo, alcanza miles de candidatos y construye tu equipo ideal.',
      cta: 'Regístrate Gratis',
      ctaSecondary: 'Saber Más'
    },
    proof: {
      title: 'Confiado por Empresas Líderes',
      companies: 'Empresas',
      jobs: 'Ofertas Publicadas',
      hires: 'Contrataciones Exitosas',
      satisfaction: 'Satisfacción'
    },
    features: {
      title: 'Todo lo que Necesitas para Contratar Gran Talento',
      subtitle: 'Herramientas poderosas que simplifican el proceso de contratación',
      items: [
        {
          title: 'Publicación Rápida',
          description: 'Crea y publica ofertas de trabajo en minutos con nuestra plataforma intuitiva.'
        },
        {
          title: 'Alcance Dirigido',
          description: 'Alcanza candidatos calificados con algoritmos de emparejamiento inteligentes.'
        },
        {
          title: 'Análisis en Tiempo Real',
          description: 'Rastrea el rendimiento de tus ofertas con análisis detallados e información.'
        },
        {
          title: 'Gestión de Candidatos',
          description: 'Gestiona todas las aplicaciones en un solo lugar con nuestro sistema ATS.'
        },
        {
          title: 'Colaboración en Equipo',
          description: 'Colabora con tu equipo para evaluar y seleccionar los mejores candidatos.'
        },
        {
          title: 'Privacidad Segura',
          description: 'Tus datos están protegidos con seguridad de primer nivel y cumplimiento GDPR.'
        }
      ]
    },
    benefits: {
      title: '¿Por Qué Elegir Conexio?',
      subtitle: 'Beneficios que impulsan tu negocio',
      items: [
        {
          title: 'Beta Gratuita',
          description: 'Usa todas las funciones premium gratis durante nuestra fase beta.'
        },
        {
          title: 'Ahorro de Tiempo',
          description: 'Reduce el tiempo de contratación hasta un 60% con flujos de trabajo automatizados.'
        },
        {
          title: 'Candidatos de Calidad',
          description: 'Acceso a un grupo de profesionales precalificados y motivados.'
        },
        {
          title: 'Soporte Dedicado',
          description: 'Soporte al cliente 24/7 para ayudarte en cada paso del camino.'
        }
      ]
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Historias de éxito de empresas que usan Conexio',
      items: [
        {
          name: 'Ana García',
          role: 'Directora de RRHH',
          company: 'TechVision España',
          content: 'Conexio ha revolucionado nuestro proceso de contratación. ¡Encontramos 5 desarrolladores increíbles en solo 2 semanas!'
        },
        {
          name: 'Miguel Torres',
          role: 'CEO',
          company: 'Innovación StartUp',
          content: 'La plataforma es increíblemente fácil de usar. Pudimos escalar nuestro equipo rápidamente sin gastar una fortuna.'
        },
        {
          name: 'Sara Martínez',
          role: 'Gerente de Reclutamiento',
          company: 'Soluciones Globales SA',
          content: 'La calidad de los candidatos en Conexio es excepcional. Muy recomendado para cualquier empresa en crecimiento.'
        }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre Conexio',
      items: [
        {
          question: '¿Conexio es realmente gratis?',
          answer: '¡Sí! Durante nuestra fase beta, Conexio es completamente gratis. Obtienes acceso a todas las funciones premium sin costos ocultos.'
        },
        {
          question: '¿Qué tan rápido puedo empezar a publicar trabajos?',
          answer: 'Puedes comenzar inmediatamente después del registro. Todo el proceso toma menos de 5 minutos.'
        },
        {
          question: '¿Qué tipo de empresas usan Conexio?',
          answer: 'Desde startups hasta empresas establecidas - Conexio está diseñado para organizaciones de todos los tamaños que buscan contratar talento calificado.'
        },
        {
          question: '¿En qué se diferencia Conexio de otras plataformas?',
          answer: 'Conexio combina tecnología de vanguardia con una interfaz fácil de usar, ofreciendo emparejamiento inteligente, análisis en tiempo real y soporte dedicado.'
        },
        {
          question: '¿Están seguros los datos de mi empresa?',
          answer: 'Absolutamente. Usamos encriptación de primer nivel y cumplimos completamente con GDPR para proteger tus datos.'
        }
      ]
    },
    footer: {
      tagline: 'La plataforma moderna para adquisición de talento',
      product: 'Producto',
      company: 'Empresa',
      resources: 'Recursos',
      legal: 'Legal',
      rights: ' 2024 Conexio. Todos los derechos reservados.'
    }
  }
};

const ConexioLanding = () => {
  const [language, setLanguage] = useState('de');
  const [variant, setVariant] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[language];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const LanguageSwitcher = () => (
    <div className="flex gap-2">
      {['de', 'en', 'es'].map((lang) => (
        <Button
          key={lang}
          variant={language === lang ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage(lang)}
          className="uppercase"
        >
          {lang}
        </Button>
      ))}
    </div>
  );

  const VariantSwitcher = () => (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      {[1, 2, 3].map((v) => (
        <Button
          key={v}
          variant={variant === v ? 'default' : 'outline'}
          size="lg"
          onClick={() => setVariant(v)}
          className="rounded-full shadow-lg"
        >
          Design {v}
        </Button>
      ))}
    </div>
  );

  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">90</span>
            </div>
            <span className="text-2xl font-bold">Conexio</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">
              {t.nav.features}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
              {t.nav.testimonials}
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">
              {t.nav.faq}
            </button>
            <LanguageSwitcher />
            <Button>{t.nav.cta}</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              <button onClick={() => scrollToSection('features')} className="text-left hover:text-primary transition-colors">
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-primary transition-colors">
                {t.nav.testimonials}
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left hover:text-primary transition-colors">
                {t.nav.faq}
              </button>
              <LanguageSwitcher />
              <Button className="w-full">{t.nav.cta}</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  const Hero1 = () => (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge className="mb-6 text-base py-2 px-4" variant="secondary">
            {t.hero.badge}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              {t.hero.cta}
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-border shadow-2xl">
            <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center">
              <Briefcase className="w-24 h-24 text-primary/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const Hero2 = () => (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 text-base py-2 px-4" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.hero.badge}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group">
                {t.hero.cta}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-3xl blur-2xl opacity-30" />
              <Card className="relative border-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-muted rounded-lg"
                      >
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-primary/20 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-muted-foreground/20 rounded w-1/2" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const Hero3 = () => (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <Badge className="text-base py-2 px-6" variant="secondary">
              <Zap className="w-4 h-4 mr-2" />
              {t.hero.badge}
            </Badge>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              {t.hero.cta}
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 rounded-full">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Building2, label: '500+', sublabel: t.proof.companies },
              { icon: Briefcase, label: '10K+', sublabel: t.proof.jobs },
              { icon: Users, label: '5K+', sublabel: t.proof.hires },
              { icon: Star, label: '4.9/5', sublabel: t.proof.satisfaction }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  const Proof = () => (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-8">{t.proof.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: t.proof.companies, icon: Building2 },
              { value: '10,000+', label: t.proof.jobs, icon: Briefcase },
              { value: '5,000+', label: t.proof.hires, icon: Users },
              { value: '98%', label: t.proof.satisfaction, icon: Star }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  const Features = () => {
    const icons = [Zap, Target, BarChart3, Users, Globe, Shield];
    
    return (
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold mb-4">{t.benefits.title}</h3>
                  <p className="text-xl text-muted-foreground mb-8">{t.benefits.subtitle}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    {t.benefits.items.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">{benefit.title}</h4>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  };

  const Testimonials = () => (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQ = () => (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
          <p className="text-xl text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">90</span>
              </div>
              <span className="text-2xl font-bold">Conexio</span>
            </div>
            <p className="text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm"> 2024 Conexio. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Globe className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );

  const CTASection = () => (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {language === 'de' ? 'Bereit anzufangen?' : language === 'en' ? 'Ready to Get Started?' : '¿Listo para Comenzar?'}
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                {language === 'de' 
                  ? 'Schließen Sie sich Hunderten von Unternehmen an, die bereits großartige Talente mit Conexio finden.'
                  : language === 'en'
                  ? 'Join hundreds of companies already finding great talent with Conexio.'
                  : 'Únete a cientos de empresas que ya están encontrando gran talento con Conexio.'}
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t.hero.cta}
                <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {variant === 1 && <Hero1 />}
          {variant === 2 && <Hero2 />}
          {variant === 3 && <Hero3 />}
          
          <Proof />
          <Features />
          <Testimonials />
          <FAQ />
          <CTASection />
          <Footer />
        </motion.div>
      </AnimatePresence>

      <VariantSwitcher />
    </div>
  );
};

export default ConexioLanding;