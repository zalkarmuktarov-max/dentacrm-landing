export default function SettingsScreen() {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      {/* Clinic info */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Данные клиники</p>
        </div>
        <div className="p-4 space-y-3">
          {[
            { label: "Название", value: "Стоматология «Улыбка»" },
            { label: "Адрес", value: "Бишкек, ул. Киевская 77, офис 302" },
            { label: "Телефон", value: "+996 312 000 000" },
          ].map((f, i) => (
            <div key={i}>
              <p className="text-[#52525b] text-[10px] mb-1">{f.label}</p>
              <div className="bg-[#09090b] border border-[#27272a] rounded-lg px-3 py-2 text-[#e4e4e7] text-xs">
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Working hours */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Часы работы</p>
        </div>
        <div className="divide-y divide-[#27272a]">
          {[
            { day: "Пн–Пт", hours: "09:00 – 18:00", active: true },
            { day: "Суббота", hours: "10:00 – 16:00", active: true },
            { day: "Воскресенье", hours: "Выходной", active: false },
          ].map((d, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between">
              <span className="text-[#a1a1aa] text-xs">{d.day}</span>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${d.active ? "text-[#e4e4e7]" : "text-[#52525b]"}`}>{d.hours}</span>
                <div className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${d.active ? "bg-[#68a5e8]" : "bg-[#27272a]"}`}>
                  <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${d.active ? "translate-x-4" : "translate-x-0.5"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a] flex items-center justify-between">
          <p className="text-[#e4e4e7] text-sm font-medium">Сотрудники</p>
          <button className="text-[#68a5e8] text-xs hover:underline">+ Добавить</button>
        </div>
        <div className="divide-y divide-[#27272a]">
          {[
            { name: "Сейтов Азамат Калысбекович", role: "Стоматолог", color: "#68a5e8" },
            { name: "Асанова Мира Джакыповна", role: "Стоматолог", color: "#4ead7a" },
            { name: "Бекова Рита Омуровна", role: "Стоматолог", color: "#d4a94e" },
            { name: "Алимова Жылдыз", role: "Администратор", color: "#5eadb0" },
          ].map((staff, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: `${staff.color}20`, color: staff.color }}
              >
                {staff.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="flex-1">
                <p className="text-[#e4e4e7] text-xs">{staff.name}</p>
                <p className="text-[#52525b] text-[10px]">{staff.role}</p>
              </div>
              <span className="text-[#52525b] text-[10px] bg-[#27272a] px-2 py-0.5 rounded-full">{staff.role === "Стоматолог" ? "Врач" : "Админ"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
