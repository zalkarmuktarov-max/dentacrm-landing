"use client";
import { useState } from "react";
import { UserIcon, ToothIcon } from "./Icons";

const doctors = [
  { name: "Сейтов Азамат Калысбекович", spec: "Стоматолог-терапевт", exp: "8 лет опыта", color: "#68a5e8" },
  { name: "Асанова Мира Джакыповна", spec: "Ортопед", exp: "5 лет опыта", color: "#4ead7a" },
  { name: "Бекова Рита Омуровна", spec: "Хирург", exp: "11 лет опыта", color: "#d4a94e" },
];

const services = [
  "Лечение кариеса",
  "Профессиональная чистка",
  "Консультация и осмотр",
  "Удаление зуба",
  "Протезирование",
];

const days = [
  { label: "Вт", date: "15", full: "Вт, 15 апреля" },
  { label: "Ср", date: "16", full: "Ср, 16 апреля" },
  { label: "Чт", date: "17", full: "Чт, 17 апреля" },
  { label: "Пт", date: "18", full: "Пт, 18 апреля" },
  { label: "Сб", date: "19", full: "Сб, 19 апреля" },
];

const times = ["09:00", "09:30", "10:00", "10:30", "11:30", "12:00", "14:00", "15:00", "15:30", "16:00", "17:00"];

const chatSuggestions = ["Сколько стоит чистка?", "Есть ли анестезия?", "Как долго длится приём?"];

const botReply = (msg: string): string => {
  const l = msg.toLowerCase();
  if (l.includes("чистка") || l.includes("стоимость") || l.includes("сколько"))
    return "Профессиональная чистка — 3 000 сом. Лечение кариеса от 2 500 сом. Точную стоимость озвучит врач после осмотра.";
  if (l.includes("анестезия") || l.includes("больно") || l.includes("боль"))
    return "Все болезненные процедуры проводятся с анестезией. Используем современные безболезненные препараты.";
  if (l.includes("долго") || l.includes("сколько времени") || l.includes("приём"))
    return "Консультация — 20–30 мин. Лечение кариеса — 40–60 мин. Профессиональная чистка — около часа.";
  if (l.includes("запис"))
    return "Выберите специалиста и удобное время в форме выше — запись займёт меньше минуты!";
  return "Уточните вопрос — я помогу с информацией о клинике. Или позвоните: +996 312 000 000";
};

export default function PatientBookingSection() {
  const [openStep, setOpenStep] = useState<1 | 2 | 3>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Здравствуйте! Помогу записаться или отвечу на вопросы о клинике." },
  ]);
  const [suggestionsShown, setSuggestionsShown] = useState(true);

  const handleSend = (text?: string) => {
    const msg = (text ?? chatInput).trim();
    if (!msg) return;
    setChatInput("");
    setSuggestionsShown(false);
    setMessages((p) => [...p, { from: "user", text: msg }]);
    setTimeout(() => setMessages((p) => [...p, { from: "bot", text: botReply(msg) }]), 500);
  };

  const CheckMark = () => (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const ChevronDown = ({ open }: { open: boolean }) => (
    <svg className={`w-4 h-4 text-[#52525b] transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const StepHeader = ({
    num, title, done, summary, canOpen, onClick,
  }: { num: 1 | 2 | 3; title: string; done: boolean; summary?: string; canOpen: boolean; onClick: () => void }) => (
    <button
      onClick={() => canOpen && onClick()}
      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${
        openStep === num ? "bg-[#111113]" : canOpen ? "bg-[#0f0f11] hover:bg-[#111113]" : "bg-[#0f0f11] cursor-not-allowed"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
          done ? "bg-[#4ead7a] text-white" : openStep === num ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"
        }`}>
          {done ? <CheckMark /> : num}
        </div>
        <div className="text-left">
          <p className={`text-sm font-medium ${openStep === num ? "text-[#e4e4e7]" : done ? "text-[#a1a1aa]" : "text-[#52525b]"}`}>{title}</p>
          {done && summary && <p className="text-[#52525b] text-xs mt-0.5">{summary}</p>}
        </div>
      </div>
      {canOpen && <ChevronDown open={openStep === num} />}
    </button>
  );

  return (
    <section className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">Сторона пациента</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-4">
            А так вашу клинику видят пациенты
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            Запись онлайн за 30 секунд, AI-бот отвечает на вопросы — без вашего участия
          </p>
        </div>

        {/* Centered single-column card */}
        <div className="flex justify-center">
          <div className="w-full max-w-[420px]">
            <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-xl shadow-black/40">

              {/* Clinic header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#0f0f11] border-b border-[#27272a]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#68a5e8]/20 flex items-center justify-center flex-shrink-0 text-[#68a5e8]">
                    <ToothIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#e4e4e7] text-sm font-semibold">Стоматология «Улыбка»</p>
                    <p className="text-[#52525b] text-xs">📍 Бишкек, ул. Киевская 77</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#27272a] flex items-center justify-center text-[#a1a1aa]">
                  <UserIcon className="w-4 h-4" />
                </div>
              </div>

              {confirmed ? (
                /* Confirmation */
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#4ead7a]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#4ead7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[#e4e4e7] font-semibold text-lg mb-2">Запись подтверждена!</p>
                  <p className="text-[#a1a1aa] text-sm mb-4">
                    {doctors[selectedDoctor!].name}<br />
                    {selectedService} · {days[selectedDay!].full} в {selectedTime}
                  </p>
                  <p className="text-[#52525b] text-xs mb-5">Напоминание придёт за день до приёма</p>
                  <button
                    onClick={() => { setConfirmed(false); setOpenStep(1); setSelectedDoctor(null); setSelectedService(null); setSelectedDay(null); setSelectedTime(null); }}
                    className="text-[#68a5e8] text-sm hover:underline"
                  >
                    Записаться снова
                  </button>
                </div>
              ) : (
                <>
                  {/* Step 1 */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader num={1} title="Выбрать специалиста" done={selectedDoctor !== null && openStep !== 1}
                      summary={selectedDoctor !== null ? doctors[selectedDoctor].name : undefined}
                      canOpen={true} onClick={() => setOpenStep(1)} />
                    {openStep === 1 && (
                      <div className="px-5 pb-4 space-y-2">
                        {doctors.map((doc, i) => (
                          <button key={i} onClick={() => { setSelectedDoctor(i); setOpenStep(2); }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors text-left ${
                              selectedDoctor === i ? "border-[#68a5e8] bg-[#68a5e8]/10" : "border-[#27272a] hover:border-[#3a3a3f]"
                            }`}>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                              style={{ backgroundColor: `${doc.color}20`, color: doc.color }}>
                              {doc.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                            </div>
                            <div className="flex-1">
                              <p className="text-[#e4e4e7] text-sm font-medium">{doc.name}</p>
                              <p className="text-[#52525b] text-xs">{doc.spec} · {doc.exp}</p>
                            </div>
                            {selectedDoctor === i && <span className="text-[#68a5e8]"><CheckMark /></span>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Step 2 */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader num={2} title="Выбрать услугу" done={selectedService !== null && openStep !== 2}
                      summary={selectedService ?? undefined}
                      canOpen={selectedDoctor !== null} onClick={() => setOpenStep(2)} />
                    {openStep === 2 && (
                      <div className="px-5 pb-4 space-y-2">
                        {services.map((s) => (
                          <button key={s} onClick={() => { setSelectedService(s); setOpenStep(3); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors text-left ${
                              selectedService === s ? "border-[#68a5e8] bg-[#68a5e8]/10 text-[#68a5e8]" : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                            }`}>
                            <span className="text-sm">{s}</span>
                            {selectedService === s && <CheckMark />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Step 3 */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader num={3} title="Выбрать дату и время"
                      done={selectedTime !== null && openStep !== 3}
                      summary={selectedTime && selectedDay !== null ? `${days[selectedDay].full}, ${selectedTime}` : undefined}
                      canOpen={selectedService !== null} onClick={() => setOpenStep(3)} />
                    {openStep === 3 && (
                      <div className="px-5 pb-5">
                        {/* Day strip */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                          {days.map((d, i) => (
                            <button key={i} onClick={() => { setSelectedDay(i); setSelectedTime(null); }}
                              className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl border transition-colors min-w-[48px] ${
                                selectedDay === i ? "border-[#68a5e8] bg-[#68a5e8]/10" : "border-[#27272a] hover:border-[#3a3a3f]"
                              }`}>
                              <span className={`text-[10px] ${selectedDay === i ? "text-[#68a5e8]" : "text-[#52525b]"}`}>{d.label}</span>
                              <span className={`text-base font-bold leading-tight ${selectedDay === i ? "text-[#68a5e8]" : "text-[#a1a1aa]"}`}>{d.date}</span>
                            </button>
                          ))}
                        </div>

                        {/* Time slots — shown after day selected */}
                        {selectedDay !== null && (
                          <>
                            <div className="grid grid-cols-4 gap-2 mb-5">
                              {times.map((t) => (
                                <button key={t} onClick={() => setSelectedTime(t)}
                                  className={`py-2 rounded-xl border text-xs transition-colors ${
                                    selectedTime === t ? "border-[#68a5e8] bg-[#68a5e8]/15 text-[#68a5e8] font-medium" : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                                  }`}>
                                  {t}
                                </button>
                              ))}
                            </div>
                            <button
                              disabled={!selectedTime}
                              onClick={() => selectedTime && setConfirmed(true)}
                              className={`w-full font-semibold py-3.5 rounded-xl transition-colors text-sm ${
                                selectedTime
                                  ? "bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b]"
                                  : "bg-[#68a5e8]/20 text-[#68a5e8]/50 cursor-not-allowed"
                              }`}>
                              {selectedTime ? "Подтвердить запись" : "Выберите время"}
                            </button>
                          </>
                        )}
                        {selectedDay === null && (
                          <p className="text-[#52525b] text-xs text-center pb-2">Выберите удобный день</p>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Divider */}
              <div className="px-5 py-3 border-b border-[#27272a] flex items-center gap-3">
                <div className="flex-1 h-px bg-[#27272a]" />
                <span className="text-[#52525b] text-xs flex-shrink-0">AI-ассистент клиники</span>
                <div className="flex-1 h-px bg-[#27272a]" />
              </div>

              {/* AI Chat */}
              <div className="flex flex-col" style={{ minHeight: 220 }}>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-3 space-y-2.5" style={{ maxHeight: 200 }}>
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.from === "bot" && (
                        <div className="w-6 h-6 rounded-full bg-[#68a5e8]/20 flex items-center justify-center mr-2 flex-shrink-0 self-end">
                          <svg className="w-3 h-3 text-[#68a5e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2" />
                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
                          </svg>
                        </div>
                      )}
                      <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-[#68a5e8] text-[#09090b] rounded-br-sm"
                          : "bg-[#18181b] border border-[#27272a] text-[#a1a1aa] rounded-bl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suggestion chips */}
                {suggestionsShown && (
                  <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                    {chatSuggestions.map((s) => (
                      <button key={s} onClick={() => handleSend(s)}
                        className="text-xs bg-[#18181b] border border-[#27272a] hover:border-[#68a5e8]/40 text-[#a1a1aa] hover:text-[#68a5e8] px-3 py-1.5 rounded-full transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="px-4 pb-4 pt-2 flex gap-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Задать вопрос о клинике..."
                    className="flex-1 bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-2.5 text-[#e4e4e7] text-sm placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors"
                  />
                  <button onClick={() => handleSend()}
                    className="w-10 h-10 rounded-xl bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b] flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Badge */}
              <div className="border-t border-[#27272a] px-5 py-3 text-center">
                <span className="text-[#52525b] text-[11px]">Работает на DentaCRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
