"use client";
import { useState } from "react";
import { UserIcon } from "./Icons";

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

const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

const chatSuggestions = [
  "Сколько стоит чистка?",
  "Есть ли анестезия?",
  "Как долго длится приём?",
];

const botReply = (msg: string): string => {
  const l = msg.toLowerCase();
  if (l.includes("чистка") || l.includes("стоимость") || l.includes("сколько"))
    return "Профессиональная чистка — 3 000 сом. Лечение кариеса от 2 500 сом. Точную стоимость озвучит врач после осмотра.";
  if (l.includes("анестезия") || l.includes("больно") || l.includes("боль"))
    return "Все болезненные процедуры проводятся с анестезией. У нас используются современные безболезненные препараты.";
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
  const [selectedDate] = useState("Пн, 14 апреля");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Здравствуйте! Помогу записаться или отвечу на вопросы о клинике." },
  ]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    const text = chatInput.trim();
    setChatInput("");
    setMessages((p) => [...p, { from: "user", text }]);
    setTimeout(() => setMessages((p) => [...p, { from: "bot", text: botReply(text) }]), 500);
  };

  const handleSuggestion = (s: string) => {
    setMessages((p) => [...p, { from: "user", text: s }]);
    setTimeout(() => setMessages((p) => [...p, { from: "bot", text: botReply(s) }]), 500);
  };

  const StepHeader = ({
    num,
    title,
    done,
    summary,
    onClick,
  }: {
    num: 1 | 2 | 3;
    title: string;
    done: boolean;
    summary?: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${
        openStep === num ? "bg-[#111113]" : "bg-[#0f0f11] hover:bg-[#111113]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
            done ? "bg-[#4ead7a] text-white" : openStep === num ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"
          }`}
        >
          {done ? (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : num}
        </div>
        <div className="text-left">
          <p className={`text-sm font-medium ${openStep === num ? "text-[#e4e4e7]" : "text-[#a1a1aa]"}`}>{title}</p>
          {done && summary && <p className="text-[#52525b] text-xs mt-0.5">{summary}</p>}
        </div>
      </div>
      <svg
        className={`w-4 h-4 text-[#52525b] transition-transform ${openStep === num ? "rotate-180" : ""}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );

  return (
    <section className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Сторона пациента
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-4">
            А так вашу клинику видят пациенты
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            Запись онлайн за 30 секунд, AI-бот отвечает на вопросы — без вашего участия
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Booking card */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-xl shadow-black/40">
              {/* Clinic header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#27272a] bg-[#0f0f11]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#68a5e8]/20 flex items-center justify-center text-lg flex-shrink-0">
                    🦷
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
                /* Confirmation screen */
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#4ead7a]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#4ead7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[#e4e4e7] font-semibold text-lg mb-2">Запись подтверждена!</p>
                  <p className="text-[#a1a1aa] text-sm mb-4">
                    {doctors[selectedDoctor!].name}<br />
                    {selectedService} · {selectedDate} в {selectedTime}
                  </p>
                  <p className="text-[#52525b] text-xs mb-6">Напоминание придёт в WhatsApp за день до приёма</p>
                  <button
                    onClick={() => { setConfirmed(false); setOpenStep(1); setSelectedDoctor(null); setSelectedService(null); setSelectedTime(null); }}
                    className="text-[#68a5e8] text-sm hover:underline"
                  >
                    Записаться снова
                  </button>
                  <p className="text-[#52525b] text-[10px] mt-6">Работает на DentaCRM</p>
                </div>
              ) : (
                <>
                  {/* Step 1: Doctor */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader
                      num={1}
                      title="Выбрать специалиста"
                      done={selectedDoctor !== null && openStep !== 1}
                      summary={selectedDoctor !== null ? doctors[selectedDoctor].name : undefined}
                      onClick={() => setOpenStep(1)}
                    />
                    {openStep === 1 && (
                      <div className="px-5 pb-4 space-y-2">
                        {doctors.map((doc, i) => (
                          <button
                            key={i}
                            onClick={() => { setSelectedDoctor(i); setOpenStep(2); }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors text-left ${
                              selectedDoctor === i
                                ? "border-[#68a5e8] bg-[#68a5e8]/10"
                                : "border-[#27272a] hover:border-[#3a3a3f]"
                            }`}
                          >
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                              style={{ backgroundColor: `${doc.color}20`, color: doc.color }}
                            >
                              {doc.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                            </div>
                            <div className="flex-1">
                              <p className="text-[#e4e4e7] text-sm font-medium">{doc.name}</p>
                              <p className="text-[#52525b] text-xs">{doc.spec} · {doc.exp}</p>
                            </div>
                            {selectedDoctor === i && (
                              <svg className="w-4 h-4 text-[#68a5e8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Step 2: Service */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader
                      num={2}
                      title="Выбрать услугу"
                      done={selectedService !== null && openStep !== 2}
                      summary={selectedService ?? undefined}
                      onClick={() => selectedDoctor !== null && setOpenStep(2)}
                    />
                    {openStep === 2 && (
                      <div className="px-5 pb-4 space-y-2">
                        {services.map((s) => (
                          <button
                            key={s}
                            onClick={() => { setSelectedService(s); setOpenStep(3); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors text-left ${
                              selectedService === s
                                ? "border-[#68a5e8] bg-[#68a5e8]/10 text-[#68a5e8]"
                                : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                            }`}
                          >
                            <span className="text-sm">{s}</span>
                            {selectedService === s && (
                              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Step 3: Date & Time */}
                  <div className="border-b border-[#27272a]">
                    <StepHeader
                      num={3}
                      title="Выбрать дату и время"
                      done={selectedTime !== null && openStep !== 3}
                      summary={selectedTime ? `${selectedDate}, ${selectedTime}` : undefined}
                      onClick={() => selectedService !== null && setOpenStep(3)}
                    />
                    {openStep === 3 && (
                      <div className="px-5 pb-5">
                        {/* Date pill */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                          {["Пн, 14 апр", "Вт, 15 апр", "Ср, 16 апр", "Чт, 17 апр"].map((d, i) => (
                            <div
                              key={i}
                              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs border transition-colors cursor-pointer ${
                                i === 0 ? "border-[#68a5e8] bg-[#68a5e8]/10 text-[#68a5e8]" : "border-[#27272a] text-[#52525b]"
                              }`}
                            >
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Time grid */}
                        <div className="grid grid-cols-4 gap-2 mb-5">
                          {times.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`py-2 rounded-xl border text-xs transition-colors ${
                                selectedTime === t
                                  ? "border-[#68a5e8] bg-[#68a5e8]/15 text-[#68a5e8] font-medium"
                                  : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>

                        {/* Confirm button */}
                        {selectedTime && (
                          <button
                            onClick={() => setConfirmed(true)}
                            className="w-full bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b] font-semibold py-3.5 rounded-xl transition-colors text-sm"
                          >
                            Подтвердить запись
                          </button>
                        )}
                        {!selectedTime && (
                          <button
                            disabled
                            className="w-full bg-[#68a5e8]/20 text-[#68a5e8]/50 font-semibold py-3.5 rounded-xl text-sm cursor-not-allowed"
                          >
                            Выберите время
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Badge */}
                  <div className="px-5 py-3 text-center">
                    <span className="text-[#52525b] text-[11px]">Работает на DentaCRM</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* AI Chat */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-[#111113] border border-[#27272a] rounded-2xl overflow-hidden shadow-xl shadow-black/40 flex flex-col" style={{ height: 480 }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#27272a] bg-[#0f0f11]">
                <div className="w-8 h-8 rounded-full bg-[#68a5e8]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#68a5e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#e4e4e7] text-sm font-medium">AI-ассистент клиники</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ead7a]" />
                    <span className="text-[#52525b] text-xs">Онлайн · отвечает мгновенно</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.from === "bot" && (
                      <div className="w-6 h-6 rounded-full bg-[#68a5e8]/20 flex items-center justify-center mr-2 flex-shrink-0 self-end">
                        <svg className="w-3 h-3 text-[#68a5e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-[#68a5e8] text-[#09090b] rounded-br-sm"
                          : "bg-[#18181b] border border-[#27272a] text-[#a1a1aa] rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              {messages.length <= 2 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {chatSuggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestion(s)}
                      className="text-xs bg-[#18181b] border border-[#27272a] hover:border-[#68a5e8]/40 text-[#a1a1aa] hover:text-[#68a5e8] px-3 py-1.5 rounded-full transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-[#27272a] flex gap-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Задать вопрос о клинике..."
                  className="flex-1 bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-2.5 text-[#e4e4e7] text-sm placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-xl bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b] flex items-center justify-center flex-shrink-0 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
