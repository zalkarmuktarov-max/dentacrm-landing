export default function BookingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4ead7a]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-4">
              Для пациентов
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-5 text-balance">
              Ваши пациенты записываются сами — через телефон, в любое время
            </h2>
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-6">
              А AI-бот ответит на вопросы за вас: расскажет о ценах, врачах и процедурах — без вашего участия.
            </p>
            <div className="space-y-3">
              {[
                "Онлайн-запись без звонков — 30 секунд",
                "AI-чат отвечает на вопросы 24/7",
                "Личный кабинет пациента с историей",
                "Напоминания о визите в WhatsApp",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ead7a]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#4ead7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#a1a1aa] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 bg-[#111113] border-2 border-[#27272a] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/60">
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-20 h-5 bg-[#0d0d0f] rounded-full" />
                </div>

                {/* Screen content */}
                <div className="mx-3 mb-3 bg-[#09090b] rounded-2xl overflow-hidden border border-[#27272a]">
                  {/* Clinic header */}
                  <div className="bg-gradient-to-b from-[#68a5e8]/10 to-[#09090b] px-4 py-4 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#68a5e8]/20 mx-auto mb-2 flex items-center justify-center text-xl">
                      🦷
                    </div>
                    <p className="text-[#e4e4e7] text-xs font-semibold">Стоматология «Улыбка»</p>
                    <p className="text-[#52525b] text-[9px] mt-0.5">Бишкек · Открыто до 18:00</p>
                  </div>

                  {/* Booking steps */}
                  <div className="p-3 space-y-2">
                    <p className="text-[#68a5e8] text-[10px] font-medium">Шаг 1: Выберите услугу</p>
                    {["Лечение кариеса", "Профессиональная чистка", "Консультация"].map((s, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl border text-[10px] ${
                          i === 0 ? "border-[#68a5e8] bg-[#68a5e8]/10 text-[#68a5e8]" : "border-[#27272a] text-[#a1a1aa]"
                        }`}
                      >
                        <span>{s}</span>
                        {i === 0 && (
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    ))}

                    <div className="pt-1">
                      <p className="text-[#68a5e8] text-[10px] font-medium mb-2">Шаг 2: Выберите время</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"].map((t, i) => (
                          <div
                            key={i}
                            className={`text-center py-1.5 rounded-lg text-[9px] border ${
                              i === 1 ? "border-[#68a5e8] bg-[#68a5e8]/15 text-[#68a5e8]" : "border-[#27272a] text-[#52525b]"
                            }`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-3 pb-3">
                    <div className="bg-[#68a5e8] rounded-xl py-2.5 text-center text-[#09090b] text-[10px] font-bold">
                      Записаться
                    </div>
                    <p className="text-center text-[#52525b] text-[8px] mt-2">Работает на DentaCRM</p>
                  </div>
                </div>

                {/* AI Chat bubble */}
                <div className="mx-3 mb-3">
                  <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-3 relative">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#68a5e8]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#68a5e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#e4e4e7] text-[10px] font-medium">AI-ассистент</p>
                        <p className="text-[#a1a1aa] text-[9px] mt-0.5 leading-relaxed">Привет! Лечение кариеса займёт ~1 час. Д-р Сейтов свободен в 10:30. Записать?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-8 bg-[#68a5e8]/5 rounded-full blur-2xl pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
