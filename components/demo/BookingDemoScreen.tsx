"use client";
import { useState } from "react";
import { MessageIcon } from "../Icons";

const doctors = [
  { name: "Д-р Сейтов А.К.", spec: "Терапевт", color: "#68a5e8" },
  { name: "Д-р Асанова М.Д.", spec: "Ортопед", color: "#4ead7a" },
  { name: "Д-р Бекова Р.О.", spec: "Хирург", color: "#d4a94e" },
];

const slots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

type Step = "doctor" | "date" | "confirm";

export default function BookingDemoScreen() {
  const [step, setStep] = useState<Step>("doctor");
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Здравствуйте! Я помогу вам записаться или ответить на вопросы о клинике 😊" },
  ]);
  const [input, setInput] = useState("");

  const botReply = (msg: string): string => {
    const lower = msg.toLowerCase();
    if (lower.includes("цена") || lower.includes("стоимость") || lower.includes("сколько"))
      return "Лечение кариеса — от 2 500 с, профессиональная чистка — 3 000 с. Точную стоимость скажет врач после осмотра.";
    if (lower.includes("запис"))
      return "Выберите врача и удобное время в форме слева — запись займёт 30 секунд!";
    if (lower.includes("адрес") || lower.includes("находит"))
      return "Мы находимся по адресу: Бишкек, ул. Киевская 77, офис 302. Рядом с ЦУМом.";
    if (lower.includes("режим") || lower.includes("работа") || lower.includes("часы"))
      return "Работаем: Пн–Пт 9:00–18:00, Суббота 10:00–16:00. Воскресенье — выходной.";
    return "Уточните ваш вопрос — я постараюсь помочь! Или позвоните нам: +996 312 000 000";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply(userMsg) }]);
    }, 600);
  };

  return (
    <div className="h-full flex overflow-hidden">
      {/* Booking form */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-4">
        {/* Steps */}
        <div className="flex items-center gap-2">
          {(["doctor", "date", "confirm"] as Step[]).map((s, i) => {
            const labels = ["Врач", "Время", "Подтверждение"];
            const done = (step === "date" && i === 0) || (step === "confirm" && i < 2);
            const active = step === s;
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5`}>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      done ? "bg-[#4ead7a] text-white" : active ? "bg-[#68a5e8] text-white" : "bg-[#27272a] text-[#52525b]"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  <span className={`text-[10px] ${active ? "text-[#e4e4e7]" : "text-[#52525b]"}`}>{labels[i]}</span>
                </div>
                {i < 2 && <div className="w-6 h-px bg-[#27272a]" />}
              </div>
            );
          })}
        </div>

        {/* Step: Doctor */}
        {step === "doctor" && (
          <div className="space-y-2">
            <p className="text-[#a1a1aa] text-xs">Выберите врача</p>
            {doctors.map((doc, i) => (
              <button
                key={i}
                onClick={() => { setSelectedDoctor(i); setStep("date"); }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors text-left ${
                  selectedDoctor === i
                    ? "border-[#68a5e8] bg-[#68a5e8]/10"
                    : "border-[#27272a] bg-[#18181b] hover:border-[#3a3a3f]"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${doc.color}20`, color: doc.color }}
                >
                  {doc.name.split(" ")[1][0]}{doc.name.split(" ")[2]?.[0] || ""}
                </div>
                <div>
                  <p className="text-[#e4e4e7] text-xs font-medium">{doc.name}</p>
                  <p className="text-[#52525b] text-[10px]">{doc.spec}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step: Time */}
        {step === "date" && (
          <div className="space-y-3">
            <button onClick={() => setStep("doctor")} className="text-[#52525b] text-xs flex items-center gap-1 hover:text-[#a1a1aa]">
              ← Назад
            </button>
            <p className="text-[#a1a1aa] text-xs">Выберите время · Пн, 14 апреля</p>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => { setSelectedSlot(slot); setStep("confirm"); }}
                  className={`py-2 rounded-xl border text-xs transition-colors ${
                    selectedSlot === slot
                      ? "border-[#68a5e8] bg-[#68a5e8]/10 text-[#68a5e8]"
                      : "border-[#27272a] text-[#a1a1aa] hover:border-[#3a3a3f]"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step: Confirm */}
        {step === "confirm" && (
          <div className="space-y-3">
            <button onClick={() => setStep("date")} className="text-[#52525b] text-xs flex items-center gap-1 hover:text-[#a1a1aa]">
              ← Назад
            </button>
            <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 space-y-2">
              <p className="text-[#e4e4e7] text-sm font-medium">Подтверждение записи</p>
              {selectedDoctor !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-[#52525b] text-xs">Врач</span>
                  <span className="text-[#e4e4e7] text-xs">{doctors[selectedDoctor].name}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-[#52525b] text-xs">Дата</span>
                <span className="text-[#e4e4e7] text-xs">Пн, 14 апреля</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#52525b] text-xs">Время</span>
                <span className="text-[#e4e4e7] text-xs">{selectedSlot}</span>
              </div>
            </div>
            <button
              onClick={() => setStep("doctor")}
              className="w-full bg-[#68a5e8] text-[#09090b] font-semibold text-sm py-3 rounded-xl hover:bg-[#8bbcf0] transition-colors"
            >
              Подтвердить запись
            </button>
            <p className="text-center text-[#52525b] text-[10px]">Работает на DentaCRM</p>
          </div>
        )}
      </div>

      {/* AI Chat */}
      <div className={`${chatOpen ? "w-64" : "w-12"} flex-shrink-0 border-l border-[#27272a] flex flex-col transition-all duration-300 bg-[#0d0d0f]`}>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="flex items-center gap-2 px-3 py-3 border-b border-[#27272a] hover:bg-[#18181b] transition-colors"
        >
          <MessageIcon className="w-4 h-4 text-[#68a5e8] flex-shrink-0" />
          {chatOpen && <span className="text-[#e4e4e7] text-xs font-medium">AI-ассистент</span>}
        </button>

        {chatOpen && (
          <>
            <div className="flex-1 overflow-y-auto scrollbar-thin p-3 space-y-2">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[90%] rounded-xl px-3 py-2 text-[10px] leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#68a5e8] text-[#09090b]"
                        : "bg-[#18181b] border border-[#27272a] text-[#a1a1aa]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-[#27272a] flex gap-1">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Спросить..."
                className="flex-1 bg-[#18181b] border border-[#27272a] rounded-lg px-2 py-1.5 text-[#e4e4e7] text-[10px] placeholder-[#52525b] focus:outline-none min-w-0"
              />
              <button
                onClick={sendMessage}
                className="w-7 h-7 rounded-lg bg-[#68a5e8] text-[#09090b] flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
