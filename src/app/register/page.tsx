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
  Briefcase,
  MapPin,
  Globe,
  Phone,
  Users,
  Factory
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CopyText, useCopyString } from "@/components/CopyEditProvider";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// Endpoints from environment variables
const API_CREATE_COMPANY = process.env.NEXT_PUBLIC_API_CREATE_COMPANY || "https://loginconexio.hjsolutions.site/public/create/company";
const API_CREATE_USER = process.env.NEXT_PUBLIC_API_CREATE_USER || "https://loginconexio.hjsolutions.site/public/create/user";

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
      nameCompany: "Unternehmensname",
      address: "Adresse",
      city: "Stadt",
      country: "Land",
      phone: "Telefon",
      website: "Website",
      description: "Beschreibung",
      industry: "Branche",
      contactPerson: "Ansprechpartner",
      position: "Position",
      next: "Weiter",
      back: "Zurück",
      password: "Passwort",
      confirmPassword: "Passwort bestätigen",
      submit: "Registrieren",
      loading: "Wird verarbeitet...",
      success: "Konto erfolgreich erstellt!",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      userExists: "Der Benutzername existiert bereits.",
      passwordMismatch: "Die Passwörter stimmen nicht überein."
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
      nameCompany: "Company Name",
      address: "Address",
      city: "City",
      country: "Country",
      phone: "Phone",
      website: "Website",
      description: "Description",
      industry: "Industry",
      contactPerson: "Contact Person",
      position: "Position",
      next: "Next",
      back: "Back",
      password: "Password",
      confirmPassword: "Confirm Password",
      submit: "Register",
      loading: "Processing...",
      success: "Account created successfully!",
      error: "An error occurred. Please try again.",
      userExists: "Username already exists.",
      passwordMismatch: "Passwords do not match."
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
      nameCompany: "Nombre de la empresa",
      address: "Dirección",
      city: "Ciudad",
      country: "País",
      phone: "Teléfono",
      website: "Sitio web",
      description: "Descripción",
      industry: "Industria",
      contactPerson: "Persona de contacto",
      position: "Cargo",
      next: "Siguiente",
      back: "Atrás",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      submit: "Registrarse",
      loading: "Procesando...",
      success: "¡Cuenta creada con éxito!",
      error: "Ocurrió un error. Por favor intenta de nuevo.",
      userExists: "El usuario ya existe.",
      passwordMismatch: "Las contraseñas no coinciden."
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
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    nameCompany: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    website: "",
    description: "",
    industry: "",
    contactPerson: "",
    position: "",
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

  useEffect(() => {
    setStep(1);
    setStatus("idle");
    setErrorMessage("");
  }, [role]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isCompanyStepValid = (currentStep: number) => {
    if (currentStep === 1) {
      return Boolean(
        formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.username.trim() &&
          formData.email.trim()
      );
    }
    if (currentStep === 2) {
      return Boolean(
        formData.nameCompany.trim() &&
          formData.address.trim() &&
          formData.city.trim() &&
          formData.country.trim() &&
          formData.phone.trim() &&
          formData.website.trim()
      );
    }
    if (currentStep === 3) {
      if (!formData.password) return false;
      if (formData.password !== formData.confirmPassword) return false;
      return Boolean(
        formData.description.trim() &&
          formData.industry.trim() &&
          formData.contactPerson.trim() &&
          formData.position.trim()
      );
    }
    return false;
  };

  const handlePrev = () => {
    setStatus("idle");
    setErrorMessage("");
    setStep((s) => Math.max(1, s - 1));
  };

  const handleNext = () => {
    setStatus("idle");
    setErrorMessage("");
    setStep((s) => Math.min(3, s + 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "company") {
      if (!isCompanyStepValid(step)) {
        setStatus("error");
        setErrorMessage(
          step === 3 && formData.password !== formData.confirmPassword
            ? tr.form.passwordMismatch
            : tr.form.error
        );
        return;
      }

      if (step < 3) {
        handleNext();
        return;
      }
    }

    setLoading(true);
    setStatus("idle");

    const endpoint = role === "company" ? API_CREATE_COMPANY : API_CREATE_USER;
    
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          role === "company"
            ? {
                firstName: formData.firstName,
                lastName: formData.lastName,
                password: formData.password,
                username: formData.username,
                email: formData.email,
                nameCompany: formData.nameCompany,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                phone: formData.phone,
                website: formData.website,
                description: formData.description,
                industry: formData.industry,
                contactPerson: formData.contactPerson,
                position: formData.position,
                logoUrl: ""
              }
            : {
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                password: formData.password,
                username: formData.username
              }
        )
      });

      if (response.ok) {
        let data: any = null;
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await response.json();
        }

        if (data?.access_token) {
          const decoded: any = jwtDecode(data.access_token);
          const sessionData = {
            _nv_session: data.access_token,
            _nv_sync: data.refresh_token,
            roles: decoded.realm_access?.roles || [],
            _nv_identity: {
              id: decoded.sub,
              u: decoded.preferred_username,
              e: decoded.email,
              n: decoded.name
            }
          };
          localStorage.setItem("conexio_session_meta", JSON.stringify(sessionData));
        }

        setStatus("success");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setStatus("error");
        setErrorMessage(response.status === 409 ? tr.form.userExists : tr.form.error);
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
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`flex flex-col md:flex-row w-full h-full ${role === "user" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="rounded-xl bg-white p-2.5 shadow-md">
                    <Image
                      src="/Marca-NS.PNG"
                      alt="Conexio"
                      width={180}
                      height={50}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                  <div className="flex p-1 bg-slate-800/80 rounded-xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => setRole("company")}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${role === "company" ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.register.roles.company" defaultText={tr.roles.company} as="span" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("user")}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${role === "user" ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30" : "text-slate-400 hover:text-slate-200"}`}
                    >
                      <CopyText copyId="auth.register.roles.user" defaultText={tr.roles.user} as="span" />
                    </button>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  <CopyText copyId="auth.register.title" defaultText={tr.title} as="span" />
                </h1>
                <p className="text-slate-400">
                  <CopyText copyId="auth.register.subtitle" defaultText={tr.subtitle} as="span" />
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                {role === "company" && (
                  <div className="mb-1">
                    <div className="flex items-center justify-between mb-2 px-1">
                      <span className={`text-xs font-bold uppercase tracking-wider ${step >= 1 ? "text-teal-400" : "text-slate-500"}`}>1</span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${step >= 2 ? "text-teal-400" : "text-slate-500"}`}>2</span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${step >= 3 ? "text-teal-400" : "text-slate-500"}`}>3</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-teal-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${role}-${role === "company" ? step : 0}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    {(role === "user" || (role === "company" && step === 1)) && (
                      <>
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

                        {role === "user" && (
                          <>
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
                              <div className="flex gap-1.5 mt-2 px-1">
                                {[1, 2, 3].map((level) => (
                                  <div
                                    key={level}
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                      passwordStrength >= level
                                        ? passwordStrength === 1
                                          ? "bg-red-500"
                                          : passwordStrength === 2
                                            ? "bg-yellow-500"
                                            : "bg-teal-500"
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
                          </>
                        )}
                      </>
                    )}

                    {role === "company" && step === 2 && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-300 ml-1">
                            <CopyText copyId="auth.register.form.nameCompany.label" defaultText={tr.form.nameCompany} as="span" />
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              name="nameCompany"
                              value={formData.nameCompany}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-300 ml-1">
                            <CopyText copyId="auth.register.form.address.label" defaultText={tr.form.address} as="span" />
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.city.label" defaultText={tr.form.city} as="span" />
                            </label>
                            <input
                              required
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.country.label" defaultText={tr.form.country} as="span" />
                            </label>
                            <input
                              required
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.phone.label" defaultText={tr.form.phone} as="span" />
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                              <input
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.website.label" defaultText={tr.form.website} as="span" />
                            </label>
                            <div className="relative">
                              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                              <input
                                required
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {role === "company" && step === 3 && (
                      <>
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
                          <div className="flex gap-1.5 mt-2 px-1">
                            {[1, 2, 3].map((level) => (
                              <div
                                key={level}
                                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                  passwordStrength >= level
                                    ? passwordStrength === 1
                                      ? "bg-red-500"
                                      : passwordStrength === 2
                                        ? "bg-yellow-500"
                                        : "bg-teal-500"
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

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-300 ml-1">
                            <CopyText copyId="auth.register.form.confirmPassword.label" defaultText={tr.form.confirmPassword} as="span" />
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-300 ml-1">
                            <CopyText copyId="auth.register.form.description.label" defaultText={tr.form.description} as="span" />
                          </label>
                          <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all min-h-[110px] resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.industry.label" defaultText={tr.form.industry} as="span" />
                            </label>
                            <div className="relative">
                              <Factory className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                              <input
                                required
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300 ml-1">
                              <CopyText copyId="auth.register.form.position.label" defaultText={tr.form.position} as="span" />
                            </label>
                            <div className="relative">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                              <input
                                required
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-300 ml-1">
                            <CopyText copyId="auth.register.form.contactPerson.label" defaultText={tr.form.contactPerson} as="span" />
                          </label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              name="contactPerson"
                              value={formData.contactPerson}
                              onChange={handleChange}
                              className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {role === "company" ? (
                  <div className="flex gap-3 pt-2">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={loading}
                        className="flex-1 h-14 rounded-2xl flex items-center justify-center font-bold text-slate-200 bg-slate-800/60 border border-white/10 hover:bg-slate-800 transition-all disabled:opacity-50"
                      >
                        <CopyText copyId="auth.register.form.back" defaultText={tr.form.back} as="span" />
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`h-14 rounded-2xl flex-1 flex items-center justify-center gap-3 font-bold text-white transition-all shadow-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:scale-[1.02] shadow-teal-500/20 disabled:opacity-50 disabled:scale-100`}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          <CopyText copyId="auth.register.form.loading" defaultText={tr.form.loading} as="span" />
                        </>
                      ) : (
                        <>
                          <CopyText
                            copyId={step === 3 ? "auth.register.form.submit" : "auth.register.form.next"}
                            defaultText={step === 3 ? tr.form.submit : tr.form.next}
                            as="span"
                          />
                          <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-white transition-all shadow-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:scale-[1.02] shadow-cyan-500/20 disabled:opacity-50 disabled:scale-100`}
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
                )}

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
