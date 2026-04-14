import LeadForm from "./LeadForm";
import { ToothIcon, DashboardIcon, CalendarIcon, PatientsIcon, FinanceIcon, GearIcon } from "./Icons";

const appointments = [
  { time: "08:30", patient: "Карыбеков А.М.", service: "Удаление зуба", doctor: "Бекова Р.", status: "done", color: "#4ead7a" },
  { time: "09:00", patient: "Иванова А.К.", service: "Лечение кариеса", doctor: "Сейтов А.", status: "done", color: "#4ead7a" },
  { time: "10:00", patient: "Мамытов Б.Д.", service: "Профессиональная чистка", doctor: "Асанова М.", status: "now", color: "#68a5e8" },
  { time: "11:00", patient: "Джакыпова Н.А.", service: "Консультация", doctor: "Сейтов А.", status: "wait", color: "#d4a94e" },
  { time: "12:30", patient: "Токтосунов Р.М.", service: "Имплантация", doctor: "Бекова Р.", status: "wait", color: "#d4a94e" },
  { time: "14:00", patient: "Омурова Г.Б.", service: "Металлокерамическая коронка", doctor: "Асанова М.", status: "wait", color: "#d4a94e" },
  { time: "15:30", patient: "Алиева Д.С.", service: "Лечение кариеса", doctor: "Сейтов А.", status: "wait", color: "#d4a94e" },
];

const statusLabel: Record<string, string> = { done: "Принят", now: "Сейчас", wait: "Ожидает" };

const kpis = [
  { label: "Записей сегодня", value: "12", sub: "+3 от вчера", color: "#68a5e8" },
  { label: "Выручка (месяц)", value: "284 500", sub: "сом", color: "#4ead7a" },
  { label: "Новые пациенты", value: "8", sub: "за этот месяц", color: "#d4a94e" },
  { label: "Средний чек", value: "4 820", sub: "сом", color: "#5eadb0" },
  { label: "Загрузка клиники", value: "87%", sub: "5 из 6 кресел", color: "#68a5e8" },
  { label: "Не пришли", value: "2", sub: "за сегодня", color: "#d45b5b" },
];

const doctors = [
  { name: "Сейтов А.", load: 92 },
  { name: "Асанова М.", load: 75 },
  { name: "Бекова Р.", load: 83 },
];

const activity = [
  { text: "Мамытов Б.Д. пришёл на приём", time: "2 мин назад", color: "#4ead7a" },
  { text: "Новая запись: Алиева Д.С. на 15:30", time: "14 мин назад", color: "#68a5e8" },
  { text: "Иванова А.К. — оплата 4 500 с", time: "42 мин назад", color: "#d4a94e" },
];

const sidebarItems = [
  { icon: DashboardIcon, active: true },
  { icon: CalendarIcon, active: false },
  { icon: PatientsIcon, active: false },
  { icon: FinanceIcon, active: false },
  { icon: GearIcon, active: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#68a5e8]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#3a6ea5]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#111113] border border-[#27272a] rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ead7a] animate-pulse" />
            <span className="text-[#a1a1aa] text-sm">Для стоматологий Кыргызстана</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e4e4e7] leading-tight mb-6 text-balance">
            CRM система для стоматологий —{" "}
            <span className="text-[#68a5e8]">все процессы</span>{" "}
            от записи клиента до учёта финансов в одном экране
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#a1a1aa] mb-10 max-w-3xl mx-auto leading-relaxed">
            Онлайн-запись, учёт пациентов, аналитика, зубная формула и AI-ассистент
            для ваших клиентов. Получите доступ к демо-версии прямо сейчас
          </p>

          {/* Form */}
          <div className="max-w-xl mx-auto mb-14">
            <LeadForm size="large" />
          </div>
        </div>

        {/* Full dashboard preview */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090b] to-transparent z-10 pointer-events-none" />
          <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d0f] border-b border-[#27272a]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#d45b5b]" />
                <div className="w-3 h-3 rounded-full bg-[#d4a94e]" />
                <div className="w-3 h-3 rounded-full bg-[#4ead7a]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#18181b] border border-[#27272a] rounded-md px-4 py-1 text-[#a1a1aa] text-xs w-48 text-center">
                  app.dentacrm.kg
                </div>
              </div>
              <div className="w-14" />
            </div>

            {/* App */}
            <div className="flex" style={{ height: 420 }}>
              {/* Icon sidebar */}
              <div className="w-12 bg-[#0d0d0f] border-r border-[#27272a] flex flex-col items-center pt-3 gap-2 flex-shrink-0">
                <div className="text-[#68a5e8] mb-2">
                  <ToothIcon className="w-5 h-5" />
                </div>
                {sidebarItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.active ? "bg-[#68a5e8]/20 text-[#68a5e8]" : "text-[#52525b]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  );
                })}
              </div>

              {/* Main */}
              <div className="flex-1 overflow-hidden flex flex-col min-w-0">
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#27272a] bg-[#0f0f11] flex-shrink-0">
                  <p className="text-[#e4e4e7] text-sm font-medium">Дашборд</p>
                  <div className="flex items-center gap-1 bg-[#18181b] border border-[#27272a] rounded-lg p-0.5">
                    {["Сегодня", "Неделя", "Месяц"].map((p, i) => (
                      <button key={i} className={`px-2.5 py-1 rounded-md text-[10px] transition-colors ${i === 0 ? "bg-[#68a5e8]/20 text-[#68a5e8]" : "text-[#52525b]"}`}>{p}</button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-hidden p-3 flex gap-3">
                  {/* Left column */}
                  <div className="flex-1 min-w-0 space-y-3 overflow-hidden">
                    {/* KPI grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {kpis.map((kpi, i) => (
                        <div key={i} className="bg-[#18181b] rounded-xl p-2.5 border border-[#27272a]">
                          <p className="text-[#52525b] text-[9px] mb-0.5 truncate">{kpi.label}</p>
                          <p className="font-bold text-sm leading-tight" style={{ color: kpi.color }}>{kpi.value}</p>
                          <p className="text-[#52525b] text-[9px]">{kpi.sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* Appointments */}
                    <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-[#27272a]">
                        <p className="text-[#e4e4e7] text-[11px] font-medium">Записи на сегодня</p>
                        <span className="text-[#52525b] text-[9px]">Пн, 14 апреля</span>
                      </div>
                      <div className="divide-y divide-[#27272a]">
                        {appointments.map((a, i) => (
                          <div key={i} className={`flex items-center gap-2 px-3 py-1.5 ${a.status === "now" ? "bg-[#68a5e8]/5" : ""}`}>
                            <span className="text-[#52525b] text-[9px] w-8 flex-shrink-0">{a.time}</span>
                            <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: a.color }} />
                            <p className="text-[#e4e4e7] text-[10px] font-medium w-24 flex-shrink-0 truncate">{a.patient}</p>
                            <p className="text-[#52525b] text-[9px] flex-1 truncate hidden sm:block">{a.service}</p>
                            <p className="text-[#a1a1aa] text-[9px] w-16 flex-shrink-0 hidden md:block truncate">{a.doctor}</p>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: `${a.color}15`, color: a.color }}>
                              {statusLabel[a.status]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="w-44 flex-shrink-0 space-y-3">
                    {/* Doctor load */}
                    <div className="bg-[#18181b] rounded-xl border border-[#27272a] p-3">
                      <p className="text-[#e4e4e7] text-[11px] font-medium mb-2.5">Загрузка врачей</p>
                      <div className="space-y-2.5">
                        {doctors.map((d, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-1">
                              <span className="text-[#a1a1aa] text-[9px]">{d.name}</span>
                              <span className="text-[#68a5e8] text-[9px]">{d.load}%</span>
                            </div>
                            <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                              <div className="h-full bg-[#68a5e8] rounded-full" style={{ width: `${d.load}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="bg-[#18181b] rounded-xl border border-[#27272a] p-3">
                      <p className="text-[#e4e4e7] text-[11px] font-medium mb-2.5">Активность</p>
                      <div className="space-y-2.5">
                        {activity.map((a, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: a.color }} />
                            <div>
                              <p className="text-[#a1a1aa] text-[9px] leading-tight">{a.text}</p>
                              <p className="text-[#52525b] text-[8px] mt-0.5">{a.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
