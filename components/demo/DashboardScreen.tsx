export default function DashboardScreen() {
  const kpis = [
    { label: "Записей сегодня", value: "12", sub: "+3 от вчера", color: "#68a5e8" },
    { label: "Выручка (месяц)", value: "284 500", sub: "сом", color: "#4ead7a" },
    { label: "Активных пациентов", value: "1 247", sub: "всего в базе", color: "#d4a94e" },
    { label: "Загрузка клиники", value: "87%", sub: "5 из 6 кресел", color: "#5eadb0" },
  ];

  const appointments = [
    { time: "09:00", patient: "Иванова А.К.", procedure: "Лечение кариеса", doctor: "Д-р Сейтов", status: "completed", color: "#4ead7a" },
    { time: "10:30", patient: "Мамытов Б.Д.", procedure: "Профессиональная чистка", doctor: "Д-р Асанова", status: "in-progress", color: "#68a5e8" },
    { time: "11:45", patient: "Джакыпова Н.А.", procedure: "Консультация", doctor: "Д-р Сейтов", status: "upcoming", color: "#d4a94e" },
    { time: "13:00", patient: "Токтосунов Р.М.", procedure: "Удаление зуба", doctor: "Д-р Асанова", status: "upcoming", color: "#d4a94e" },
    { time: "14:30", patient: "Омурова Г.Б.", procedure: "Протезирование", doctor: "Д-р Бекова", status: "upcoming", color: "#d4a94e" },
  ];

  const statusLabel: Record<string, string> = {
    completed: "Завершён",
    "in-progress": "Идёт приём",
    upcoming: "Ожидает",
  };

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-[#18181b] rounded-xl p-4 border border-[#27272a]">
            <p className="text-[#52525b] text-xs mb-1">{kpi.label}</p>
            <p className="font-bold text-xl" style={{ color: kpi.color }}>{kpi.value}</p>
            <p className="text-[#52525b] text-xs mt-0.5">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="bg-[#18181b] rounded-xl p-4 border border-[#27272a]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#e4e4e7] text-sm font-medium">Выручка за месяц</p>
          <span className="text-[#4ead7a] text-xs bg-[#4ead7a]/10 px-2 py-1 rounded-full">+12% к прошлому</span>
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100, 92, 110].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                backgroundColor: i === 13 ? "#68a5e8" : "#68a5e820",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[#52525b] text-[10px]">1 апр</span>
          <span className="text-[#52525b] text-[10px]">14 апр</span>
        </div>
      </div>

      {/* Today appointments */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Записи на сегодня</p>
          <span className="text-[#52525b] text-xs">Пн, 14 апреля 2025</span>
        </div>
        <div className="divide-y divide-[#27272a]">
          {appointments.map((appt, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#1f1f22] transition-colors">
              <span className="text-[#52525b] text-xs w-10 flex-shrink-0">{appt.time}</span>
              <div
                className="w-1.5 h-8 rounded-full flex-shrink-0"
                style={{ backgroundColor: appt.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-[#e4e4e7] text-xs font-medium truncate">{appt.patient}</p>
                <p className="text-[#52525b] text-[10px] truncate">{appt.procedure}</p>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-[#a1a1aa] text-[10px]">{appt.doctor}</p>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: `${appt.color}15`,
                  color: appt.color,
                }}
              >
                {statusLabel[appt.status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors load */}
      <div className="bg-[#18181b] rounded-xl p-4 border border-[#27272a]">
        <p className="text-[#e4e4e7] text-sm font-medium mb-3">Загрузка врачей</p>
        <div className="space-y-2.5">
          {[
            { name: "Д-р Сейтов А.", load: 92, count: "5/6 записей" },
            { name: "Д-р Асанова М.", load: 75, count: "4/6 записей" },
            { name: "Д-р Бекова Р.", load: 83, count: "5/6 записей" },
          ].map((doc, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#a1a1aa] text-xs">{doc.name}</span>
                <span className="text-[#52525b] text-xs">{doc.count}</span>
              </div>
              <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#68a5e8] transition-all"
                  style={{ width: `${doc.load}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
