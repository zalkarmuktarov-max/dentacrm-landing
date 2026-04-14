export default function FinancesScreen() {
  const months = ["Янв", "Фев", "Мар", "Апр"];
  const values = [198000, 231000, 267000, 284500];
  const maxVal = Math.max(...values);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      {/* Summary KPIs */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Выручка (апрель)", value: "284 500 с", sub: "+6.6% к марту", color: "#4ead7a" },
          { label: "Средний чек", value: "4 820 с", sub: "59 пациентов", color: "#68a5e8" },
          { label: "Выплачено врачам", value: "85 350 с", sub: "30% от выручки", color: "#d4a94e" },
        ].map((kpi, i) => (
          <div key={i} className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
            <p className="text-[#52525b] text-[10px] mb-1">{kpi.label}</p>
            <p className="font-bold text-sm" style={{ color: kpi.color }}>{kpi.value}</p>
            <p className="text-[#52525b] text-[9px] mt-0.5">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="bg-[#18181b] rounded-xl p-4 border border-[#27272a]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#e4e4e7] text-sm font-medium">Динамика выручки</p>
          <select className="bg-[#09090b] border border-[#27272a] text-[#a1a1aa] text-xs rounded-lg px-2 py-1 focus:outline-none">
            <option>2025 год</option>
          </select>
        </div>
        <div className="flex items-end gap-3 h-28">
          {values.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[#52525b] text-[9px]">{(v / 1000).toFixed(0)}к</span>
              <div
                className="w-full rounded-t-md transition-all"
                style={{
                  height: `${(v / maxVal) * 100}%`,
                  backgroundColor: i === values.length - 1 ? "#68a5e8" : "#68a5e830",
                }}
              />
              <span className="text-[#52525b] text-[9px]">{months[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services breakdown */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Разбивка по услугам</p>
        </div>
        <div className="divide-y divide-[#27272a]">
          {[
            { name: "Лечение кариеса", amount: 89500, pct: 31 },
            { name: "Протезирование", amount: 72000, pct: 25 },
            { name: "Имплантация", amount: 67500, pct: 24 },
            { name: "Профессиональная чистка", amount: 34800, pct: 12 },
            { name: "Консультации и рентген", amount: 20700, pct: 8 },
          ].map((service, i) => (
            <div key={i} className="px-4 py-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#a1a1aa] text-xs">{service.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#52525b] text-xs">{service.pct}%</span>
                  <span className="text-[#e4e4e7] text-xs font-medium">{service.amount.toLocaleString("ru")} с</span>
                </div>
              </div>
              <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${service.pct}%`,
                    backgroundColor: ["#68a5e8", "#4ead7a", "#d4a94e", "#5eadb0", "#d45b5b"][i],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor earnings */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Заработок врачей</p>
        </div>
        <div className="divide-y divide-[#27272a]">
          {[
            { name: "Д-р Сейтов А.", patients: 24, revenue: 112000, salary: 33600 },
            { name: "Д-р Асанова М.", patients: 21, revenue: 98500, salary: 29550 },
            { name: "Д-р Бекова Р.", patients: 14, revenue: 74000, salary: 22200 },
          ].map((doc, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-xs font-bold flex-shrink-0">
                {doc.name.split(" ").pop()![0]}
              </div>
              <div className="flex-1">
                <p className="text-[#e4e4e7] text-xs font-medium">{doc.name}</p>
                <p className="text-[#52525b] text-[10px]">{doc.patients} пациентов · выручка {doc.revenue.toLocaleString("ru")} с</p>
              </div>
              <div className="text-right">
                <p className="text-[#4ead7a] text-xs font-medium">{doc.salary.toLocaleString("ru")} с</p>
                <p className="text-[#52525b] text-[10px]">зарплата</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
