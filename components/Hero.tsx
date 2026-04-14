import LeadForm from "./LeadForm";

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
          <div className="max-w-xl mx-auto mb-12">
            <LeadForm size="large" />
          </div>

        </div>

        {/* Hero image / preview strip */}
        <div className="mt-16 relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent z-10 pointer-events-none" />
          <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#18181b] border-b border-[#27272a]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#d45b5b]/60" />
                <div className="w-3 h-3 rounded-full bg-[#d4a94e]/60" />
                <div className="w-3 h-3 rounded-full bg-[#4ead7a]/60" />
              </div>
              <div className="flex-1 bg-[#09090b] rounded-md px-3 py-1 text-[#52525b] text-xs text-center">
                app.dentacrm.kg
              </div>
            </div>

            {/* Mini dashboard preview */}
            <div className="flex" style={{ height: 340 }}>
              {/* Sidebar */}
              <div className="w-14 bg-[#0d0d0f] border-r border-[#27272a] flex flex-col items-center py-4 gap-3">
                {[
                  { icon: "⊞", active: true },
                  { icon: "📅", active: false },
                  { icon: "👥", active: false },
                  { icon: "🦷", active: false },
                  { icon: "💰", active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                      item.active
                        ? "bg-[#68a5e8]/20 text-[#68a5e8]"
                        : "text-[#52525b] hover:text-[#a1a1aa]"
                    }`}
                  >
                    <span>{item.icon}</span>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 overflow-hidden">
                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Записей сегодня", value: "12", color: "#68a5e8" },
                    { label: "Выручка (месяц)", value: "284 500 с", color: "#4ead7a" },
                    { label: "Пациентов", value: "1 247", color: "#d4a94e" },
                    { label: "Загрузка", value: "87%", color: "#5eadb0" },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-[#18181b] rounded-xl p-3">
                      <p className="text-[#52525b] text-[10px] mb-1">{kpi.label}</p>
                      <p className="font-bold text-base" style={{ color: kpi.color }}>
                        {kpi.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Schedule preview */}
                <div className="bg-[#18181b] rounded-xl p-3">
                  <p className="text-[#52525b] text-[10px] mb-2 uppercase tracking-wide">
                    Расписание сегодня
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { time: "09:00", patient: "Иванова А.К.", procedure: "Лечение кариеса", doctor: "Д-р Сейтов", color: "#68a5e8" },
                      { time: "10:30", patient: "Мамытов Б.Д.", procedure: "Профессиональная чистка", doctor: "Д-р Асанова", color: "#4ead7a" },
                      { time: "11:45", patient: "Джакыпова Н.А.", procedure: "Консультация", doctor: "Д-р Сейтов", color: "#d4a94e" },
                    ].map((appt, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px]">
                        <span className="text-[#52525b] w-9 flex-shrink-0">{appt.time}</span>
                        <div
                          className="flex-1 rounded px-2 py-1 flex items-center justify-between"
                          style={{ backgroundColor: `${appt.color}15`, borderLeft: `2px solid ${appt.color}` }}
                        >
                          <span className="text-[#e4e4e7]">{appt.patient}</span>
                          <span className="text-[#a1a1aa] hidden sm:block">{appt.procedure}</span>
                          <span style={{ color: appt.color }}>{appt.doctor}</span>
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
    </section>
  );
}
