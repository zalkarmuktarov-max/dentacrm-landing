"use client";
import { useState } from "react";
import { UserIcon, ToothIcon } from "./Icons";

const doctors = [
  { name: "Любой свободный врач", spec: "Первый доступный специалист", exp: "", color: "#52525b", any: true },
  { name: "Сейтов Азамат Калысбекович", spec: "Стоматолог-терапевт", exp: "8 лет опыта", color: "#68a5e8" },
  { name: "Асанова Мира Джакыповна", spec: "Стоматолог-ортопед", exp: "5 лет опыта", color: "#4ead7a" },
  { name: "Бекова Рита Омуровна", spec: "Стоматолог-хирург", exp: "11 лет опыта", color: "#d4a94e" },
];

const services = [
  { name: "Лечение кариеса", price: "2 500 с", duration: "45 мин" },
  { name: "Профессиональная чистка", price: "3 000 с", duration: "45 мин" },
  { name: "Консультация и осмотр", price: "500 с", duration: "30 мин" },
  { name: "Удаление зуба", price: "2 000 с", duration: "30 мин" },
  { name: "Отбеливание", price: "8 000 с", duration: "60 мин" },
  { name: "Установка коронки", price: "12 000 с", duration: "60 мин" },
];

const days = [
  { label: "Вт", date: "15", full: "Вт, 15 апреля" },
  { label: "Ср", date: "16", full: "Ср, 16 апреля" },
  { label: "Чт", date: "17", full: "Чт, 17 апреля" },
  { label: "Пт", date: "18", full: "Пт, 18 апреля" },
  { label: "Сб", date: "19", full: "Сб, 19 апреля" },
];

const times = ["09:00", "09:30", "10:00", "10:30", "11:30", "12:00", "14:00", "15:00", "15:30", "16:00", "17:00"];

const staticChat = [
  { from: "bot", text: "Здравствуйте! Помогу записаться или отвечу на вопросы о клинике." },
  { from: "user", text: "Сколько стоит чистка?" },
  { from: "bot", text: "Профессиональная чистка — 3 000 сом. Лечение кариеса от 2 500 сом. Точную стоимость озвучит врач после осмотра." },
];

const BotIcon = () => (
  <div className="w-6 h-6 rounded-full bg-[#68a5e8]/20 flex items-center justify-center flex-shrink-0 self-end">
    <svg className="w-3 h-3 text-[#68a5e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
    </svg>
  </div>
);

const CheckCircle = () => (
  <div className="w-6 h-6 rounded-full bg-[#4ead7a] flex items-center justify-center flex-shrink-0">
    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={`w-4 h-4 text-[#52525b] transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

type Step = 0 | 1 | 2 | 3 | 4; // 0=initial, 1=doctor open, 2=service open, 3=datetime open, 4=confirm

export default function PatientBookingSection() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const doctorDone = selectedDoctor !== null && step > 1;
  const serviceDone = selectedService !== null && step > 2;
  const timeDone = selectedTime !== null && step > 3;

  const reset = () => {
    setStep(1); setSelectedDoctor(null); setSelectedService(null);
    setSelectedDay(null); setSelectedTime(null); setName(""); setPhone(""); setConfirmed(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">Сторона пациента</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] mb-4">
            А так вашу клинику видят пациенты
          </h2>
        </div>

        {/* Hint */}
        <p className="text-center text-[#a1a1aa] mb-10">
          Попробуйте сами — нажимайте на разделы, выбирайте врача и услуги
        </p>

        {/* Card */}
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
                /* ── Confirmed ── */
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#4ead7a]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#4ead7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[#e4e4e7] font-semibold text-lg mb-2">Запись подтверждена!</p>
                  <div className="text-[#a1a1aa] text-sm space-y-1 mb-4">
                    <p>{doctors[selectedDoctor!].name}</p>
                    <p>{services[selectedService!].name}</p>
                    <p>{days[selectedDay!].full} в {selectedTime}</p>
                  </div>
                  <p className="text-[#52525b] text-xs mb-5">Напоминание придёт за день до приёма</p>
                  <button onClick={reset} className="text-[#68a5e8] text-sm hover:underline">Записаться снова</button>
                </div>
              ) : (
                <>
                  {/* ── Step 1: Doctor ── */}
                  <div className="border-b border-[#27272a]">
                    <button
                      onClick={() => setStep(step === 1 ? 0 : 1)}
                      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${step === 1 ? "bg-[#111113]" : "bg-[#0f0f11] hover:bg-[#111113]"}`}
                    >
                      <div className="flex items-center gap-3">
                        {doctorDone ? <CheckCircle /> : (
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"}`}>1</div>
                        )}
                        <div className="text-left">
                          <p className={`text-sm font-medium ${step === 1 ? "text-[#e4e4e7]" : doctorDone ? "text-[#a1a1aa]" : "text-[#52525b]"}`}>
                            Выбрать специалиста
                          </p>
                          {doctorDone && <p className="text-[#52525b] text-xs mt-0.5 truncate max-w-[240px]">{doctors[selectedDoctor!].name}</p>}
                        </div>
                      </div>
                      <ChevronDown open={step === 1} />
                    </button>

                    {step === 1 && (
                      <div className="px-4 pb-4 space-y-2">
                        {doctors.map((doc, i) => (
                          <button key={i}
                            onClick={() => { setSelectedDoctor(i); setSelectedService(null); setStep(2); }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors text-left ${
                              selectedDoctor === i ? "border-[#68a5e8] bg-[#68a5e8]/10" : "border-[#27272a] hover:border-[#3a3a3f]"
                            }`}>
                            {doc.any ? (
                              <div className="w-9 h-9 rounded-full bg-[#27272a] flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-[#52525b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                                </svg>
                              </div>
                            ) : (
                              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                                style={{ backgroundColor: `${doc.color}20`, color: doc.color }}>
                                {doc.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${doc.any ? "text-[#a1a1aa]" : "text-[#e4e4e7]"}`}>{doc.name}</p>
                              <p className="text-[#52525b] text-xs truncate">{doc.spec}{doc.exp ? ` · ${doc.exp}` : ""}</p>
                            </div>
                            {selectedDoctor === i && (
                              <svg className="w-4 h-4 text-[#68a5e8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* ── Step 2: Service ── */}
                  <div className="border-b border-[#27272a]">
                    <button
                      onClick={() => selectedDoctor !== null && setStep(step === 2 ? 0 : 2)}
                      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${
                        step === 2 ? "bg-[#111113]" : selectedDoctor !== null ? "bg-[#0f0f11] hover:bg-[#111113]" : "bg-[#0f0f11] cursor-not-allowed"
                      }`}>
                      <div className="flex items-center gap-3">
                        {serviceDone ? <CheckCircle /> : (
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"}`}>2</div>
                        )}
                        <div className="text-left">
                          <p className={`text-sm font-medium ${step === 2 ? "text-[#e4e4e7]" : serviceDone ? "text-[#a1a1aa]" : "text-[#52525b]"}`}>
                            Выбрать услугу
                          </p>
                          {serviceDone && <p className="text-[#52525b] text-xs mt-0.5">{services[selectedService!].name}</p>}
                        </div>
                      </div>
                      {selectedDoctor !== null && <ChevronDown open={step === 2} />}
                    </button>

                    {step === 2 && (
                      <div className="px-4 pb-4 space-y-1.5">
                        {services.map((s, i) => (
                          <label key={i}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl border cursor-pointer transition-colors ${
                              selectedService === i ? "border-[#68a5e8] bg-[#68a5e8]/8" : "border-[#27272a] hover:border-[#3a3a3f]"
                            }`}>
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              selectedService === i ? "bg-[#68a5e8] border-[#68a5e8]" : "border-[#3a3a3f]"
                            }`}>
                              {selectedService === i && (
                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              )}
                            </div>
                            <input type="radio" className="sr-only" checked={selectedService === i} onChange={() => setSelectedService(i)} />
                            <span className={`flex-1 text-sm ${selectedService === i ? "text-[#e4e4e7]" : "text-[#a1a1aa]"}`}>{s.name}</span>
                            <div className="text-right flex-shrink-0">
                              <p className={`text-xs font-medium ${selectedService === i ? "text-[#68a5e8]" : "text-[#a1a1aa]"}`}>{s.price}</p>
                              <p className="text-[#52525b] text-[10px]">{s.duration}</p>
                            </div>
                          </label>
                        ))}
                        <button
                          disabled={selectedService === null}
                          onClick={() => selectedService !== null && setStep(3)}
                          className={`w-full mt-2 py-3 rounded-xl text-sm font-semibold transition-colors ${
                            selectedService !== null
                              ? "bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b]"
                              : "bg-[#68a5e8]/20 text-[#68a5e8]/40 cursor-not-allowed"
                          }`}>
                          Далее — выбрать время
                        </button>
                      </div>
                    )}
                  </div>

                  {/* ── Step 3: Date & Time ── */}
                  <div className="border-b border-[#27272a]">
                    <button
                      onClick={() => selectedService !== null && setStep(step === 3 ? 0 : 3)}
                      className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${
                        step === 3 ? "bg-[#111113]" : selectedService !== null ? "bg-[#0f0f11] hover:bg-[#111113]" : "bg-[#0f0f11] cursor-not-allowed"
                      }`}>
                      <div className="flex items-center gap-3">
                        {timeDone ? <CheckCircle /> : (
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"}`}>3</div>
                        )}
                        <div className="text-left">
                          <p className={`text-sm font-medium ${step === 3 ? "text-[#e4e4e7]" : timeDone ? "text-[#a1a1aa]" : "text-[#52525b]"}`}>
                            Выбрать дату и время
                          </p>
                          {timeDone && selectedDay !== null && (
                            <p className="text-[#52525b] text-xs mt-0.5">{days[selectedDay].full}, {selectedTime}</p>
                          )}
                        </div>
                      </div>
                      {selectedService !== null && <ChevronDown open={step === 3} />}
                    </button>

                    {step === 3 && (
                      <div className="px-4 pb-4">
                        {/* Day strip */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                          {days.map((d, i) => (
                            <button key={i}
                              onClick={() => { setSelectedDay(i); setSelectedTime(null); }}
                              className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl border transition-colors min-w-[48px] ${
                                selectedDay === i ? "border-[#68a5e8] bg-[#68a5e8]/10" : "border-[#27272a] hover:border-[#3a3a3f]"
                              }`}>
                              <span className={`text-[10px] ${selectedDay === i ? "text-[#68a5e8]" : "text-[#52525b]"}`}>{d.label}</span>
                              <span className={`text-base font-bold leading-tight ${selectedDay === i ? "text-[#68a5e8]" : "text-[#a1a1aa]"}`}>{d.date}</span>
                            </button>
                          ))}
                        </div>

                        {selectedDay !== null ? (
                          <>
                            <div className="grid grid-cols-4 gap-2 mb-4">
                              {times.map((t) => (
                                <button key={t}
                                  onClick={() => { setSelectedTime(t); setStep(4); }}
                                  className={`py-2 rounded-xl border text-xs transition-colors ${
                                    selectedTime === t ? "border-[#68a5e8] bg-[#68a5e8]/15 text-[#68a5e8] font-medium" : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                                  }`}>
                                  {t}
                                </button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p className="text-[#52525b] text-xs text-center pb-2">Выберите удобный день</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ── Step 4: Confirm form ── */}
                  {step === 4 && (
                    <div className="px-5 py-4 border-b border-[#27272a] space-y-3">
                      <p className="text-[#e4e4e7] text-sm font-medium">Ваши данные</p>
                      <div className="bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-2.5 text-xs text-[#52525b] space-y-0.5">
                        <p><span className="text-[#a1a1aa]">{doctors[selectedDoctor!].name}</span></p>
                        <p><span className="text-[#a1a1aa]">{services[selectedService!].name} · {services[selectedService!].price}</span></p>
                        <p><span className="text-[#68a5e8]">{days[selectedDay!].full}, {selectedTime}</span></p>
                      </div>
                      <input
                        value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя и отчество"
                        className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-3 text-[#e4e4e7] text-sm placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors"
                      />
                      <input
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                        placeholder="Номер телефона"
                        type="tel"
                        className="w-full bg-[#18181b] border border-[#27272a] rounded-xl px-4 py-3 text-[#e4e4e7] text-sm placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors"
                      />
                      <button
                        disabled={!name.trim() || !phone.trim()}
                        onClick={() => name.trim() && phone.trim() && setConfirmed(true)}
                        className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                          name.trim() && phone.trim()
                            ? "bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b]"
                            : "bg-[#68a5e8]/20 text-[#68a5e8]/40 cursor-not-allowed"
                        }`}>
                        Подтвердить запись
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* ── Static AI chat ── */}
              <div>
                <div className="px-5 py-3 border-b border-[#27272a] border-t border-t-[#27272a] flex items-center gap-3">
                  <div className="flex-1 h-px bg-[#27272a]" />
                  <span className="text-[#52525b] text-xs flex-shrink-0">AI-ассистент клиники</span>
                  <div className="flex-1 h-px bg-[#27272a]" />
                </div>

                <div className="px-4 py-4 space-y-3">
                  {staticChat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
                      {msg.from === "bot" && <BotIcon />}
                      <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-[#68a5e8] text-[#09090b] rounded-br-sm"
                          : "bg-[#18181b] border border-[#27272a] text-[#a1a1aa] rounded-bl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
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
