"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  CheckCircle,
  Briefcase,
  MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";

const registerTranslations = {
  de: {
    steps: [
      { title: "Unternehmen" },
      { title: "Kontakt" },
      { title: "Zugang" },
    ],
    leftPanel: {
      title: "Treten Sie der modernsten Recruiting-Plattform bei",
      subtitle: "Verbinden Sie sich mit den besten Vertriebstalenten. Veröffentlichen Sie Stellenangebote, verwalten Sie Kandidaten und bauen Sie Ihr ideales Team auf.",
      features: [
        "Stellenangebote in Minuten veröffentlichen",
        "Intelligentes Matching mit Kandidaten",
        "Professionelles und einfaches Dashboard",
        "100% kostenlos während der Beta-Phase"
      ]
    },
    step1: {
      title: "Unternehmensdaten",
      subtitle: "Erzählen Sie uns von Ihrem Unternehmen",
      companyName: "Firmenname *",
      companyPlaceholder: "TechCorp GmbH",
      website: "Webseite",
      websitePlaceholder: "https://ihrefirma.de",
      city: "Hauptstadt *",
      cityPlaceholder: "Berlin"
    },
    step2: {
      title: "Kontaktinformationen",
      subtitle: "Wer ist der Hauptansprechpartner?",
      name: "Vollständiger Name *",
      namePlaceholder: "Max Mustermann",
      role: "Position *",
      rolePlaceholder: "Wählen Sie Ihre Position",
      roleOptions: {
        ceo: "CEO / Gründer",
        hr: "HR-Leiter",
        sales: "Vertriebsleiter",
        recruiting: "Recruiting Manager",
        other: "Andere"
      },
      phone: "Telefon",
      phonePlaceholder: "+49 123 456 7890"
    },
    step3: {
      title: "Konto erstellen",
      subtitle: "Richten Sie Ihre Zugangsdaten ein",
      email: "Geschäftliche E-Mail *",
      emailPlaceholder: "sie@firma.de",
      password: "Passwort *",
      passwordPlaceholder: "Mindestens 8 Zeichen",
      confirmPassword: "Passwort bestätigen *",
      confirmPlaceholder: "Passwort wiederholen",
      terms: "Ich akzeptiere die",
      termsLink: "Nutzungsbedingungen",
      privacyLink: "Datenschutzrichtlinie",
      and: "und die"
    },
    buttons: {
      back: "Zurück",
      continue: "Weiter",
      createAccount: "Konto erstellen"
    },
    footer: {
      hasAccount: "Haben Sie bereits ein Konto?",
      login: "Anmelden"
    }
  },
  en: {
    steps: [
      { title: "Company" },
      { title: "Contact" },
      { title: "Access" },
    ],
    leftPanel: {
      title: "Join the most modern recruiting platform",
      subtitle: "Connect with the best sales talent. Post job offers, manage candidates, and build your ideal team.",
      features: [
        "Publish job offers in minutes",
        "Intelligent matching with candidates",
        "Professional and easy-to-use dashboard",
        "100% free during beta phase"
      ]
    },
    step1: {
      title: "Company details",
      subtitle: "Tell us about your company",
      companyName: "Company name *",
      companyPlaceholder: "TechCorp Inc.",
      website: "Website",
      websitePlaceholder: "https://yourcompany.com",
      city: "Main city *",
      cityPlaceholder: "Berlin"
    },
    step2: {
      title: "Contact information",
      subtitle: "Who is the main contact?",
      name: "Full name *",
      namePlaceholder: "John Smith",
      role: "Position *",
      rolePlaceholder: "Select your position",
      roleOptions: {
        ceo: "CEO / Founder",
        hr: "HR Director",
        sales: "Sales Director",
        recruiting: "Recruiting Manager",
        other: "Other"
      },
      phone: "Phone",
      phonePlaceholder: "+49 123 456 7890"
    },
    step3: {
      title: "Create your account",
      subtitle: "Set up your access credentials",
      email: "Business email *",
      emailPlaceholder: "you@company.com",
      password: "Password *",
      passwordPlaceholder: "Minimum 8 characters",
      confirmPassword: "Confirm password *",
      confirmPlaceholder: "Repeat your password",
      terms: "I accept the",
      termsLink: "Terms of Service",
      privacyLink: "Privacy Policy",
      and: "and the"
    },
    buttons: {
      back: "Back",
      continue: "Continue",
      createAccount: "Create account"
    },
    footer: {
      hasAccount: "Already have an account?",
      login: "Sign in"
    }
  },
  es: {
    steps: [
      { title: "Empresa" },
      { title: "Contacto" },
      { title: "Acceso" },
    ],
    leftPanel: {
      title: "Únete a la plataforma de reclutamiento más moderna",
      subtitle: "Conecta con los mejores talentos en ventas. Publica ofertas, gestiona candidatos y construye tu equipo ideal.",
      features: [
        "Publicación de ofertas en minutos",
        "Matching inteligente con candidatos",
        "Dashboard profesional y fácil de usar",
        "100% gratis durante la fase beta"
      ]
    },
    step1: {
      title: "Datos de tu empresa",
      subtitle: "Cuéntanos sobre tu empresa",
      companyName: "Nombre de la empresa *",
      companyPlaceholder: "TechCorp GmbH",
      website: "Página web",
      websitePlaceholder: "https://tuempresa.com",
      city: "Ciudad principal *",
      cityPlaceholder: "Berlín"
    },
    step2: {
      title: "Información de contacto",
      subtitle: "¿Quién será el contacto principal?",
      name: "Nombre completo *",
      namePlaceholder: "Max Mustermann",
      role: "Cargo *",
      rolePlaceholder: "Selecciona tu cargo",
      roleOptions: {
        ceo: "CEO / Fundador",
        hr: "Director de RRHH",
        sales: "Director Comercial",
        recruiting: "Recruiting Manager",
        other: "Otro"
      },
      phone: "Teléfono",
      phonePlaceholder: "+49 123 456 7890"
    },
    step3: {
      title: "Crea tu cuenta",
      subtitle: "Configura tus credenciales de acceso",
      email: "Email corporativo *",
      emailPlaceholder: "tu@empresa.com",
      password: "Contraseña *",
      passwordPlaceholder: "Mínimo 8 caracteres",
      confirmPassword: "Confirmar contraseña *",
      confirmPlaceholder: "Repite tu contraseña",
      terms: "Acepto los",
      termsLink: "Términos de Servicio",
      privacyLink: "Política de Privacidad",
      and: "y la"
    },
    buttons: {
      back: "Atrás",
      continue: "Continuar",
      createAccount: "Crear cuenta"
    },
    footer: {
      hasAccount: "¿Ya tienes cuenta?",
      login: "Inicia sesión"
    }
  }
};

export default function RegisterPage() {
  const { lang } = useLanguage();
  const tr = registerTranslations[lang as keyof typeof registerTranslations] || registerTranslations.de;
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    city: "",
    contactName: "",
    contactRole: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    router.push("/dashboard");
  };

  const steps = [
    { num: 1, title: tr.steps[0].title, icon: Building2 },
    { num: 2, title: tr.steps[1].title, icon: User },
    { num: 3, title: tr.steps[2].title, icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col lg:flex-row">
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-black/40 transition-colors"
        >
          Regresar a Home
        </Link>
      </div>
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/20 to-[#0f172a]" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        
        <div className="relative z-10 flex flex-col justify-center px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-12 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20">
              <Image 
                src="/noventa-1.jpeg" 
                alt="Noventa" 
                width={200} 
                height={60}
                className=""
              />
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6">
              {tr.leftPanel.title}
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              {tr.leftPanel.subtitle}
            </p>

            <div className="space-y-4">
              {tr.leftPanel.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle size={14} className="text-cyan-400" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl backdrop-blur-sm border border-white/10"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotateZ: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-40 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rounded-xl backdrop-blur-sm border border-white/10"
        />
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[95%] sm:max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-6 sm:mb-8 text-center">
            <div className="inline-block p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
              <Image 
                src="/noventa-1.jpeg" 
                alt="Noventa" 
                width={150} 
                height={45}
                className="w-28 sm:w-36"
              />
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <motion.div
                  animate={{
                    scale: step === s.num ? 1.1 : 1,
                    backgroundColor: step >= s.num ? "#0891b2" : "#334155"
                  }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                >
                  {step > s.num ? <CheckCircle size={16} className="sm:w-5 sm:h-5" /> : <s.icon size={14} className="sm:w-[18px] sm:h-[18px]" />}
                </motion.div>
                {i < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 rounded ${step > s.num ? 'bg-cyan-500' : 'bg-slate-600'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5 sm:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              {step === 1 && tr.step1.title}
              {step === 2 && tr.step2.title}
              {step === 3 && tr.step3.title}
            </h2>
            <p className="text-slate-400 mb-6">
              {step === 1 && tr.step1.subtitle}
              {step === 2 && tr.step2.subtitle}
              {step === 3 && tr.step3.subtitle}
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                if (step < 3) {
                  nextStep();
                } else {
                  handleSubmit();
                }
              }}
            >
              {/* Step 1: Company Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step1.companyName}
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder={tr.step1.companyPlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step1.website}
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder={tr.step1.websitePlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step1.city}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder={tr.step1.cityPlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step2.name}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder={tr.step2.namePlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step2.role}
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <select
                        name="contactRole"
                        value={formData.contactRole}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none"
                      >
                        <option value="">{tr.step2.rolePlaceholder}</option>
                        <option value="ceo">{tr.step2.roleOptions.ceo}</option>
                        <option value="hr">{tr.step2.roleOptions.hr}</option>
                        <option value="sales">{tr.step2.roleOptions.sales}</option>
                        <option value="recruiting">{tr.step2.roleOptions.recruiting}</option>
                        <option value="other">{tr.step2.roleOptions.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step2.phone}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={tr.step2.phonePlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Account */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step3.email}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={tr.step3.emailPlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step3.password}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={tr.step3.passwordPlaceholder}
                        className="w-full pl-11 pr-12 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {tr.step3.confirmPassword}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder={tr.step3.confirmPlaceholder}
                        className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                    />
                    <label htmlFor="terms" className="text-sm text-slate-400">
                      {tr.step3.terms} <a href="#" className="text-cyan-400 hover:underline">{tr.step3.termsLink}</a> {tr.step3.and} <a href="#" className="text-cyan-400 hover:underline">{tr.step3.privacyLink}</a>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-3 px-6 border border-slate-600 rounded-xl text-white font-semibold hover:bg-slate-700/50 transition-all"
                  >
                    {tr.buttons.back}
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                  >
                    {tr.buttons.continue} <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                  >
                    {tr.buttons.createAccount} <CheckCircle size={18} />
                  </button>
                )}
              </div>
            </form>

            <p className="text-center text-slate-400 mt-6">
              {tr.footer.hasAccount}{" "}
              <Link href="/login" className="text-cyan-400 hover:underline font-medium">
                {tr.footer.login}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
