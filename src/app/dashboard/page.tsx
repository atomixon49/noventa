"use client";

import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  PlusCircle,
  Settings,
  LogOut,
  Search,
  Filter,
  MapPin,
  ChevronDown,
  MoreVertical,
  Calendar,
  Building2,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  X,
  Upload,
  Check,
  ChevronLeft,
  ChevronRight,
  Bell,
  User,
  Menu,
  Sparkles,
  Target,
  Award,
  Zap,
  ArrowRight,
  CheckCircle2,
  Briefcase as BriefcaseIcon,
  FileText,
  Image as ImageIcon,
  Lock,
  Unlock,
  Mail,
  Phone,
  BarChart3
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

// --- Translations ---

const dashboardTranslations = {
  de: {
    sidebar: {
      home: "Startseite",
      myProfile: "Mein Profil",
      myOffers: "Meine Angebote",
      jobOffers: "Stellenangebote",
      createOffer: "Angebot erstellen",
      candidates: "Kandidaten",
      settings: "Einstellungen",
      logout: "Abmelden"
    },
    header: {
      dashboard: "Dashboard",
      dashboardDesc: "Übersicht Ihrer Aktivitäten",
      jobOffers: "Stellenangebote",
      jobOffersDesc: "Verwalten Sie Ihre {count} veröffentlichten Angebote",
      createOffer: "Neues Angebot erstellen",
      createOfferDesc: "Konfigurieren Sie die Details Ihrer neuen Stelle",
      candidates: "Kandidatenverwaltung",
      candidatesDesc: "Überprüfen und verwalten Sie eingegangene Bewerbungen",
      newOffer: "Neues Angebot"
    },
    stats: {
      totalOffers: "Gesamtangebote",
      activeOffers: "Aktive Angebote",
      views: "Aufrufe",
      applications: "Bewerbungen",
      quickActions: "Schnellaktionen",
      createNewOffer: "Neues Angebot erstellen",
      publishVacancy: "Veröffentlichen Sie eine neue Stelle",
      manageOffers: "Angebote verwalten",
      viewPublications: "Alle Ihre Veröffentlichungen anzeigen",
      reviewCandidates: "Kandidaten überprüfen",
      viewApplications: "Neue Bewerbungen anzeigen",
      configuration: "Einstellungen",
      accountSettings: "Kontoeinstellungen",
      recentActivity: "Letzte Aktivität",
      newApplication: "Neue Bewerbung",
      offerViewed: "Angebot angesehen",
      offerCreated: "Angebot erstellt",
      hoursAgo: "Vor {n} Stunden",
      dayAgo: "Vor 1 Tag",
      topViewed: "Meistgesehene Angebote",
      latestOffers: "Neueste veröffentlichte Angebote",
      viewAll: "Alle Angebote anzeigen",
      candidatesCount: "{n} Kandidaten"
    },
    list: {
      searchPlaceholder: "Angebote suchen...",
      all: "Alle",
      active: "Aktiv",
      draft: "Entwurf",
      expired: "Abgelaufen",
      noOffers: "Keine Angebote gefunden",
      createNew: "Neues Angebot erstellen",
      validUntil: "Gültig bis",
      views: "Aufrufe",
      applications: "Bewerbungen"
    },
    create: {
      step1Title: "Grundinformationen",
      step2Title: "Stellendetails",
      step3Title: "Endkonfiguration",
      company: "Unternehmen",
      companyPlaceholder: "Firmenname",
      jobTitle: "Stellentitel",
      jobTitlePlaceholder: "z.B. Senior Elektriker",
      city: "Stadt",
      postalCode: "Postleitzahl",
      image: "Angebotsbild",
      uploadImage: "Bild hochladen",
      dragDrop: "Ziehen oder klicken zum Auswählen",
      fileTypes: "PNG, JPG, WEBP bis 5 MB",
      description: "Beschreibung",
      descriptionPlaceholder: "Beschreiben Sie die Aufgaben...",
      salary: "Gehalt",
      salaryPlaceholder: "z.B. 30.000 - 40.000 €",
      workHours: "Arbeitszeit",
      workHoursPlaceholder: "z.B. Mo-Fr 9-18 Uhr",
      qualification: "Erforderliche Qualifikation",
      workMethod: "Arbeitsweise",
      deadline: "Bewerbungsfrist",
      cancel: "Abbrechen",
      back: "Zurück",
      next: "Weiter",
      publish: "Angebot veröffentlichen"
    },
    candidates: {
      total: "Gesamt",
      new: "Neu",
      reviewing: "In Prüfung",
      interviews: "Vorstellungsgespräche",
      filterByOffer: "Nach Angebot filtern",
      allOffers: "Alle",
      status: "Status",
      all: "Alle",
      newStatus: "Neu",
      reviewingStatus: "In Prüfung",
      interviewStatus: "Vorstellungsgespräch",
      hired: "Eingestellt",
      rejected: "Abgelehnt",
      noResults: "Keine Kandidaten für diese Auswahl",
      tryFilters: "Versuchen Sie, die Filter zu ändern"
    },
    qualifications: {
      changer: "Quereinsteiger",
      official: "Facharbeiter",
      master: "Meister"
    },
    workMethods: {
      fulltime: "Vollzeit",
      parttime: "Teilzeit",
      independent: "Selbstständig"
    },
    status: {
      active: "Aktiv",
      draft: "Entwurf",
      expired: "Abgelaufen"
    }
  },
  en: {
    sidebar: {
      home: "Home",
      myProfile: "My Profile",
      myOffers: "My Offers",
      jobOffers: "Job Offers",
      createOffer: "Create Offer",
      candidates: "Candidates",
      settings: "Settings",
      logout: "Log out"
    },
    header: {
      dashboard: "Dashboard",
      dashboardDesc: "Overview of your activity",
      jobOffers: "Job Offers",
      jobOffersDesc: "Manage your {count} published offers",
      createOffer: "Create New Offer",
      createOfferDesc: "Configure the details of your new vacancy",
      candidates: "Candidate Management",
      candidatesDesc: "Review and manage received applications",
      newOffer: "New Offer"
    },
    stats: {
      totalOffers: "Total Offers",
      activeOffers: "Active Offers",
      views: "Views",
      applications: "Applications",
      quickActions: "Quick Actions",
      createNewOffer: "Create New Offer",
      publishVacancy: "Publish a new vacancy",
      manageOffers: "Manage Offers",
      viewPublications: "View all your publications",
      reviewCandidates: "Review Candidates",
      viewApplications: "View new applications",
      configuration: "Settings",
      accountSettings: "Account settings",
      recentActivity: "Recent Activity",
      newApplication: "New Application",
      offerViewed: "Offer Viewed",
      offerCreated: "Offer Created",
      hoursAgo: "{n} hours ago",
      dayAgo: "1 day ago",
      topViewed: "Most Viewed Offers",
      latestOffers: "Latest Published Offers",
      viewAll: "View all offers",
      candidatesCount: "{n} candidates"
    },
    list: {
      searchPlaceholder: "Search offers...",
      all: "All",
      active: "Active",
      draft: "Draft",
      expired: "Expired",
      noOffers: "No offers found",
      createNew: "Create a new offer",
      validUntil: "Valid until",
      views: "views",
      applications: "applications"
    },
    create: {
      step1Title: "Basic Information",
      step2Title: "Job Details",
      step3Title: "Final Configuration",
      company: "Company",
      companyPlaceholder: "Company name",
      jobTitle: "Job Title",
      jobTitlePlaceholder: "e.g. Senior Electrician",
      city: "City",
      postalCode: "Postal Code",
      image: "Offer Image",
      uploadImage: "Upload image",
      dragDrop: "Drag or click to select",
      fileTypes: "PNG, JPG, WEBP up to 5 MB",
      description: "Description",
      descriptionPlaceholder: "Describe the responsibilities...",
      salary: "Salary",
      salaryPlaceholder: "e.g. 30,000 - 40,000 €",
      workHours: "Work Hours",
      workHoursPlaceholder: "e.g. Mon-Fri 9am-6pm",
      qualification: "Required Qualification",
      workMethod: "Work Method",
      deadline: "Application Deadline",
      cancel: "Cancel",
      back: "Back",
      next: "Next",
      publish: "Publish Offer"
    },
    candidates: {
      total: "Total",
      new: "New",
      reviewing: "Reviewing",
      interviews: "Interviews",
      filterByOffer: "Filter by offer",
      allOffers: "All",
      status: "Status",
      all: "All",
      newStatus: "New",
      reviewingStatus: "Reviewing",
      interviewStatus: "Interview",
      hired: "Hired",
      rejected: "Rejected",
      noResults: "No candidates for this selection",
      tryFilters: "Try changing the filters"
    },
    qualifications: {
      changer: "Career Changer",
      official: "Skilled Worker",
      master: "Master"
    },
    workMethods: {
      fulltime: "Full-time",
      parttime: "Part-time",
      independent: "Independent"
    },
    status: {
      active: "Active",
      draft: "Draft",
      expired: "Expired"
    }
  },
  es: {
    sidebar: {
      home: "Inicio",
      myProfile: "Mi perfil",
      myOffers: "Mis ofertas",
      jobOffers: "Ofertas de trabajo",
      createOffer: "Crear oferta",
      candidates: "Candidatos",
      settings: "Configuración",
      logout: "Cerrar sesión"
    },
    header: {
      dashboard: "Dashboard",
      dashboardDesc: "Resumen general de tu actividad",
      jobOffers: "Ofertas de trabajo",
      jobOffersDesc: "Gestiona tus {count} ofertas publicadas",
      createOffer: "Crear nueva oferta",
      createOfferDesc: "Configura los detalles de tu nueva vacante",
      candidates: "Gestión de Candidatos",
      candidatesDesc: "Revisa y gestiona las postulaciones recibidas",
      newOffer: "Nueva oferta"
    },
    stats: {
      totalOffers: "Total ofertas",
      activeOffers: "Ofertas activas",
      views: "Visualizaciones",
      applications: "Candidaturas",
      quickActions: "Acciones rápidas",
      createNewOffer: "Crear nueva oferta",
      publishVacancy: "Publica una nueva vacante",
      manageOffers: "Gestionar ofertas",
      viewPublications: "Ver todas tus publicaciones",
      reviewCandidates: "Revisar candidatos",
      viewApplications: "Ver nuevas postulaciones",
      configuration: "Configuración",
      accountSettings: "Ajustes de cuenta",
      recentActivity: "Actividad reciente",
      newApplication: "Nueva candidatura",
      offerViewed: "Oferta visualizada",
      offerCreated: "Oferta creada",
      hoursAgo: "Hace {n} horas",
      dayAgo: "Hace 1 día",
      topViewed: "Ofertas más vistas",
      latestOffers: "Últimas ofertas publicadas",
      viewAll: "Ver todas las ofertas",
      candidatesCount: "{n} candidatos"
    },
    list: {
      searchPlaceholder: "Buscar ofertas...",
      all: "Todos",
      active: "Activos",
      draft: "Borradores",
      expired: "Vencidos",
      noOffers: "No se encontraron ofertas",
      createNew: "Crear una nueva oferta",
      validUntil: "Válido hasta",
      views: "visualizaciones",
      applications: "candidaturas"
    },
    create: {
      step1Title: "Información Básica",
      step2Title: "Detalles del Puesto",
      step3Title: "Configuración Final",
      company: "Empresa",
      companyPlaceholder: "Nombre de la empresa",
      jobTitle: "Título del Puesto",
      jobTitlePlaceholder: "Ej: Electricista Senior",
      city: "Ciudad",
      postalCode: "Código Postal",
      image: "Imagen de la oferta",
      uploadImage: "Subir imagen",
      dragDrop: "Arrastra o haz clic para seleccionar",
      fileTypes: "PNG, JPG, WEBP hasta 5 MB",
      description: "Descripción",
      descriptionPlaceholder: "Describe las responsabilidades...",
      salary: "Salario",
      salaryPlaceholder: "Ej: 30.000 - 40.000 €",
      workHours: "Horario",
      workHoursPlaceholder: "Ej: Lunes a Viernes 9-18h",
      qualification: "Calificación Requerida",
      workMethod: "Método de Trabajo",
      deadline: "Fecha límite",
      cancel: "Cancelar",
      back: "Atrás",
      next: "Siguiente",
      publish: "Publicar Oferta"
    },
    candidates: {
      total: "Total",
      new: "Nuevos",
      reviewing: "En revisión",
      interviews: "Entrevistas",
      filterByOffer: "Filtrar por oferta",
      allOffers: "Todas",
      status: "Estado",
      all: "Todos",
      newStatus: "Nuevos",
      reviewingStatus: "En revisión",
      interviewStatus: "Entrevista",
      hired: "Contratados",
      rejected: "Rechazados",
      noResults: "No hay candidatos para esta selección",
      tryFilters: "Prueba cambiando los filtros"
    },
    qualifications: {
      changer: "Cambiadores de carrera",
      official: "Oficial",
      master: "Maestro"
    },
    workMethods: {
      fulltime: "Jornada completa",
      parttime: "Tiempo parcial",
      independent: "Independiente"
    },
    status: {
      active: "Activo",
      draft: "Borrador",
      expired: "Vencido"
    }
  }
};

// --- Types ---

type JobOffer = {
  id: number | string;
  title: string;
  company: string;
  location: string;
  postalCode: string;
  qualification: string;
  status: "active" | "draft" | "expired";
  validUntil: string;
  views: number;
  applications: number;
  salary: string;
  workMethod: string;
  description?: string;
  requirements?: string;
  workHours?: string;
  benefits?: string[];
  image?: string;
  createdAt: string;
};

type Candidate = {
  id: number;
  name: string;
  role: string;
  jobId: number | string;
  jobTitle: string;
  status: "new" | "reviewing" | "interview" | "rejected" | "hired";
  email: string;
  phone: string;
  appliedDate: string;
  avatar: string;
  age?: number;
  experience?: string;
  address?: string;
  photo?: string;
};

// --- Mock Data ---

const initialJobOffers: JobOffer[] = [
  {
    id: 1,
    title: "Almacenista (m/f/d)",
    company: "A&J Elektrotechnik GmbH",
    location: "Rastede",
    postalCode: "26180",
    qualification: "oficial",
    status: "active",
    validUntil: "2025-12-31",
    views: 234,
    applications: 12,
    salary: "30.000 - 40.000 €",
    workMethod: "fulltime",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Maestro electricista (m/f/d)",
    company: "A&J Elektrotechnik GmbH",
    location: "Rastede",
    postalCode: "26180",
    qualification: "maestro",
    status: "active",
    validUntil: "2025-12-31",
    views: 189,
    applications: 8,
    salary: "45.000 - 55.000 €",
    workMethod: "fulltime",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    title: "Electricista (m/w/d)",
    company: "A&J Elektrotechnik GmbH",
    location: "Rastede",
    postalCode: "26180",
    qualification: "oficial",
    status: "active",
    validUntil: "2025-12-31",
    views: 312,
    applications: 18,
    salary: "35.000 - 45.000 €",
    workMethod: "fulltime",
    createdAt: "2024-01-05",
  },
];

const mockCandidates: Candidate[] = [
  {
    id: 101,
    name: "Ana García",
    role: "Electricista",
    jobId: 3,
    jobTitle: "Electricista (m/w/d)",
    status: "new",
    email: "ana.garcia@email.com",
    phone: "+49 123 456 789",
    appliedDate: "Hace 2 horas",
    avatar: "AG",
    age: 28,
    experience: "5 años en instalaciones eléctricas residenciales",
    address: "Hauptstraße 45, 26180 Rastede",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 102,
    name: "Carlos Weber",
    role: "Maestro Electricista",
    jobId: 2,
    jobTitle: "Maestro electricista (m/f/d)",
    status: "interview",
    email: "carlos.weber@email.com",
    phone: "+49 987 654 321",
    appliedDate: "Hace 1 día",
    avatar: "CW",
    age: 35,
    experience: "10 años, certificación de maestro desde 2019",
    address: "Bahnhofstraße 12, 26122 Oldenburg",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 103,
    name: "Luis Müller",
    role: "Ayudante de Almacén",
    jobId: 1,
    jobTitle: "Almacenista (m/f/d)",
    status: "reviewing",
    email: "luis.muller@email.com",
    phone: "+49 555 666 777",
    appliedDate: "Hace 3 días",
    avatar: "LM",
    age: 24,
    experience: "2 años en logística y almacén",
    address: "Ammerländer Str. 78, 26129 Oldenburg",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 104,
    name: "Maria Schmidt",
    role: "Electricista Industrial",
    jobId: 3,
    jobTitle: "Electricista (m/w/d)",
    status: "new",
    email: "maria.schmidt@email.com",
    phone: "+49 444 333 222",
    appliedDate: "Hace 5 horas",
    avatar: "MS",
    age: 31,
    experience: "7 años en instalaciones industriales",
    address: "Lindenallee 23, 26135 Oldenburg",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 105,
    name: "Thomas Becker",
    role: "Técnico Eléctrico",
    jobId: 2,
    jobTitle: "Maestro electricista (m/f/d)",
    status: "reviewing",
    email: "thomas.becker@email.com",
    phone: "+49 111 222 333",
    appliedDate: "Hace 2 días",
    avatar: "TB",
    age: 42,
    experience: "15 años, especialista en sistemas de alta tensión",
    address: "Parkweg 8, 26160 Bad Zwischenahn",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
];

const qualificationOptions = [
  { value: "cambiador", label: "Cambiadores de carrera", icon: "🔄" },
  { value: "oficial", label: "Oficial", icon: "🔧" },
  { value: "maestro", label: "Maestro", icon: "👨‍🔧" },
];

const statusOptions = [
  { value: "active", label: "Activo", color: "bg-emerald-500" },
  { value: "draft", label: "Borrador", color: "bg-amber-500" },
  { value: "expired", label: "Vencido", color: "bg-red-500" },
];

const workMethodOptions = [
  { value: "fulltime", label: "Jornada completa", icon: Clock },
  { value: "parttime", label: "Tiempo parcial", icon: Clock },
  { value: "independent", label: "Independiente", icon: User },
];

const benefitsOptions = [
  { value: "balcony", label: "Balcón", icon: "🏠" },
  { value: "accessibility", label: "Accesibilidad", icon: "♿" },
  { value: "bonus", label: "Dinero de bonificación", icon: "💰" },
  { value: "ideas", label: "Mis propias ideas", icon: "💡" },
  { value: "modern", label: "Entorno de trabajo moderno", icon: "🏢" },
  { value: "profit", label: "Participación en las ganancias", icon: "📈" },
  { value: "events", label: "Eventos corporativos", icon: "🎉" },
  { value: "phone", label: "Teléfono móvil de la empresa", icon: "📱" },
  { value: "gym", label: "Gimnasia", icon: "🏋️" },
  { value: "equality", label: "Igualdad", icon: "⚖️" },
  { value: "flexible", label: "Horario de trabajo flexible", icon: "⏰" },
  { value: "volunteer", label: "Días de voluntariado", icon: "🤝" },
];

type View = "list" | "create" | "stats" | "candidates" | "profile" | "suggestions";

// --- Components ---

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<View>("list");
  const [jobs, setJobs] = useState<JobOffer[]>(initialJobOffers);
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const router = useRouter();
  const { lang } = useLanguage();
  const tr = dashboardTranslations[lang as keyof typeof dashboardTranslations] || dashboardTranslations.de;

  // Load from localStorage on mount
  useEffect(() => {
    const savedJobs = localStorage.getItem("noventa_jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleCreateJob = (newJob: JobOffer) => {
    const updatedJobs = [newJob, ...jobs];
    setJobs(updatedJobs);
    localStorage.setItem("noventa_jobs", JSON.stringify(updatedJobs));
    setCurrentView("list");
  };

  const handleDeleteJob = (id: number | string) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("noventa_jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex overflow-x-hidden">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[#0f172a] border-r border-slate-700/50 z-50 flex flex-col transition-all duration-300 
          ${sidebarOpen ? 'w-[280px]' : 'w-[88px]'} 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-700/50 flex items-center justify-center h-[80px] relative">
          <div className="bg-white rounded-xl shadow-lg w-14 h-14 shrink-0 flex items-center justify-center p-2">
            <Image
              src="/logo-n.png"
              alt="Noventa"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* Expand/Collapse Button - More spacing to the right */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-[-20px] top-8 bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-slate-700 rounded-full p-2 text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/30 z-50 hover:scale-110"
          >
            {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <SidebarItem
            icon={Home}
            label={tr.sidebar.home}
            active={currentView === "stats"}
            collapsed={!sidebarOpen}
            onClick={() => setCurrentView("stats")}
          />
          <SidebarItem
            icon={User}
            label={tr.sidebar.myProfile}
            active={currentView === "profile"}
            collapsed={!sidebarOpen}
            onClick={() => setCurrentView("profile" as View)}
          />
          <SidebarItem
            icon={Briefcase}
            label={tr.sidebar.myOffers}
            active={currentView === "list"}
            collapsed={!sidebarOpen}
            onClick={() => setCurrentView("list")}
          />
          <SidebarItem
            icon={PlusCircle}
            label={tr.sidebar.createOffer}
            active={currentView === "create"}
            collapsed={!sidebarOpen}
            onClick={() => setCurrentView("create")}
          />
          <SidebarItem
            icon={Users}
            label={tr.sidebar.candidates}
            active={currentView === "candidates"}
            collapsed={!sidebarOpen}
            onClick={() => setCurrentView("candidates")}
          />
          <SidebarItem
            icon={Settings}
            label={tr.sidebar.settings}
            collapsed={!sidebarOpen}
            onClick={() => {}}
          />
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-slate-700/50 bg-[#1e293b]">
          <div className={`flex items-center gap-3 ${!sidebarOpen && "justify-center"}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-cyan-500/20">
              JG
            </div>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex-1 min-w-0 overflow-hidden"
                >
                  <div className="font-medium truncate text-sm">Juan Lucas Goez</div>
                  <div className="text-xs text-slate-400 truncate">juan.goez@bautalent.com</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {sidebarOpen && (
            <button 
              onClick={() => router.push('/login')}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-600 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all text-sm font-medium"
            >
              <LogOut size={16} />
              <span>{tr.sidebar.logout}</span>
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 min-w-0 ${sidebarOpen ? 'lg:ml-[260px]' : 'lg:ml-[80px]'}`}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-700/50 px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between shadow-sm">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-800/80 transition-colors mr-3"
          >
            <Menu size={22} className="text-slate-300" />
          </button>
          
          <div className="flex-1 min-w-0 flex items-center gap-4">
            {/* Company Logo */}
            <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shrink-0">
              <Building2 size={24} className="text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white truncate">
                {currentView === "stats" && "Bienvenido, TechCorp GmbH"}
                {currentView === "profile" && tr.sidebar.myProfile}
                {currentView === "list" && tr.sidebar.myOffers}
                {currentView === "create" && tr.header.createOffer}
                {currentView === "candidates" && tr.header.candidates}
                {currentView === "suggestions" && "Sugerencias para la versión final"}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                {currentView === "stats" && "Panel de control de tu empresa"}
                {currentView === "profile" && "Gestiona la información de tu empresa"}
                {currentView === "list" && `Gestiona tus ${jobs.length} ofertas publicadas`}
                {currentView === "create" && tr.header.createOfferDesc}
                {currentView === "candidates" && tr.header.candidatesDesc}
                {currentView === "suggestions" && "Ayúdanos a mejorar la plataforma con tus ideas"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative p-2 sm:p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/50">
              <Bell size={18} className="sm:w-5 sm:h-5 text-slate-300" />
              <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2 h-2 bg-cyan-500 rounded-full ring-2 ring-[#0f172a]" />
            </button>
            <button 
              onClick={() => setCurrentView("suggestions" as View)}
              className="group relative px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400 animate-pulse" />
                <span className="text-purple-400 font-medium text-sm hidden sm:inline">Sugerencias</span>
              </div>
            </button>
            <button
              onClick={() => setCurrentView("create")}
              className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 text-sm sm:text-base"
            >
              <PlusCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">{tr.header.newOffer}</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {currentView === "stats" && (
              <StatsView key="stats" stats={{
                totalJobs: jobs.length,
                activeJobs: jobs.filter(j => j.status === 'active').length,
                totalViews: jobs.reduce((acc, j) => acc + j.views, 0),
                totalApplications: jobs.reduce((acc, j) => acc + j.applications, 0)
              }} setCurrentView={setCurrentView} jobs={jobs} tr={tr} />
            )}
            {currentView === "list" && (
              <ListView
                key="list"
                jobs={jobs}
                onDelete={handleDeleteJob}
                setCurrentView={setCurrentView}
              />
            )}
            {currentView === "create" && (
              <CreateOfferView key="create" setCurrentView={setCurrentView} onCreate={handleCreateJob} tr={tr} />
            )}
            {currentView === "candidates" && (
              <CandidatesView key="candidates" candidates={candidates} jobs={jobs} />
            )}
            {currentView === "profile" && (
              <ProfileView key="profile" jobs={jobs} tr={tr} />
            )}
            {currentView === "suggestions" && (
              <SuggestionsView key="suggestions" setCurrentView={setCurrentView} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// Suggestions View Component
function SuggestionsView({ setCurrentView }: { setCurrentView: (view: View) => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setCurrentView("stats");
    }, 2000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por tu feedback!</h3>
          <p className="text-slate-400">Tus sugerencias nos ayudan a mejorar</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Comparte tus ideas</h2>
            <p className="text-slate-400 text-sm">Ayúdanos a construir la mejor plataforma</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              ¿Qué funcionalidad te gustaría ver?
            </label>
            <textarea
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
              rows={4}
              placeholder="Describe tu idea..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              ¿Qué mejorarías del dashboard actual?
            </label>
            <textarea
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
              rows={3}
              placeholder="Tus sugerencias..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Prioridad
            </label>
            <select className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all">
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setCurrentView("stats")}
              className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:from-purple-400 hover:to-pink-400 transition-all shadow-lg shadow-purple-500/25"
            >
              Enviar Sugerencia
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

// Profile View Component
function ProfileView({ jobs, tr }: { jobs: JobOffer[]; tr: any }) {
  const activeJobs = jobs.filter(j => j.status === 'active').length;
  const closedPositions = 12; // Simulado
  const acceptedCandidates = 8; // Simulado
  const interviews = 15; // Simulado

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<{
    companyName: string;
    location: string;
    industry: string;
    highlights: string;
    foundedYear: string;
    employees: string;
    description: string;
    teamMembers: Array<{
      id: string;
      name: string;
      age: number;
      role: string;
      tenure: string;
      image: string;
    }>;
  }>(() => ({
    companyName: "TechCorp GmbH",
    location: "Berlín, Alemania",
    industry: "Tecnología",
    highlights: "B2B • Reclutamiento • Ventas",
    foundedYear: "2015",
    employees: "250-500",
    description: "Empresa de tecnología líder en soluciones empresariales.",
    teamMembers: [
      { id: "tm-1", name: "Sofía Rojas", age: 29, role: "Head of People", tenure: "2 años", image: "/t1.jpeg" },
      { id: "tm-2", name: "Mateo Álvarez", age: 34, role: "Sales Lead", tenure: "3 años", image: "/t2.jpeg" },
      { id: "tm-3", name: "Valentina Cruz", age: 27, role: "Recruiter", tenure: "1 año", image: "/t3.jpeg" },
      { id: "tm-4", name: "Daniel Herrera", age: 31, role: "Account Executive", tenure: "2 años", image: "/t4.jpeg" },
      { id: "tm-5", name: "Camila Méndez", age: 26, role: "Customer Success", tenure: "1 año", image: "/t5.jpeg" },
      { id: "tm-6", name: "Sebastián Vega", age: 30, role: "Ops", tenure: "2 años", image: "/t6.jpeg" },
      { id: "tm-7", name: "Lucía Torres", age: 28, role: "Talent Partner", tenure: "2 años", image: "/t7.jpeg" },
      { id: "tm-8", name: "Andrés Molina", age: 33, role: "Marketing", tenure: "4 años", image: "/t8.jpeg" },
      { id: "tm-9", name: "Isabella Navarro", age: 25, role: "Designer", tenure: "1 año", image: "/t9.jpeg" },
      { id: "tm-10", name: "Juan Pérez", age: 36, role: "CTO", tenure: "5 años", image: "/t10.jpeg" },
    ],
  }));

  const [newMember, setNewMember] = useState<{
    name: string;
    age: string;
    role: string;
    tenure: string;
    image: string;
  }>({
    name: "",
    age: "",
    role: "",
    tenure: "",
    image: "/t1.jpeg",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("noventa_company_profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        setProfile((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("noventa_company_profile", JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const addTeamMember = () => {
    if (!newMember.name.trim()) return;
    const ageNum = Number(newMember.age);
    if (!Number.isFinite(ageNum) || ageNum <= 0) return;
    if (!newMember.role.trim()) return;
    if (!newMember.tenure.trim()) return;

    const id = `tm-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setProfile((p) => ({
      ...p,
      teamMembers: [
        {
          id,
          name: newMember.name.trim(),
          age: ageNum,
          role: newMember.role.trim(),
          tenure: newMember.tenure.trim(),
          image: newMember.image || "/t1.jpeg",
        },
        ...p.teamMembers,
      ],
    }));

    setNewMember({ name: "", age: "", role: "", tenure: "", image: "/t1.jpeg" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Company Profile Card */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')] bg-cover bg-center opacity-10" />
        </div>
        
        <div className="px-6 pb-6 -mt-16 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            {/* Company Logo */}
            <div className="w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-[#0f172a]">
              <Building2 size={48} className="text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{profile.companyName}</h2>
                  <p className="text-slate-400 text-sm mb-3">{profile.industry} • {profile.location}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditing((v) => !v)}
                  className="px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-700/50 text-slate-200 hover:text-white hover:bg-slate-900/60 transition-all text-sm font-medium"
                >
                  {isEditing ? "Guardar" : "Editar"}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                  Verificada
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Ubicación</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={profile.location}
                onChange={(e) => setProfile((p) => ({ ...p, location: e.target.value }))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Industria</label>
            <div className="relative">
              <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={profile.industry}
                onChange={(e) => setProfile((p) => ({ ...p, industry: e.target.value }))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Año de fundación</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={profile.foundedYear}
                onChange={(e) => setProfile((p) => ({ ...p, foundedYear: e.target.value }))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Número de empleados</label>
            <div className="relative">
              <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={profile.employees}
                onChange={(e) => setProfile((p) => ({ ...p, employees: e.target.value }))}
                disabled={!isEditing}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Principales</label>
            <input
              value={profile.highlights}
              onChange={(e) => setProfile((p) => ({ ...p, highlights: e.target.value }))}
              disabled={!isEditing}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all disabled:opacity-60"
              placeholder="Ej: Servicios, productos, beneficios, cultura..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Descripción de la empresa</label>
            <textarea
              value={profile.description}
              onChange={(e) => setProfile((p) => ({ ...p, description: e.target.value }))}
              disabled={!isEditing}
              rows={4}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all resize-none disabled:opacity-60"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-cyan-400" />
            Equipo
          </h3>
          <div className="text-xs text-slate-400">{profile.teamMembers.length} miembros</div>
        </div>

        {isEditing && (
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 mb-4">
            <div className="grid md:grid-cols-5 gap-3 items-end">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1">Nombre</label>
                <input
                  value={newMember.name}
                  onChange={(e) => setNewMember((m) => ({ ...m, name: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all"
                  placeholder="Ej: Ana López"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Edad</label>
                <input
                  value={newMember.age}
                  onChange={(e) => setNewMember((m) => ({ ...m, age: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all"
                  placeholder="29"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Cargo</label>
                <input
                  value={newMember.role}
                  onChange={(e) => setNewMember((m) => ({ ...m, role: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all"
                  placeholder="Recruiter"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Tiempo</label>
                <input
                  value={newMember.tenure}
                  onChange={(e) => setNewMember((m) => ({ ...m, tenure: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all"
                  placeholder="2 años"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-medium text-slate-300">Imagen (URL)</label>
                  <input
                    value={newMember.image}
                    onChange={(e) => setNewMember((m) => ({ ...m, image: e.target.value }))}
                    className="w-[220px] px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 transition-all"
                    placeholder="/t1.jpeg o https://..."
                  />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/40">
                  <img src={newMember.image || "/t1.jpeg"} alt="new-member" className="h-full w-full object-cover" />
                </div>
              </div>

              <button
                type="button"
                onClick={addTeamMember}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all text-sm font-semibold"
              >
                <PlusCircle size={16} />
                Agregar
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {Array.from({ length: 10 }).map((_, i) => {
                const src = `/t${i + 1}.jpeg`;
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setNewMember((m) => ({ ...m, image: src }))}
                    className="h-10 w-10 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/40 transition-colors"
                    aria-label={`pick-${src}`}
                  >
                    <img src={src} alt={src} className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.teamMembers.slice(0, 55).map((m) => (
            <div key={m.id} className="rounded-xl border border-slate-700/50 bg-slate-900/30 overflow-hidden">
              <div className="flex items-center gap-4 p-4">
                <div className="h-14 w-14 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/40 shrink-0">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-white truncate">{m.name}</div>
                  <div className="text-sm text-slate-400 truncate">{m.role}</div>
                  <div className="text-xs text-slate-500 mt-1">{m.age} años • {m.tenure} en la empresa</div>
                </div>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => setProfile((p) => ({ ...p, teamMembers: p.teamMembers.filter((x) => x.id !== m.id) }))}
                    className="p-2 rounded-lg bg-black/30 border border-white/10 text-white hover:bg-black/50 transition-all"
                    aria-label="remove-member"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-slate-400 text-sm">Ofertas Publicadas</span>
          </div>
          <div className="text-3xl font-bold text-white">{activeJobs}</div>
          <div className="text-xs text-slate-500 mt-1">Activas ahora</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-slate-400 text-sm">Vacantes Cerradas</span>
          </div>
          <div className="text-3xl font-bold text-white">{closedPositions}</div>
          <div className="text-xs text-slate-500 mt-1">Últimos 6 meses</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-slate-400 text-sm">Candidatos Aceptados</span>
          </div>
          <div className="text-3xl font-bold text-white">{acceptedCandidates}</div>
          <div className="text-xs text-slate-500 mt-1">Este mes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-slate-400 text-sm">Entrevistas</span>
          </div>
          <div className="text-3xl font-bold text-white">{interviews}</div>
          <div className="text-xs text-slate-500 mt-1">Programadas</div>
        </motion.div>
      </div>

      {/* Additional Info */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Rendimiento
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Tasa de respuesta</span>
              <span className="text-white font-semibold">87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Tiempo promedio de contratación</span>
              <span className="text-white font-semibold">18 días</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Satisfacción de candidatos</span>
              <span className="text-white font-semibold">4.8/5.0</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            Actividad Reciente
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-white text-sm">Nueva aplicación recibida</p>
                <p className="text-slate-500 text-xs">Hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-white text-sm">Oferta publicada exitosamente</p>
                <p className="text-slate-500 text-xs">Hace 5 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-white text-sm">Entrevista programada</p>
                <p className="text-slate-500 text-xs">Hace 1 día</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Sub-components ---

function SidebarItem({
  icon: Icon,
  label,
  active = false,
  collapsed = false,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all relative group ${
        active
          ? "bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-400 border border-cyan-500/20"
          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
      } ${collapsed ? "justify-center" : ""}`}
    >
      <Icon size={20} className={`shrink-0 ${active ? "text-cyan-400" : "group-hover:text-cyan-400"} transition-colors`} />
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="font-medium whitespace-nowrap overflow-hidden"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      {/* Tooltip for collapsed mode */}
      {collapsed && (
        <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 border border-slate-700 shadow-xl">
          {label}
        </div>
      )}
    </button>
  );
}

function StatsView({
  stats,
  setCurrentView,
  jobs,
  tr,
}: {
  stats: { totalJobs: number; activeJobs: number; totalViews: number; totalApplications: number };
  setCurrentView: (view: View) => void;
  jobs: JobOffer[];
  tr: typeof dashboardTranslations.es;
}) {
  // Get top viewed jobs
  const topViewedJobs = [...jobs].sort((a, b) => b.views - a.views).slice(0, 3);
  // Get latest jobs
  const latestJobs = [...jobs].slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Deadline Progress */}
        <motion.div 
          whileHover={{ y: -5 }} 
          className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/20 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-white/5">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">En progreso</span>
          </div>
          <div className="text-sm text-slate-400 mb-1">Deadline del Proyecto</div>
          <div className="text-2xl font-bold text-white mb-3">Cargando...</div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "67%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs text-slate-500">67% completado</div>
        </motion.div>

        {/* Coming Soon Cards */}
        <StatCardComingSoon icon={Zap} label="Ofertas Activas" color="emerald" />
        <StatCardComingSoon icon={Eye} label="Visualizaciones" color="violet" />
        <StatCardComingSoon icon={Users} label="Aplicaciones" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vendor View - How sellers see the company */}
        <div className="lg:col-span-2 flex flex-col">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <Eye className="text-cyan-400" size={20} />
            Vista de Vendedores
          </h3>
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm flex-1">
            <div className="flex items-start gap-6 mb-6">
              {/* Company Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center shrink-0">
                <Building2 size={36} className="text-white" />
              </div>
              
              {/* Company Info */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-2">TechCorp GmbH</h4>
                <p className="text-slate-400 text-sm mb-3">Empresa de tecnología líder en soluciones empresariales</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                    ✓ Verificada
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Company Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Empleados</span>
                </div>
                <div className="text-xl font-bold text-white">250-500</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Ubicación</span>
                </div>
                <div className="text-xl font-bold text-white">Berlín, DE</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Industria</span>
                </div>
                <div className="text-xl font-bold text-white">Tecnología</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Fundada</span>
                </div>
                <div className="text-xl font-bold text-white">2015</div>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={() => setCurrentView("profile")}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              Ver perfil completo
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm flex flex-col">
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <Clock className="text-slate-400" size={20} />
            {tr.stats.recentActivity}
          </h3>
          <div className="space-y-5 flex-1">
            {[
              { action: tr.stats.newApplication, job: "Maestro electricista", time: tr.stats.hoursAgo.replace("{n}", "2"), color: "bg-amber-500" },
              { action: tr.stats.offerViewed, job: "Electricista (m/w/d)", time: tr.stats.hoursAgo.replace("{n}", "4"), color: "bg-violet-500" },
              { action: tr.stats.newApplication, job: "Almacenista (m/f/d)", time: tr.stats.hoursAgo.replace("{n}", "6"), color: "bg-amber-500" },
              { action: tr.stats.offerCreated, job: "Técnico (m/f/d)", time: tr.stats.dayAgo, color: "bg-cyan-500" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== 3 && <div className="absolute left-[9px] top-7 bottom-[-20px] w-0.5 bg-slate-700/50" />}
                <div className={`w-4 h-4 rounded-full ${activity.color} ring-4 ring-slate-800/40 shrink-0 mt-1`} />
                <div>
                  <div className="font-medium text-sm">{activity.action}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{activity.job}</div>
                  <div className="text-xs text-slate-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Job Offers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Viewed Offers */}
        <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm">
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <TrendingUp className="text-violet-400" size={20} />
            {tr.stats.topViewed}
          </h3>
          <div className="space-y-4">
            {topViewedJobs.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-violet-500/30 transition-all cursor-pointer group"
                onClick={() => setCurrentView("list")}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 flex items-center justify-center text-violet-400 font-bold text-lg border border-violet-500/20">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate group-hover:text-violet-400 transition-colors">{job.title}</div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                    <MapPin size={12} />
                    {job.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-violet-400 font-semibold">
                    <Eye size={14} />
                    {job.views}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{tr.stats.candidatesCount.replace("{n}", job.applications.toString())}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Latest Offers */}
        <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm">
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <Bell className="text-cyan-400" size={20} />
            {tr.stats.latestOffers}
          </h3>
          <div className="space-y-4">
            {latestJobs.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all cursor-pointer group"
                onClick={() => setCurrentView("list")}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 flex items-center justify-center border border-cyan-500/20">
                  <Briefcase size={18} className="text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate group-hover:text-cyan-400 transition-colors">{job.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{job.company}</div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    job.status === "active" 
                      ? "bg-emerald-500/20 text-emerald-400" 
                      : job.status === "draft" 
                      ? "bg-amber-500/20 text-amber-400" 
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {job.status === "active" ? tr.status.active : job.status === "draft" ? tr.status.draft : tr.status.expired}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentView("list")}
            className="w-full mt-4 py-3 rounded-xl border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800/50 hover:border-slate-600 transition-all text-sm font-medium flex items-center justify-center gap-2"
          >
            {tr.stats.viewAll}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Back to Homepage Button */}
      <div className="flex justify-center mt-8">
        <Link 
          href="/"
          className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <ArrowRight size={20} className="text-cyan-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="text-white font-semibold">Volver a la Homepage</span>
        </Link>
      </div>
    </motion.div>
  );
}

function StatCard({ icon: Icon, label, value, trend, color }: any) {
  const colors: any = {
    cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-400",
    emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
    violet: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-400",
    amber: "from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-400",
  };

  return (
    <motion.div whileHover={{ y: -5 }} className={`p-6 rounded-3xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl bg-white/5`}>
          <Icon size={24} />
        </div>
        <span className="text-xs font-medium bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
          {trend}
        </span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </motion.div>
  );
}

function StatCardComingSoon({ icon: Icon, label, color }: any) {
  const colors: any = {
    emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
    violet: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-400",
    amber: "from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-400",
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }} 
      className={`p-6 rounded-3xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm relative overflow-hidden`}
    >
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-lg font-bold text-white mb-1"
          >
            Coming Soon
          </motion.div>
          <div className="text-xs text-slate-400">Próximamente</div>
        </motion.div>
      </div>

      {/* Blurred Content */}
      <div className="filter blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-2xl bg-white/5`}>
            <Icon size={24} />
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-1">---</div>
        <div className="text-sm opacity-80">{label}</div>
      </div>
    </motion.div>
  );
}

function QuickActionCard({ icon: Icon, title, desc, color, onClick }: any) {
  const colors: any = {
    cyan: "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-cyan-500/10",
    violet: "hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-violet-500/10",
    amber: "hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-amber-500/10",
    slate: "hover:border-slate-500/50 hover:bg-slate-500/10 hover:shadow-slate-500/10",
  };

  const iconColors: any = {
    cyan: "bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30",
    violet: "bg-violet-500/20 text-violet-400 group-hover:bg-violet-500/30",
    amber: "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30",
    slate: "bg-slate-600/50 text-slate-400 group-hover:bg-slate-600/70",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm text-center transition-all group h-full hover:shadow-lg ${colors[color]}`}
    >
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <div className={`p-4 rounded-2xl transition-all ${iconColors[color]}`}>
          <Icon size={28} />
        </div>
        <div>
          <div className="font-semibold text-white transition-colors">{title}</div>
          <div className="text-xs text-slate-400 mt-1">{desc}</div>
        </div>
      </div>
    </motion.button>
  );
}

function ListView({ jobs, onDelete, setCurrentView }: { jobs: JobOffer[], onDelete: (id: string | number) => void, setCurrentView: (view: View) => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = jobs.filter(j => {
    const matchesSearch = j.title.toLowerCase().includes(searchQuery.toLowerCase()) || j.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || j.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleJobClick = (jobId: number | string) => {
    setCurrentView("candidates");
    requestAnimationFrame(() => {
      const event = new CustomEvent('filterCandidatesByJob', { detail: { jobId } });
      window.dispatchEvent(event);
    });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
      <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ofertas..."
              className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['all', 'active', 'draft', 'expired'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all whitespace-nowrap ${
                  filterStatus === status 
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" 
                    : "bg-slate-700/30 text-slate-400 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {status === 'all' ? 'Todos' : status === 'active' ? 'Activos' : status === 'draft' ? 'Borradores' : 'Vencidos'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg">No se encontraron ofertas</p>
            <button onClick={() => setCurrentView("create")} className="mt-4 text-cyan-400 hover:underline">Crear una nueva oferta</button>
          </div>
        ) : (
          filtered.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleJobClick(job.id)}
              className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-300" />
              
              <div className="relative flex flex-col md:flex-row gap-6 items-start">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-2xl font-bold shrink-0 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 text-cyan-300"
                >
                  {job.company.substring(0, 2).toUpperCase()}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">{job.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                        <Building2 size={14} />
                        <span className="truncate">{job.company}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        job.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        job.status === 'draft' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                        'bg-red-500/10 text-red-400 border-red-500/20'
                      }`}>
                        {job.status === 'active' ? 'Activo' : job.status === 'draft' ? 'Borrador' : 'Vencido'}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(job.id);
                        }}
                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-slate-400 hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-700/30">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 mb-1">Salario</span>
                      <span className="text-sm font-medium text-slate-300">{job.salary}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 mb-1">Candidatos</span>
                      <span className="text-sm font-medium text-slate-300">{job.applications}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 mb-1">Vistas</span>
                      <span className="text-sm font-medium text-slate-300">{job.views}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 mb-1">Publicado</span>
                      <span className="text-sm font-medium text-slate-300">{job.createdAt}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-xs text-slate-500">Click para ver candidatos simulados</div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 group-hover:bg-cyan-500/15">
                      Ver candidatos
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}

function CreateOfferView({ setCurrentView, onCreate, tr }: { setCurrentView: (view: View) => void, onCreate: (job: JobOffer) => void, tr?: any }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    company: "",
    title: "",
    city: "",
    state: "",
    postalCode: "",
    description: "",
    requirements: "",
    workHours: "",
    salary: "",
    benefits: [],
    qualification: "",
    workMethod: "fulltime",
    validUntil: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = () => {
    const newJob: JobOffer = {
      id: Date.now(),
      title: formData.title || "Nueva Oferta",
      company: formData.company || "Mi Empresa",
      location: formData.city || "Ubicación",
      postalCode: formData.postalCode,
      qualification: formData.qualification || "oficial",
      status: "active",
      validUntil: formData.validUntil || "2025-12-31",
      views: 0,
      applications: 0,
      salary: formData.salary || "A convenir",
      workMethod: formData.workMethod,
      description: formData.description,
      requirements: formData.requirements,
      workHours: formData.workHours,
      benefits: formData.benefits,
      createdAt: new Date().toISOString().split('T')[0],
    };
    onCreate(newJob);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className={`text-sm font-medium ${step >= 1 ? "text-cyan-400" : "text-slate-500"}`}>Información Básica</span>
          <span className={`text-sm font-medium ${step >= 2 ? "text-cyan-400" : "text-slate-500"}`}>Detalles</span>
          <span className={`text-sm font-medium ${step >= 3 ? "text-cyan-400" : "text-slate-500"}`}>Configuración</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm shadow-xl"
      >
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Información Principal</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Empresa</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Título del Puesto</label>
                <div className="relative">
                  <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ej: Electricista Senior"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Código Postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Imagen de la oferta</label>
                <div className="border-2 border-dashed border-slate-600 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all cursor-pointer group bg-slate-900/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <ImageIcon className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={32} />
                  </div>
                  <p className="text-cyan-400 font-medium mb-1">Subir imagen</p>
                  <p className="text-slate-500 text-sm">Arrastra o haz clic para seleccionar</p>
                  <p className="text-slate-600 text-xs mt-2">PNG, JPG, WEBP hasta 5 MB</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Detalles del Puesto</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Descripción</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none resize-none"
                  placeholder="Describe las responsabilidades..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Salario</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="Ej: 30.000 - 40.000 €"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Horario</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      name="workHours"
                      value={formData.workHours}
                      onChange={handleChange}
                      placeholder="Ej: Lunes a Viernes 9-18h"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Configuración Final</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Calificación Requerida</label>
                <div className="grid grid-cols-3 gap-3">
                  {qualificationOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, qualification: opt.value })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formData.qualification === opt.value
                          ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                          : "bg-slate-900/50 border-slate-600 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      <div className="text-2xl mb-1">{opt.icon}</div>
                      <div className="text-sm font-medium">{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Método de Trabajo</label>
                <div className="flex gap-3">
                  {workMethodOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, workMethod: opt.value })}
                      className={`flex-1 p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
                        formData.workMethod === opt.value
                          ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                          : "bg-slate-900/50 border-slate-600 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      <opt.icon size={18} />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Fecha límite</label>
                <input
                  type="date"
                  name="validUntil"
                  value={formData.validUntil}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-slate-700/50">
          <button
            onClick={step === 1 ? () => setCurrentView("list") : handlePrev}
            className="px-6 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-all font-medium"
          >
            {step === 1 ? "Cancelar" : "Atrás"}
          </button>
          
          <button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="px-8 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
          >
            {step === 3 ? (
              <>Publicar Oferta <CheckCircle2 size={18} /></>
            ) : (
              <>Siguiente <ArrowRight size={18} /></>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function CandidatesView({ candidates, jobs }: { candidates: Candidate[], jobs: JobOffer[] }) {
  const [selectedJob, setSelectedJob] = useState<string | number>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  
  useEffect(() => {
    const handleFilter = (event: Event) => {
      const e = event as CustomEvent<{ jobId?: string | number }>;
      if (e.detail?.jobId !== undefined) {
        setSelectedJob(e.detail.jobId);
      }
    };
    window.addEventListener('filterCandidatesByJob', handleFilter);
    return () => window.removeEventListener('filterCandidatesByJob', handleFilter);
  }, []);

  const filteredCandidates = candidates.filter(c => {
    const matchesJob = selectedJob === "all" || c.jobId.toString() === selectedJob.toString();
    const matchesStatus = selectedStatus === "all" || c.status === selectedStatus;
    return matchesJob && matchesStatus;
  });

  const statusColors: Record<string, string> = {
    new: "from-cyan-500 to-blue-500",
    reviewing: "from-amber-500 to-orange-500",
    interview: "from-violet-500 to-purple-500",
    hired: "from-emerald-500 to-green-500",
    rejected: "from-red-500 to-rose-500",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 relative"
    >
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-40 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center -mt-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-5xl font-bold text-white mb-4"
          >
            Coming Soon
          </motion.div>
          <p className="text-xl text-slate-300 mb-2">Gestión de Candidatos</p>
          <p className="text-slate-400">Esta funcionalidad estará disponible próximamente</p>
        </motion.div>
      </div>

      {/* Blurred Content */}
      <div className="filter blur-sm pointer-events-none">
      {/* Unlock Modal */}
      <AnimatePresence>
        {showUnlockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowUnlockModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Desbloquear Candidatos</h3>
                <p className="text-slate-400 mb-6">
                  Activa tu suscripción Premium para ver los datos completos de los candidatos: foto, contacto, dirección y más.
                </p>
                <div className="space-y-3">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    Activar Premium - 49€/mes
                  </button>
                  <button 
                    onClick={() => setShowUnlockModal(false)}
                    className="w-full py-3 px-6 bg-slate-700/50 text-slate-300 font-medium rounded-xl hover:bg-slate-700 transition-all"
                  >
                    Quizás más tarde
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total", value: candidates.length, color: "cyan" },
          { label: "Nuevos", value: candidates.filter(c => c.status === "new").length, color: "emerald" },
          { label: "En revisión", value: candidates.filter(c => c.status === "reviewing").length, color: "amber" },
          { label: "Entrevistas", value: candidates.filter(c => c.status === "interview").length, color: "violet" },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-2xl bg-gradient-to-br from-${stat.color}-500/10 to-transparent border border-${stat.color}-500/20 backdrop-blur-sm`}
          >
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-slate-800/40 rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Job Filter */}
          <div className="flex-1">
            <label className="text-xs text-slate-400 mb-2 block font-medium">Filtrar por oferta</label>
            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              <button
                onClick={() => setSelectedJob("all")}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedJob === "all" 
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25" 
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                Todas ({candidates.length})
              </button>
              {jobs.map(job => {
                const count = candidates.filter(c => c.jobId === job.id).length;
                return (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      selectedJob === job.id 
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25" 
                        : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {job.title.split(" ")[0]} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-xs text-slate-400 mb-2 block font-medium">Estado</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-xl text-white text-sm focus:border-cyan-500 outline-none min-w-[150px]"
            >
              <option value="all">Todos</option>
              <option value="new">Nuevos</option>
              <option value="reviewing">En revisión</option>
              <option value="interview">Entrevista</option>
              <option value="hired">Contratados</option>
              <option value="rejected">Rechazados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {filteredCandidates.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 text-slate-500 bg-slate-800/20 rounded-3xl border border-slate-700/50"
            >
              <Users size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No hay candidatos para esta selección</p>
              <p className="text-sm mt-2">Prueba cambiando los filtros</p>
            </motion.div>
          ) : (
            filteredCandidates.map((candidate, index) => (
              <motion.div 
                key={candidate.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100, damping: 15 }}
                className="group relative bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800/60 rounded-[2rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Decorative background gradients */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${statusColors[candidate.status]} opacity-[0.08] blur-[60px] rounded-full pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-500`} />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none" />

                <div className="relative p-5">
                    {/* Header: Status & Actions */}
                    <div className="flex justify-between items-start mb-4">
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${statusColors[candidate.status]} shadow-lg shadow-black/20`}>
                            {candidate.status === 'new' ? '✨ Nuevo' :
                             candidate.status === 'interview' ? '📅 Entrevista' :
                             candidate.status === 'reviewing' ? '👀 Revisando' :
                             candidate.status === 'hired' ? '✅ Contratado' : '❌ Rechazado'}
                        </div>
                        <button className="text-slate-500 hover:text-white transition-colors">
                            <MoreVertical size={16} />
                        </button>
                    </div>

                    {/* Main Profile Info */}
                    <div className="flex items-center gap-4 mb-6">
                        {/* Avatar Box */}
                        <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-500">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/5 relative z-10 bg-slate-800 shadow-xl">
                                 {candidate.photo ? (
                                    <img src={candidate.photo} alt="" className="w-full h-full object-cover blur-[3px] scale-110 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                 ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${statusColors[candidate.status]} flex items-center justify-center font-bold text-xl text-white`}>
                                       {candidate.avatar}
                                    </div>
                                 )}
                                 {/* Lock Icon Overlay */}
                                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                                    <div className="bg-black/30 p-1 rounded-full backdrop-blur-md border border-white/10">
                                        <Lock size={10} className="text-white/80" />
                                    </div>
                                 </div>
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="min-w-0">
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">{candidate.name}</h3>
                            <p className="text-xs text-slate-400 font-medium mt-0.5 truncate">{candidate.role}</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                                <span className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700">
                                    <Briefcase size={10} /> {candidate.jobTitle.split(' ')[0]}...
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid - Glass Effect */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                         <div className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-700/30 flex flex-col items-center justify-center text-center group-hover:bg-slate-800/60 transition-colors">
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Exp</span>
                            <span className="text-xs font-bold text-slate-200">{candidate.experience || "N/A"}</span>
                         </div>
                         <div className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-700/30 flex flex-col items-center justify-center text-center group-hover:bg-slate-800/60 transition-colors">
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Edad</span>
                            <span className="text-xs font-bold text-slate-200">{candidate.age || "?"}</span>
                         </div>
                         <div className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-700/30 flex flex-col items-center justify-center text-center group-hover:bg-slate-800/60 transition-colors">
                            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Fecha</span>
                            <span className="text-xs font-bold text-slate-200">{candidate.appliedDate.split(' ')[0]}</span>
                         </div>
                    </div>
                </div>

                {/* Secure Data Footer */}
                <div className="relative border-t border-slate-800/80 bg-slate-950/30 p-4">
                    {/* Security Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', backgroundSize: '8px 8px' }} />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                         <div className="space-y-1.5 flex-1">
                              <div className="flex items-center gap-2">
                                   <Mail size={10} className="text-slate-600" />
                                   <div className="h-2 bg-slate-800 rounded-full w-24 blur-[2px] opacity-70" />
                              </div>
                              <div className="flex items-center gap-2">
                                   <Phone size={10} className="text-slate-600" />
                                   <div className="h-2 bg-slate-800 rounded-full w-16 blur-[2px] opacity-70" />
                              </div>
                         </div>

                         <button
                             onClick={() => setShowUnlockModal(true)}
                             className="group/btn relative px-4 py-2 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-slate-300 hover:text-white text-xs font-bold rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 shadow-lg flex items-center gap-2 overflow-hidden"
                         >
                             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                             <Unlock size={12} />
                             <span className="relative z-10">Desbloquear</span>
                         </button>
                    </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      </div>
    </motion.div>
  );
}
