"use client";
import { useState } from "react";
import { SearchIcon } from "../Icons";

const patients = [
  { id: 1, name: "Иванова Айгуль Кыргызбаевна", phone: "+996 700 123 456", lastVisit: "12.04.2025", nextVisit: "26.04.2025", doctor: "Д-р Сейтов", status: "active", visits: 8 },
  { id: 2, name: "Мамытов Бакыт Джакыпович", phone: "+996 555 234 567", lastVisit: "10.04.2025", nextVisit: "—", doctor: "Д-р Асанова", status: "active", visits: 3 },
  { id: 3, name: "Джакыпова Нурия Адилеткан", phone: "+996 708 345 678", lastVisit: "05.04.2025", nextVisit: "14.04.2025", doctor: "Д-р Сейтов", status: "active", visits: 12 },
  { id: 4, name: "Токтосунов Руслан Мирбекович", phone: "+996 777 456 789", lastVisit: "01.03.2025", nextVisit: "—", doctor: "Д-р Бекова", status: "inactive", visits: 1 },
  { id: 5, name: "Омурова Гульзат Бакытбековна", phone: "+996 550 567 890", lastVisit: "28.03.2025", nextVisit: "14.04.2025", doctor: "Д-р Асанова", status: "active", visits: 5 },
];

export default function PatientsScreen() {
  const [selected, setSelected] = useState<number | null>(1);
  const [search, setSearch] = useState("");

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const patient = patients.find((p) => p.id === selected);

  return (
    <div className="h-full flex overflow-hidden">
      {/* List */}
      <div className="w-72 flex-shrink-0 border-r border-[#27272a] flex flex-col">
        {/* Search */}
        <div className="p-3 border-b border-[#27272a]">
          <div className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2">
            <SearchIcon className="w-3.5 h-3.5 text-[#52525b]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск пациента..."
              className="flex-1 bg-transparent text-[#e4e4e7] text-xs placeholder-[#52525b] focus:outline-none"
            />
          </div>
        </div>

        {/* Patient list */}
        <div className="flex-1 overflow-y-auto scrollbar-thin divide-y divide-[#27272a]">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`w-full text-left px-4 py-3 hover:bg-[#18181b] transition-colors ${
                selected === p.id ? "bg-[#18181b] border-r-2 border-[#68a5e8]" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#e4e4e7] text-xs font-medium truncate">{p.name}</p>
                  <p className="text-[#52525b] text-[10px]">{p.phone}</p>
                </div>
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.status === "active" ? "#4ead7a" : "#52525b" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Patient card */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {patient ? (
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-xl font-bold flex-shrink-0">
                {patient.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="flex-1">
                <h3 className="text-[#e4e4e7] font-semibold">{patient.name}</h3>
                <p className="text-[#52525b] text-sm">{patient.phone}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${patient.status === "active" ? "bg-[#4ead7a]/10 text-[#4ead7a]" : "bg-[#52525b]/10 text-[#52525b]"}`}>
                    {patient.status === "active" ? "Активный" : "Неактивный"}
                  </span>
                  <span className="text-[#52525b] text-xs">{patient.visits} визитов</span>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Последний визит", value: patient.lastVisit, color: "#a1a1aa" },
                { label: "Следующий визит", value: patient.nextVisit, color: "#68a5e8" },
                { label: "Лечащий врач", value: patient.doctor, color: "#4ead7a" },
                { label: "Кол-во визитов", value: String(patient.visits), color: "#d4a94e" },
              ].map((info, i) => (
                <div key={i} className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
                  <p className="text-[#52525b] text-[10px] mb-1">{info.label}</p>
                  <p className="font-medium text-sm" style={{ color: info.color }}>{info.value}</p>
                </div>
              ))}
            </div>

            {/* Visit history */}
            <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#27272a]">
                <p className="text-[#e4e4e7] text-sm font-medium">История визитов</p>
              </div>
              <div className="divide-y divide-[#27272a]">
                {[
                  { date: "12.04.2025", procedure: "Лечение кариеса (зуб 16)", doctor: "Д-р Сейтов", amount: "4 500 с" },
                  { date: "01.03.2025", procedure: "Профессиональная чистка", doctor: "Д-р Сейтов", amount: "3 000 с" },
                  { date: "15.01.2025", procedure: "Рентген + консультация", doctor: "Д-р Сейтов", amount: "1 200 с" },
                ].map((visit, i) => (
                  <div key={i} className="px-4 py-3 flex items-center gap-3">
                    <div className="w-1.5 h-8 rounded-full bg-[#68a5e8]/40 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[#e4e4e7] text-xs truncate">{visit.procedure}</p>
                      <p className="text-[#52525b] text-[10px]">{visit.date} · {visit.doctor}</p>
                    </div>
                    <span className="text-[#4ead7a] text-xs font-medium">{visit.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-[#52525b] text-sm">Выберите пациента</p>
          </div>
        )}
      </div>
    </div>
  );
}
