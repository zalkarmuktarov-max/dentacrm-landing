const categories = [
  {
    name: "Лечение",
    color: "#68a5e8",
    services: [
      { name: "Лечение кариеса (1 поверхность)", price: 2500 },
      { name: "Лечение кариеса (2+ поверхности)", price: 3500 },
      { name: "Лечение пульпита", price: 5500 },
      { name: "Удаление нерва", price: 4000 },
    ],
  },
  {
    name: "Профилактика",
    color: "#4ead7a",
    services: [
      { name: "Профессиональная чистка Air Flow", price: 3000 },
      { name: "Ультразвуковое удаление камня", price: 2500 },
      { name: "Фторирование", price: 1500 },
      { name: "Герметизация фиссур (1 зуб)", price: 1800 },
    ],
  },
  {
    name: "Хирургия",
    color: "#d45b5b",
    services: [
      { name: "Удаление зуба (простое)", price: 2000 },
      { name: "Удаление зуба (сложное)", price: 4500 },
      { name: "Разрез десны", price: 1500 },
    ],
  },
  {
    name: "Ортопедия",
    color: "#d4a94e",
    services: [
      { name: "Металлокерамическая коронка", price: 8500 },
      { name: "Коронка из циркония", price: 14000 },
      { name: "Временная коронка", price: 2500 },
    ],
  },
];

export default function ServicesScreen() {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-[#e4e4e7] font-medium text-sm">Прайс-лист</p>
        <span className="text-[#52525b] text-xs">{categories.reduce((a, c) => a + c.services.length, 0)} услуг</span>
      </div>

      {categories.map((cat, ci) => (
        <div key={ci} className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
          <div
            className="px-4 py-3 border-b border-[#27272a] flex items-center gap-2"
            style={{ backgroundColor: `${cat.color}08` }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
            <p className="text-[#e4e4e7] text-sm font-medium">{cat.name}</p>
            <span className="text-[#52525b] text-xs ml-auto">{cat.services.length} услуг</span>
          </div>
          <div className="divide-y divide-[#27272a]">
            {cat.services.map((service, si) => (
              <div key={si} className="px-4 py-3 flex items-center justify-between hover:bg-[#1f1f22] transition-colors">
                <p className="text-[#a1a1aa] text-xs">{service.name}</p>
                <p className="text-[#e4e4e7] text-xs font-medium ml-4 flex-shrink-0">
                  {service.price.toLocaleString("ru")} с
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
