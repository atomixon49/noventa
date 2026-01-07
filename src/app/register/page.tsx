"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  CheckCircle,
  Shield,
  Loader2,
  ChevronLeft,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyText, useCopyString } from "@/components/CopyEditProvider";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// Endpoints from environment variables
const API_CREATE_COMPANY = process.env.NEXT_PUBLIC_API_CREATE_COMPANY || "https://loginnoventa.hjsolutions.site/public/create/company";
const API_CREATE_USER = process.env.NEXT_PUBLIC_API_CREATE_USER || "https://loginnoventa.hjsolutions.site/public/create/user";

type Role = "company" | "user";

const registerTranslations = {
  de: {
    title: "Firmenprofil erstelle",
    subtitle: "Erzähl uns von deinem Unternehmen",
    roles: {
      company: "Unternehmen",
      user: "Vertriebler"
    },
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      username: "Benutzername",
      email: "E-Mail",
      password: "Passwort",
      confirmPassword: "Passwort bestätigen",
      submit: "Registrieren",
      loading: "Wird verarbeitet...",
      success: "Konto erfolgreich erstellt!",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
    },
    passwordStrength: {
      low: "Schwach",
      medium: "Mittel",
      high: "Stark"
    }
  },
  en: {
    title: "Create a company profile",
    subtitle: "Tell us about your company",
    roles: {
      company: "Company",
      user: "Sales Pro"
    },
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      submit: "Register",
      loading: "Processing...",
      success: "Account created successfully!",
      error: "An error occurred. Please try again."
    },
    passwordStrength: {
      low: "Weak",
      medium: "Medium",
      high: "Strong"
    }
  },
  es: {
    title: "Crear perfil de empresa",
    subtitle: "Cuéntanos sobre tu empresa",
    roles: {
      company: "Empresa",
      user: "Vendedor"
    },
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      username: "Usuario",
      email: "Email",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      submit: "Registrarse",
      loading: "Procesando...",
      success: "¡Cuenta creada con éxito!",
      error: "Ocurrió un error. Por favor intenta de nuevo."
    },
    passwordStrength: {
      low: "Baja",
      medium: "Media",
      high: "Alta"
    }
  }
};

export default function RegisterPage() {
  const { lang } = useLanguage();
  const tr = registerTranslations[lang as keyof typeof registerTranslations] || registerTranslations.de;
  const router = useRouter();

  const [role, setRole] = useState<Role>("company");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const backToHomepageText = useCopyString(
    "auth.register.backToHomepage",
    lang === "de" ? "Zurück zur Homepage" : lang === "es" ? "Volver a la página principal" : "Back to homepage"
  );
  const firstNamePlaceholder = useCopyString("auth.register.form.firstName.placeholder", "...");
  const lastNamePlaceholder = useCopyString("auth.register.form.lastName.placeholder", "...");
  const usernamePlaceholder = useCopyString("auth.register.form.username.placeholder", "john_doe");
  const emailPlaceholder = useCopyString("auth.register.form.email.placeholder", "john@example.com");
  const passwordPlaceholder = useCopyString("auth.register.form.password.placeholder", "••••••••");

  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const pass = formData.password;
    let score = 0;
    if (pass.length > 6) score++;
    if (pass.length > 10) score++;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score++;
    setPasswordStrength(score);
  }, [formData.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const endpoint = role === "company" ? API_CREATE_COMPANY : API_CREATE_USER;
    
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: formData.password,
          username: formData.username
        })
      });

      if (response.ok) {
        const data = await response.json();
        const decoded: any = jwtDecode(data.access_token);
        
        // Almacenamiento seguro con nombres ofuscados para prevenir ataques
        const sessionData = {
          _nv_session: data.access_token, // access_token ofuscado
          _nv_sync: data.refresh_token,   // refresh_token ofuscado
          roles: decoded.realm_access?.roles || [], // roles se mantiene igual por petición
          _nv_identity: {
            id: decoded.sub,
            u: decoded.preferred_username,
            e: decoded.email,
            n: decoded.name
          }
        };

        localStorage.setItem("noventa_session_meta", JSON.stringify(sessionData));
        
        console.log("Session saved securely");
        setStatus("success");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setStatus("error");
        setErrorMessage(tr.form.error);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(tr.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <Link
        href="/"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">
          <CopyText copyId="auth.register.backToHomepage" defaultText={backToHomepageText} as="span" />
        </span>
      </Link>

      <motion.div 
        layout
        className="relative w-full max-w-5xl bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={role}
            initial={{ opacity: 0, x: role === "company" ? -20 : 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: role === "company" ? 20 : -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`flex flex-col md:flex-row w-full h-full ${role === "user" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-white">
                    <CopyText copyId="auth.register.title" defaultText={tr.title} as="span" />
                  </h1>
                  <div className="flex p-1 bg-slate-800 rounded-xl">
                    <button
                      onClick={() => setRole("company")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${role === "company" ? "bg-teal-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.register.roles.company" defaultText={tr.roles.company} as="span" />
                    </button>
                    <button
                      onClick={() => setRole("user")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${role === "user" ? "bg-cyan-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.register.roles.user" defaultText={tr.roles.user} as="span" />
                    </button>
                  </div>
                </div>
                <p className="text-slate-400">
                  <CopyText copyId="auth.register.subtitle" defaultText={tr.subtitle} as="span" />
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      <CopyText copyId="auth.register.form.firstName.label" defaultText={tr.form.firstName} as="span" />
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                        placeholder={firstNamePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      <CopyText copyId="auth.register.form.lastName.label" defaultText={tr.form.lastName} as="span" />
                    </label>
                    <div className="relative">
                      <input
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                        placeholder={lastNamePlaceholder}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    <CopyText copyId="auth.register.form.username.label" defaultText={tr.form.username} as="span" />
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      required
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                      placeholder={usernamePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    <CopyText copyId="auth.register.form.email.label" defaultText={tr.form.email} as="span" />
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                      placeholder={emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    <CopyText copyId="auth.register.form.password.label" defaultText={tr.form.password} as="span" />
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-12 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                      placeholder={passwordPlaceholder}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {/* Password Strength */}
                  <div className="flex gap-1.5 mt-2 px-1">
                    {[1, 2, 3].map((level) => (
                      <div 
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          passwordStrength >= level 
                            ? (passwordStrength === 1 ? "bg-red-500" : passwordStrength === 2 ? "bg-yellow-500" : "bg-teal-500")
                            : "bg-slate-800"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider ml-1">
                    {passwordStrength === 1 && (
                      <CopyText copyId="auth.register.passwordStrength.low" defaultText={tr.passwordStrength.low} as="span" />
                    )}
                    {passwordStrength === 2 && (
                      <CopyText copyId="auth.register.passwordStrength.medium" defaultText={tr.passwordStrength.medium} as="span" />
                    )}
                    {passwordStrength >= 3 && (
                      <CopyText copyId="auth.register.passwordStrength.high" defaultText={tr.passwordStrength.high} as="span" />
                    )}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-white transition-all shadow-xl ${
                    role === "company" 
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:scale-[1.02] shadow-teal-500/20" 
                      : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:scale-[1.02] shadow-cyan-500/20"
                  } disabled:opacity-50 disabled:scale-100`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <CopyText copyId="auth.register.form.loading" defaultText={tr.form.loading} as="span" />
                    </>
                  ) : (
                    <>
                      <CopyText copyId="auth.register.form.submit" defaultText={tr.form.submit} as="span" />
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-400 text-center font-medium"
                  >
                    <CopyText copyId="auth.register.form.success" defaultText={tr.form.success} as="span" />
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-center font-medium"
                  >
                    <CopyText copyId="auth.register.form.error" defaultText={errorMessage} as="span" />
                  </motion.div>
                )}
              </form>

              <div className="mt-8 text-center">
                <p className="text-slate-400">
                  <CopyText
                    copyId="auth.register.footer.alreadyHaveAccount"
                    defaultText={lang === "de" ? "Du hast bereits ein Konto?" : lang === "es" ? "¿Ya tienes una cuenta?" : "Already have an account?"}
                    as="span"
                  />{" "}
                  <Link href="/login" className="text-teal-400 font-bold hover:underline">
                    <CopyText
                      copyId="auth.register.footer.login"
                      defaultText={lang === "de" ? "Anmelden" : lang === "es" ? "Iniciar sesión" : "Log in"}
                      as="span"
                    />
                  </Link>
                </p>
              </div>
            </div>

            {/* Video/Image Side */}
            <div className="flex-1 relative hidden md:block group">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/40 to-transparent" />
              <div className={`absolute inset-0 h-full w-full transition-all duration-1000 ${role === "company" ? "clip-path-company" : "clip-path-user"}`}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  poster={role === "company" ? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"}
                >
                  <source 
                    src={role === "company" ? "https://assets.mixkit.co/videos/preview/mixkit-business-partners-working-together-in-office-23131-large.mp4" : "https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-her-desk-in-an-office-23126-large.mp4"} 
                    type="video/mp4" 
                  />
                </video>
                <div className={`absolute inset-0 ${role === "company" ? "bg-teal-500/20" : "bg-cyan-500/20"} mix-blend-overlay`} />
              </div>

              {/* Float Cards */}
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-sm"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      {role === "company" ? <Building2 className="text-white" /> : <Briefcase className="text-white" />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">
                        <CopyText
                          copyId="auth.register.sideCard.title"
                          defaultText={role === "company" ? "Enterprise Beta" : "Sales Pro Network"}
                          as="span"
                        />
                      </h4>
                      <div className="flex items-center gap-1">
                        <CheckCircle size={12} className="text-teal-400" />
                        <span className="text-teal-400 text-[10px] font-bold uppercase">
                          <CopyText copyId="auth.register.sideCard.badge" defaultText="Verified Access" as="span" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    <CopyText
                      copyId="auth.register.sideCard.body"
                      defaultText={
                        role === "company"
                          ? "Find top sales talent and build your remote-first sales organization with structured matching."
                          : "Access the best sales opportunities. Compare offers based on real data, not just promises."
                      }
                      as="span"
                    />
                  </p>
                </motion.div>
              </div>

              {/* Shape Divider */}
              <div className={`absolute top-0 bottom-0 w-px bg-white/20 z-30 transition-all duration-1000 ${role === "company" ? "left-0" : "right-0"}`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <style jsx global>{`
        .clip-path-company {
          clip-path: ellipse(120% 100% at 100% 50%);
        }
        .clip-path-user {
          clip-path: ellipse(120% 100% at 0% 50%);
        }
        @media (max-width: 768px) {
          .clip-path-company, .clip-path-user {
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
}
