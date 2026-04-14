"use client";
import { useState } from "react";

const plans = [
  {
    id: 1,
    patient: "Иванова А.К.",
    title: "Комплексное лечение",
    total: 18500,
    paid: 9000,
    status: "in-progress",
    stages: [
      { name: "Диагностика и рентген", date: "05.04.2025", amount: 1500, done: true },
      { name: "Лечение кариеса (зуб 16)", date: "12.04.2025", amount: 4500, done: true },
      { name: "Лечение кариеса (зуб 26)", date: "20.04.2025", amount: 4500, done: false },
      { name: "Профессиональная чистка", date: "27.04.2025", amount: 3000, done: false },
      { name: "Контрольный осмотр", date: "05.05.2025", amount: 500, done: false },
    ],
  },
  {
    id: 2,
    patient: "Мамытов Б.Д.",
    title: "Имплантация (зуб 36)",
    total: 45000,
    paid: 22500,
    status: "in-progress",
    stages: [
      { name: "Консультация и КТ", date: "01.04.2025", amount: 3000, done: true },
      { name: "Хирургический этап — установка импланта", date: "10.04.2025", amount: 35000, done: true },
      { name: "Период остеоинтеграции", date: "10.10.2025", amount: 0, done: false },
      { name: "Установка коронки", date: "15.10.2025", amount: 7000, done: false },
    ],
  },
];

export default function TreatmentScreen() {
  const [selected, setSelected] = useState(1);
  const plan = plans.find((p) => p.id === selected)!;
  const progress = plan.stages.filter((s) => s.done).length / plan.stages.length;

  return (
    <div className="h-full flex overflow-hidden">
      {/* List */}
      <div className="w-60 flex-shrink-0 border-r border-[#27272a] overflow-y-auto scrollbar-thin">
        <div className="px-3 py-3 border-b border-[#27272a]">
          <p className="text-[#a1a1aa] text-xs font-medium">Планы лечения</p>
        </div>
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`w-full text-left px-4 py-3 border-b border-[#27272a] hover:bg-[#18181b] transition-colors ${
              selected === p.id ? "bg-[#18181b] border-r-2 border-[#68a5e8]" : ""
            }`}
          >
            <p className="text-[#e4e4e7] text-xs font-medium">{p.title}</p>
            <p className="text-[#52525b] text-[10px] mt-0.5">{p.patient}</p>
            <div className="mt-2">
              <div className="flex justify-between mb-1">
                <span className="text-[#52525b] text-[9px]">
                  {p.stages.filter((s) => s.done).length}/{p.stages.length} этапов
                </span>
                <span className="text-[#68a5e8] text-[9px]">
                  {Math.round((p.stages.filter((s) => s.done).length / p.stages.length) * 100)}%
                </span>
              </div>
              <div className="h-1 bg-[#27272a] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#68a5e8] rounded-full"
                  style={{ width: `${(p.stages.filter((s) => s.done).length / p.stages.length) * 100}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[#e4e4e7] font-semibold">{plan.title}</h3>
              <p className="text-[#52525b] text-sm">{plan.patient}</p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#68a5e8]/10 text-[#68a5e8]">
              В процессе
            </span>
          </div>
        </div>

        {/* Financials */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
            <p className="text-[#52525b] text-[10px] mb-1">Стоимость</p>
            <p className="text-[#e4e4e7] font-bold text-base">{plan.total.toLocaleString("ru")} с</p>
          </div>
          <div className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
            <p className="text-[#52525b] text-[10px] mb-1">Оплачено</p>
            <p className="text-[#4ead7a] font-bold text-base">{plan.paid.toLocaleString("ru")} с</p>
          </div>
          <div className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
            <p className="text-[#52525b] text-[10px] mb-1">Остаток</p>
            <p className="text-[#d4a94e] font-bold text-base">{(plan.total - plan.paid).toLocaleString("ru")} с</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-[#18181b] rounded-xl p-4 border border-[#27272a]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#a1a1aa] text-sm">Прогресс лечения</p>
            <span className="text-[#68a5e8] text-sm font-medium">{Math.round(progress * 100)}%</span>
          </div>
          <div className="h-2 bg-[#27272a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3a6ea5] to-[#68a5e8] rounded-full transition-all"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#27272a]">
            <p className="text-[#e4e4e7] text-sm font-medium">Этапы лечения</p>
          </div>
          <div className="p-4 space-y-3">
            {plan.stages.map((stage, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Timeline dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      stage.done
                        ? "bg-[#4ead7a] border-[#4ead7a]"
                        : i === plan.stages.findIndex((s) => !s.done)
                        ? "bg-[#68a5e8]/20 border-[#68a5e8]"
                        : "bg-transparent border-[#27272a]"
                    }`}
                  >
                    {stage.done && (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  {i < plan.stages.length - 1 && (
                    <div className={`w-px h-6 mt-1 ${stage.done ? "bg-[#4ead7a]/30" : "bg-[#27272a]"}`} />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-1 ${stage.done ? "opacity-60" : ""}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[#e4e4e7] text-sm">{stage.name}</p>
                    {stage.amount > 0 && (
                      <span className={`text-xs font-medium ${stage.done ? "text-[#4ead7a]" : "text-[#a1a1aa]"}`}>
                        {stage.amount.toLocaleString("ru")} с
                      </span>
                    )}
                  </div>
                  <p className="text-[#52525b] text-xs mt-0.5">{stage.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
