import { StarIcon } from "../Icons";

export default function ClinicPageScreen() {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin bg-[#09090b]">
      {/* Clinic header */}
      <div className="bg-gradient-to-b from-[#68a5e8]/10 to-transparent p-5 border-b border-[#27272a]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#68a5e8]/20 flex items-center justify-center text-2xl flex-shrink-0">
            🦷
          </div>
          <div className="flex-1">
            <h3 className="text-[#e4e4e7] font-semibold">Стоматология «Улыбка»</h3>
            <p className="text-[#52525b] text-xs mt-0.5">📍 Бишкек, ул. Киевская 77</p>
            <div className="flex items-center gap-1 mt-1.5">
              {[1,2,3,4,5].map((i) => (
                <StarIcon key={i} className="w-3 h-3 text-[#d4a94e]" />
              ))}
              <span className="text-[#a1a1aa] text-xs ml-1">4.9 (48 отзывов)</span>
            </div>
          </div>
          <button className="bg-[#68a5e8] text-[#09090b] text-xs font-semibold px-4 py-2 rounded-xl">
            Записаться
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Doctors */}
        <div>
          <p className="text-[#a1a1aa] text-xs font-medium mb-3 uppercase tracking-wider">Наши врачи</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Сейтов А.К.", spec: "Терапевт", exp: "8 лет", rating: 4.9, color: "#68a5e8" },
              { name: "Асанова М.Д.", spec: "Ортопед", exp: "5 лет", rating: 4.8, color: "#4ead7a" },
              { name: "Бекова Р.О.", spec: "Хирург", exp: "11 лет", rating: 5.0, color: "#d4a94e" },
            ].map((doc, i) => (
              <div key={i} className="bg-[#18181b] border border-[#27272a] rounded-xl p-3 text-center">
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: `${doc.color}20`, color: doc.color }}
                >
                  {doc.name.split(" ")[0][0]}{doc.name.split(" ")[1][0]}
                </div>
                <p className="text-[#e4e4e7] text-[10px] font-medium">{doc.name}</p>
                <p className="text-[#52525b] text-[9px]">{doc.spec}</p>
                <p className="text-[#52525b] text-[9px]">{doc.exp}</p>
                <div className="flex items-center justify-center gap-0.5 mt-1.5">
                  <StarIcon className="w-2.5 h-2.5 text-[#d4a94e]" />
                  <span className="text-[#a1a1aa] text-[9px]">{doc.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services preview */}
        <div>
          <p className="text-[#a1a1aa] text-xs font-medium mb-3 uppercase tracking-wider">Услуги</p>
          <div className="space-y-2">
            {[
              { name: "Лечение кариеса", price: "от 2 500 с", color: "#68a5e8" },
              { name: "Профессиональная чистка", price: "от 3 000 с", color: "#4ead7a" },
              { name: "Имплантация", price: "от 35 000 с", color: "#d4a94e" },
              { name: "Протезирование", price: "от 8 500 с", color: "#5eadb0" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-[#e4e4e7] text-xs">{s.name}</span>
                </div>
                <span className="text-[#a1a1aa] text-xs">{s.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <p className="text-[#a1a1aa] text-xs font-medium mb-3 uppercase tracking-wider">Отзывы</p>
          <div className="space-y-3">
            {[
              { name: "Айгуль И.", text: "Отличная клиника! Доктор Сейтов очень профессиональный. Всё без боли.", date: "12.04.2025" },
              { name: "Бакыт М.", text: "Удобная запись онлайн, не нужно звонить. Буду рекомендовать.", date: "08.04.2025" },
            ].map((r, i) => (
              <div key={i} className="bg-[#18181b] border border-[#27272a] rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#68a5e8]/20 text-[#68a5e8] flex items-center justify-center text-[9px] font-bold">
                      {r.name[0]}
                    </div>
                    <span className="text-[#e4e4e7] text-xs font-medium">{r.name}</span>
                  </div>
                  <span className="text-[#52525b] text-[9px]">{r.date}</span>
                </div>
                <p className="text-[#a1a1aa] text-xs leading-relaxed">{r.text}</p>
                <div className="flex gap-0.5 mt-2">
                  {[1,2,3,4,5].map((s) => <StarIcon key={s} className="w-2.5 h-2.5 text-[#d4a94e]" />)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DentaCRM badge */}
        <div className="text-center py-2">
          <span className="text-[#52525b] text-[10px]">Работает на DentaCRM</span>
        </div>
      </div>
    </div>
  );
}
