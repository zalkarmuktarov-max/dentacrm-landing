const docs = [
  { name: "Протокол лечения пульпита", category: "Протоколы", status: "ready", size: "248 KB" },
  { name: "Стандарты стерилизации инструментов", category: "Протоколы", status: "ready", size: "185 KB" },
  { name: "FAQ: Уход после имплантации", category: "FAQ для пациентов", status: "ready", size: "92 KB" },
  { name: "FAQ: Что такое зубная формула", category: "FAQ для пациентов", status: "processing", size: "—" },
  { name: "Прайс-лист 2025", category: "Документы", status: "ready", size: "56 KB" },
  { name: "Инструкция по отбеливанию", category: "FAQ для пациентов", status: "ready", size: "78 KB" },
];

export default function KnowledgeScreen() {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-4 space-y-4">
      {/* Header */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4a94e]/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#d4a94e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <div>
            <p className="text-[#e4e4e7] text-sm font-medium">База знаний для AI-ассистента</p>
            <p className="text-[#52525b] text-xs mt-1">
              Загрузите документы — AI-бот будет отвечать пациентам на основе ваших данных
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="flex items-center gap-2 bg-[#68a5e8]/10 hover:bg-[#68a5e8]/20 border border-[#68a5e8]/30 text-[#68a5e8] text-xs px-4 py-2 rounded-lg transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Загрузить документ
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Документов", value: "6", color: "#68a5e8" },
          { label: "Обработано", value: "5", color: "#4ead7a" },
          { label: "Обрабатывается", value: "1", color: "#d4a94e" },
        ].map((s, i) => (
          <div key={i} className="bg-[#18181b] rounded-xl p-3 border border-[#27272a]">
            <p className="text-[#52525b] text-[10px]">{s.label}</p>
            <p className="font-bold text-lg mt-0.5" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Docs list */}
      <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#27272a]">
          <p className="text-[#e4e4e7] text-sm font-medium">Документы</p>
        </div>
        <div className="divide-y divide-[#27272a]">
          {docs.map((doc, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3 hover:bg-[#1f1f22] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#27272a] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#a1a1aa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#e4e4e7] text-xs font-medium truncate">{doc.name}</p>
                <p className="text-[#52525b] text-[10px] mt-0.5">{doc.category} · {doc.size}</p>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ${
                  doc.status === "ready"
                    ? "bg-[#4ead7a]/10 text-[#4ead7a]"
                    : "bg-[#d4a94e]/10 text-[#d4a94e]"
                }`}
              >
                {doc.status === "ready" ? "Готово" : "Обработка..."}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
