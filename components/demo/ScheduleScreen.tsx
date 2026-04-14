export default function ScheduleScreen() {
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  const doctors = ["Д-р Сейтов", "Д-р Асанова", "Д-р Бекова"];

  const appointments = [
    { doctor: 0, startHour: 1, duration: 1.5, patient: "Иванова А.К.", procedure: "Кариес", color: "#68a5e8", status: "done" },
    { doctor: 0, startHour: 3, duration: 1, patient: "Джакыпова Н.А.", procedure: "Консультация", color: "#d4a94e", status: "upcoming" },
    { doctor: 0, startHour: 4.5, duration: 2, patient: "Токтосунов Р.", procedure: "Удаление", color: "#d45b5b", status: "upcoming" },
    { doctor: 1, startHour: 2.5, duration: 1, patient: "Мамытов Б.Д.", procedure: "Чистка", color: "#4ead7a", status: "in-progress" },
    { doctor: 1, startHour: 4, duration: 1.5, patient: "Омурова Г.Б.", procedure: "Протез", color: "#5eadb0", status: "upcoming" },
    { doctor: 2, startHour: 1, duration: 2, patient: "Карыбеков А.", procedure: "Имплант", color: "#68a5e8", status: "done" },
    { doctor: 2, startHour: 5, duration: 1, patient: "Бекова Д.М.", procedure: "Пломба", color: "#d4a94e", status: "upcoming" },
  ];

  const cellHeight = 48; // px per hour
  const startOffset = 8; // starts at 8:00

  return (
    <div className="h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] flex-shrink-0">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-lg bg-[#27272a] hover:bg-[#3a3a3f] text-[#a1a1aa] flex items-center justify-center text-xs transition-colors">
            ‹
          </button>
          <span className="text-[#e4e4e7] text-sm font-medium">Пн, 14 апреля 2025</span>
          <button className="w-7 h-7 rounded-lg bg-[#27272a] hover:bg-[#3a3a3f] text-[#a1a1aa] flex items-center justify-center text-xs transition-colors">
            ›
          </button>
        </div>
        <div className="flex gap-2">
          {["День", "Неделя"].map((v, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                i === 0
                  ? "bg-[#68a5e8]/20 text-[#68a5e8]"
                  : "text-[#52525b] hover:text-[#a1a1aa]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="flex">
          {/* Time column */}
          <div className="w-14 flex-shrink-0 border-r border-[#27272a]">
            <div className="h-8 border-b border-[#27272a]" /> {/* doctor headers offset */}
            {hours.map((h) => (
              <div key={h} className="flex items-start justify-end pr-2 text-[#52525b] text-[10px]" style={{ height: cellHeight }}>
                <span className="-mt-2">{h}</span>
              </div>
            ))}
          </div>

          {/* Doctor columns */}
          <div className="flex-1 flex">
            {doctors.map((doc, di) => (
              <div key={di} className="flex-1 border-r border-[#27272a] last:border-0 relative">
                {/* Doctor header */}
                <div className="h-8 border-b border-[#27272a] flex items-center justify-center">
                  <span className="text-[#a1a1aa] text-xs font-medium">{doc}</span>
                </div>

                {/* Hour rows */}
                {hours.map((_, hi) => (
                  <div key={hi} className="border-b border-[#27272a]/50" style={{ height: cellHeight }} />
                ))}

                {/* Red "current time" line (thin on landing) */}
                <div
                  className="absolute left-0 right-0 z-20 pointer-events-none"
                  style={{ top: 32 + (10.5 - startOffset) * cellHeight }}
                >
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d45b5b] -ml-0.5 flex-shrink-0" />
                    <div className="flex-1 h-[1px] bg-[#d45b5b]" />
                  </div>
                </div>

                {/* Appointments */}
                {appointments
                  .filter((a) => a.doctor === di)
                  .map((appt, ai) => (
                    <div
                      key={ai}
                      className="absolute left-1 right-1 rounded-lg px-2 py-1 overflow-hidden cursor-pointer hover:brightness-110 transition-all"
                      style={{
                        top: 32 + (appt.startHour) * cellHeight + 2,
                        height: appt.duration * cellHeight - 4,
                        backgroundColor: `${appt.color}20`,
                        borderLeft: `2px solid ${appt.color}`,
                      }}
                    >
                      <p className="text-[10px] font-medium truncate" style={{ color: appt.color }}>
                        {appt.patient}
                      </p>
                      <p className="text-[9px] text-[#52525b] truncate">{appt.procedure}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
