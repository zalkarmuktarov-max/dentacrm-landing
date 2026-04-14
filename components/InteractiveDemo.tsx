"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  DashboardIcon,
  CalendarIcon,
  PatientsIcon,
  ToothIcon,
  TreatmentIcon,
  FinanceIcon,
  ServicesIcon,
  KnowledgeIcon,
  GearIcon,
} from "./Icons";

const DashboardScreen = dynamic(() => import("./demo/DashboardScreen"), { ssr: false });
const ScheduleScreen = dynamic(() => import("./demo/ScheduleScreen"), { ssr: false });
const PatientsScreen = dynamic(() => import("./demo/PatientsScreen"), { ssr: false });
const DentalChartScreen = dynamic(() => import("./demo/DentalChartScreen"), { ssr: false });
const TreatmentScreen = dynamic(() => import("./demo/TreatmentScreen"), { ssr: false });
const FinancesScreen = dynamic(() => import("./demo/FinancesScreen"), { ssr: false });
const ServicesScreen = dynamic(() => import("./demo/ServicesScreen"), { ssr: false });
const KnowledgeScreen = dynamic(() => import("./demo/KnowledgeScreen"), { ssr: false });
const SettingsScreen = dynamic(() => import("./demo/SettingsScreen"), { ssr: false });

const tabs = [
  { id: "dashboard", label: "Дашборд", icon: DashboardIcon },
  { id: "schedule", label: "Расписание", icon: CalendarIcon },
  { id: "patients", label: "Пациенты", icon: PatientsIcon },
  { id: "dental", label: "Зубная формула", icon: ToothIcon },
  { id: "treatment", label: "Планы лечения", icon: TreatmentIcon },
  { id: "finances", label: "Финансы", icon: FinanceIcon },
  { id: "services", label: "Услуги и прайс", icon: ServicesIcon },
  { id: "knowledge", label: "База знаний", icon: KnowledgeIcon },
  { id: "settings", label: "Настройки", icon: GearIcon },
];

const screens: Record<string, React.ComponentType> = {
  dashboard: DashboardScreen,
  schedule: ScheduleScreen,
  patients: PatientsScreen,
  dental: DentalChartScreen,
  treatment: TreatmentScreen,
  finances: FinancesScreen,
  services: ServicesScreen,
  knowledge: KnowledgeScreen,
  settings: SettingsScreen,
};

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const ActiveScreen = screens[activeTab] || DashboardScreen;

  return (
    <section id="demo" className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Интерактивное демо
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-4">
            Попробуйте сами — кликайте по разделам, открывайте карточки, нажимайте на зубы
          </h2>
        </div>

        {/* Demo window */}
        <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d0f] border-b border-[#27272a]">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#d45b5b]" />
              <div className="w-3 h-3 rounded-full bg-[#d4a94e]" />
              <div className="w-3 h-3 rounded-full bg-[#4ead7a]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#18181b] border border-[#27272a] rounded-md px-4 py-1 text-[#a1a1aa] text-xs w-56 text-center select-none">
                app.dentacrm.kg
              </div>
            </div>
            <div className="w-14 flex-shrink-0" />
          </div>

          {/* App layout */}
          <div className="flex" style={{ height: 650 }}>
            {/* Sidebar — 200px */}
            <div className="flex-shrink-0 bg-[#0d0d0f] border-r border-[#27272a] flex flex-col" style={{ width: 200 }}>
              {/* Logo */}
              <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#27272a]">
                <div className="text-[#68a5e8]">
                  <ToothIcon className="w-5 h-5" />
                </div>
                <span className="text-[#e4e4e7] font-semibold text-sm">DentaCRM</span>
              </div>

              {/* Nav */}
              <nav className="flex-1 p-2.5 space-y-0.5 overflow-y-auto scrollbar-thin">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-colors text-xs font-medium ${
                        active
                          ? "bg-[#68a5e8]/15 text-[#68a5e8]"
                          : "text-[#52525b] hover:text-[#a1a1aa] hover:bg-[#18181b]"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* User */}
              <div className="p-3 border-t border-[#27272a]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    АЖ
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#e4e4e7] text-[10px] font-medium truncate">Алимова Жылдыз</p>
                    <p className="text-[#52525b] text-[9px]">Администратор</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden bg-[#111113] flex flex-col min-w-0">
              {/* Content header */}
              <div className="flex items-center px-5 py-3 border-b border-[#27272a] bg-[#0f0f11] flex-shrink-0">
                <p className="text-[#e4e4e7] text-sm font-medium">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </p>
              </div>

              {/* Screen — takes all remaining height */}
              <div className="flex-1 overflow-hidden">
                <ActiveScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
