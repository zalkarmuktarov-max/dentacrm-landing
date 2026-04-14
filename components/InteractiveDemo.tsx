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
  ClinicIcon,
  BookingIcon,
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
const ClinicPageScreen = dynamic(() => import("./demo/ClinicPageScreen"), { ssr: false });
const BookingDemoScreen = dynamic(() => import("./demo/BookingDemoScreen"), { ssr: false });

const clinicTabs = [
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

const patientTabs = [
  { id: "clinic-page", label: "Страница клиники", icon: ClinicIcon },
  { id: "booking", label: "Онлайн-запись + AI", icon: BookingIcon },
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
  "clinic-page": ClinicPageScreen,
  booking: BookingDemoScreen,
};

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mode, setMode] = useState<"clinic" | "patient">("clinic");

  const ActiveScreen = screens[activeTab] || DashboardScreen;
  const tabs = mode === "clinic" ? clinicTabs : patientTabs;

  return (
    <section id="demo" className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Интерактивное демо
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-4">
            Попробуйте сами
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            Кликайте по разделам, открывайте карточки, нажимайте на зубы — это настоящий симулятор CRM
          </p>
        </div>

        {/* Mode switcher */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-[#111113] border border-[#27272a] rounded-xl p-1 gap-1">
            {[
              { id: "clinic", label: "Сторона клиники" },
              { id: "patient", label: "Сторона пациента" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m.id as "clinic" | "patient");
                  setActiveTab(m.id === "clinic" ? "dashboard" : "clinic-page");
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === m.id
                    ? "bg-[#68a5e8] text-[#09090b]"
                    : "text-[#a1a1aa] hover:text-[#e4e4e7]"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo window */}
        <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0f] border-b border-[#27272a]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#d45b5b]/50" />
              <div className="w-3 h-3 rounded-full bg-[#d4a94e]/50" />
              <div className="w-3 h-3 rounded-full bg-[#4ead7a]/50" />
            </div>
            <div className="flex-1 bg-[#18181b] border border-[#27272a] rounded-md px-3 py-1 text-[#52525b] text-xs text-center">
              {mode === "clinic" ? "app.dentacrm.kg" : "ulybka.dentacrm.kg"}
            </div>
            <div className="w-14" />
          </div>

          {/* App layout */}
          <div className="flex" style={{ height: 520 }}>
            {/* Sidebar */}
            <div className="w-48 flex-shrink-0 bg-[#0d0d0f] border-r border-[#27272a] flex flex-col overflow-y-auto scrollbar-thin">
              {/* Logo */}
              <div className="flex items-center gap-2 px-4 py-4 border-b border-[#27272a]">
                <div className="text-[#68a5e8]">
                  <ToothIcon className="w-5 h-5" />
                </div>
                <span className="text-[#e4e4e7] font-semibold text-sm">DentaCRM</span>
              </div>

              {/* Nav */}
              <nav className="flex-1 p-2 space-y-0.5">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors text-xs ${
                        active
                          ? "bg-[#68a5e8]/15 text-[#68a5e8]"
                          : "text-[#52525b] hover:text-[#a1a1aa] hover:bg-[#18181b]"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="leading-tight">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* User */}
              <div className="p-3 border-t border-[#27272a]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    АД
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#e4e4e7] text-[10px] font-medium truncate">Алимова Жылдыз</p>
                    <p className="text-[#52525b] text-[9px]">Администратор</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden bg-[#111113]">
              {/* Content header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] bg-[#0f0f11]">
                <p className="text-[#e4e4e7] text-sm font-medium">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ead7a] animate-pulse" />
                  <span className="text-[#52525b] text-xs">Демо-режим</span>
                </div>
              </div>

              {/* Screen */}
              <div className="overflow-hidden" style={{ height: 477 }}>
                <ActiveScreen />
              </div>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-[#52525b] text-sm mt-6">
          Это не скриншот — всё работает. Кликайте по элементам внутри демо.
        </p>
      </div>
    </section>
  );
}
