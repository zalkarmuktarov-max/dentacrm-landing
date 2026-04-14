"use client";
import { useState } from "react";

type ToothStatus = "healthy" | "treated" | "crown" | "missing" | "problem";

const statusColors: Record<ToothStatus, string> = {
  healthy: "#27272a",
  treated: "#68a5e8",
  crown: "#d4a94e",
  missing: "#d45b5b",
  problem: "#d4a94e",
};

const statusLabels: Record<ToothStatus, string> = {
  healthy: "Здоров",
  treated: "Пролечен",
  crown: "Коронка",
  missing: "Удалён",
  problem: "Требует лечения",
};

// Upper teeth: 18-11, 21-28
const upperLeft = [18, 17, 16, 15, 14, 13, 12, 11];
const upperRight = [21, 22, 23, 24, 25, 26, 27, 28];
// Lower teeth: 48-41, 31-38
const lowerLeft = [48, 47, 46, 45, 44, 43, 42, 41];
const lowerRight = [31, 32, 33, 34, 35, 36, 37, 38];

const initialTeeth: Record<number, ToothStatus> = {
  16: "crown",
  11: "treated",
  21: "treated",
  26: "problem",
  36: "missing",
  46: "treated",
  17: "treated",
};

export default function DentalChartScreen() {
  const [teeth, setTeeth] = useState(initialTeeth);
  const [selected, setSelected] = useState<number | null>(16);

  const getStatus = (n: number): ToothStatus => teeth[n] || "healthy";

  const handleClick = (n: number) => {
    setSelected(n === selected ? null : n);
  };

  const ToothBtn = ({ num }: { num: number }) => {
    const status = getStatus(num);
    const isSelected = selected === num;
    const color = statusColors[status];

    return (
      <button
        onClick={() => handleClick(num)}
        className="flex flex-col items-center gap-0.5 group"
      >
        <span className="text-[8px] text-[#52525b]">{num}</span>
        <div
          className="w-6 h-8 sm:w-7 sm:h-9 rounded-b-lg rounded-t-sm border-2 transition-all flex items-center justify-center"
          style={{
            borderColor: isSelected ? "#68a5e8" : color,
            backgroundColor: isSelected ? "#68a5e820" : `${color}30`,
            boxShadow: isSelected ? `0 0 8px ${color}40` : "none",
          }}
        >
          {status === "missing" && (
            <div className="w-3 h-0.5 bg-[#d45b5b] rotate-45" />
          )}
          {status === "crown" && (
            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#d4a94e" }} />
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      {/* Chart */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#e4e4e7] text-sm font-medium">Зубная формула</p>
          <div className="flex items-center gap-3 flex-wrap justify-end">
            {Object.entries(statusLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-1">
                <div
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ backgroundColor: statusColors[key as ToothStatus] }}
                />
                <span className="text-[#52525b] text-[9px]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upper jaw */}
        <div className="mb-2">
          <p className="text-[#52525b] text-[9px] uppercase tracking-wider mb-2 text-center">Верхняя челюсть</p>
          <div className="flex justify-center gap-0.5 sm:gap-1">
            {upperLeft.map((n) => <ToothBtn key={n} num={n} />)}
            <div className="w-4" />
            {upperRight.map((n) => <ToothBtn key={n} num={n} />)}
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-[#27272a] border-dashed" />

        {/* Lower jaw */}
        <div>
          <div className="flex justify-center gap-0.5 sm:gap-1">
            {lowerLeft.map((n) => <ToothBtn key={n} num={n} />)}
            <div className="w-4" />
            {lowerRight.map((n) => <ToothBtn key={n} num={n} />)}
          </div>
          <p className="text-[#52525b] text-[9px] uppercase tracking-wider mt-2 text-center">Нижняя челюсть</p>
        </div>
      </div>

      {/* Selected tooth info */}
      {selected && (
        <div className="bg-[#18181b] rounded-xl border border-[#27272a] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `${statusColors[getStatus(selected)]}20`,
                  color: statusColors[getStatus(selected)],
                }}
              >
                {selected}
              </div>
              <div>
                <p className="text-[#e4e4e7] text-sm font-medium">Зуб {selected}</p>
                <p className="text-[#52525b] text-xs">{statusLabels[getStatus(selected)]}</p>
              </div>
            </div>
            <select
              value={getStatus(selected)}
              onChange={(e) => setTeeth({ ...teeth, [selected]: e.target.value as ToothStatus })}
              className="bg-[#09090b] border border-[#27272a] text-[#a1a1aa] text-xs rounded-lg px-2 py-1.5 focus:outline-none"
            >
              {Object.entries(statusLabels).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          {/* 5 surfaces */}
          <div className="mb-3">
            <p className="text-[#52525b] text-[10px] uppercase tracking-wider mb-2">5 поверхностей</p>
            <div className="flex items-center gap-2">
              {/* Tooth cross-section diagram */}
              <div className="relative w-16 h-16 flex-shrink-0">
                {/* Mesial */}
                <div className="absolute inset-y-2 left-0 w-3 rounded-l-sm bg-[#68a5e8]/30 border border-[#68a5e8]/50" />
                {/* Distal */}
                <div className="absolute inset-y-2 right-0 w-3 rounded-r-sm bg-[#27272a] border border-[#27272a]" />
                {/* Buccal */}
                <div className="absolute top-0 inset-x-3 h-3 rounded-t-sm bg-[#27272a] border border-[#27272a]" />
                {/* Lingual */}
                <div className="absolute bottom-0 inset-x-3 h-3 rounded-b-sm bg-[#4ead7a]/30 border border-[#4ead7a]/50" />
                {/* Occlusal (center) */}
                <div className="absolute inset-3 rounded-sm bg-[#d4a94e]/30 border border-[#d4a94e]/50" />
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                {["Медиальная", "Дистальная", "Вестибулярная", "Лингвальная", "Окклюзионная"].map((s) => (
                  <div key={s} className="text-[#52525b]">{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <p className="text-[#52525b] text-[10px] uppercase tracking-wider mb-1.5">Заметки</p>
            <div className="text-[#a1a1aa] text-xs bg-[#09090b] border border-[#27272a] rounded-lg px-3 py-2">
              {selected === 16
                ? "Коронка металлокерамическая, установлена 15.03.2024. Состояние хорошее."
                : selected === 26
                ? "Кариес дистальной поверхности. Требует лечения. Записан на 20.04.2025."
                : "Нет заметок"}
            </div>
          </div>
        </div>
      )}

      {/* History */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">История изменений</p>
        </div>
        <div className="divide-y divide-[#27272a]">
          {[
            { date: "15.03.2024", tooth: "16", action: "Установлена коронка", doctor: "Д-р Сейтов" },
            { date: "10.01.2024", tooth: "11, 21", action: "Лечение кариеса", doctor: "Д-р Сейтов" },
            { date: "05.12.2023", tooth: "46", action: "Пломба на дистальной", doctor: "Д-р Асанова" },
          ].map((h, i) => (
            <div key={i} className="px-4 py-2.5 flex items-center gap-3">
              <span className="text-[#52525b] text-[10px] w-20 flex-shrink-0">{h.date}</span>
              <div
                className="w-6 h-6 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-[9px] font-bold flex-shrink-0"
              >
                {h.tooth.split(",")[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#e4e4e7] text-xs truncate">{h.action}</p>
                <p className="text-[#52525b] text-[10px]">{h.doctor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
