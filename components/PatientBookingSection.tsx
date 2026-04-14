"use client";
import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#0a0a0c", card: "#141416", cardAlt: "#1c1c1f", border: "#2a2a2e",
  blue: "#68a5e8", blueLight: "#8bbcf0", blueDark: "#3a6ea5",
  green: "#4ead7a", yellow: "#d4a94e", red: "#d45b5b",
  text: "#e8e8eb", textMuted: "#9a9aa4", textDim: "#5a5a64",
};
const font = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

const I = {
  tooth: (s = 20, c = C.blue) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13 5.5 15.5 6 17C6.5 18.5 7 20 7.5 21C7.8 21.6 8.2 22 9 22C9.8 22 10.2 21.4 10.5 20.5C10.8 19.5 11 18 11 16.5C11 15.5 11.5 15 12 15C12.5 15 13 15.5 13 16.5C13 18 13.2 19.5 13.5 20.5C13.8 21.4 14.2 22 15 22C15.8 22 16.2 21.6 16.5 21C17 20 17.5 18.5 18 17C18.5 15.5 19 13 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill={c} opacity="0.85" /></svg>,
  person: (s = 22, c = C.textMuted) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.8" /><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" /></svg>,
  specialist: (s = 22, c = C.textMuted) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3.5" stroke={c} strokeWidth="1.6" fill={c + "10"} /><path d="M2 19C2 15.5 5 13.5 9 13.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" /><circle cx="17" cy="8" r="2.8" stroke={c} strokeWidth="1.6" fill={c + "10"} /><path d="M13 19C13 15.5 15 13.5 17 13.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" /></svg>,
  calendarIcon: (s = 22, c = C.textMuted) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="3" stroke={c} strokeWidth="1.6" fill={c + "08"} /><line x1="3" y1="10" x2="21" y2="10" stroke={c} strokeWidth="1.3" /><line x1="8" y1="2" x2="8" y2="6" stroke={c} strokeWidth="1.6" strokeLinecap="round" /><line x1="16" y1="2" x2="16" y2="6" stroke={c} strokeWidth="1.6" strokeLinecap="round" /></svg>,
  listIcon: (s = 22, c = C.textMuted) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><line x1="9" y1="6" x2="20" y2="6" stroke={c} strokeWidth="1.6" strokeLinecap="round" /><line x1="9" y1="12" x2="20" y2="12" stroke={c} strokeWidth="1.6" strokeLinecap="round" /><line x1="9" y1="18" x2="20" y2="18" stroke={c} strokeWidth="1.6" strokeLinecap="round" /><circle cx="5" cy="6" r="1.5" fill={c} /><circle cx="5" cy="12" r="1.5" fill={c} /><circle cx="5" cy="18" r="1.5" fill={c} /></svg>,
  chevron: (s = 16, c = C.textDim) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><polyline points="9,4 17,12 9,20" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  chevDown: (s = 16, c = C.textDim) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><polyline points="4,9 12,17 20,9" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  check: (s = 16, c = C.green) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={c + "20"} stroke={c} strokeWidth="1.8" /><path d="M8 12L11 15L16 9" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  clock: (s = 12, c = C.textDim) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.6" /><line x1="12" y1="7" x2="12" y2="12" stroke={c} strokeWidth="1.8" strokeLinecap="round" /><line x1="12" y1="12" x2="15" y2="14" stroke={c} strokeWidth="1.8" strokeLinecap="round" /></svg>,
  star: (s = 11, c = C.yellow) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill={c} /></svg>,
  send: (s = 18, c = C.blue) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke={c} strokeWidth="2" strokeLinecap="round" /><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill={c + "15"} /></svg>,
  ai: (s = 20, c = C.blue) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.6" fill={c + "10"} /><circle cx="9" cy="10" r="1.5" fill={c} /><circle cx="15" cy="10" r="1.5" fill={c} /><path d="M8.5 15C9.5 16.5 10.5 17 12 17C13.5 17 14.5 16.5 15.5 15" stroke={c} strokeWidth="1.5" strokeLinecap="round" /></svg>,
  close: (s = 18, c = C.textMuted) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><line x1="6" y1="6" x2="18" y2="18" stroke={c} strokeWidth="2" strokeLinecap="round" /><line x1="18" y1="6" x2="6" y2="18" stroke={c} strokeWidth="2" strokeLinecap="round" /></svg>,
};

const doctors = [
  { id: 1, name: "Д-р Айгуль Касымова", spec: "Стоматолог-терапевт", rating: 4.9 },
  { id: 2, name: "Д-р Марат Жумабеков", spec: "Стоматолог-хирург / Имплантолог", rating: 4.9 },
  { id: 3, name: "Д-р Нурия Алиева", spec: "Стоматолог-ортодонт", rating: 4.8 },
  { id: 4, name: "Д-р Бакыт Эсенов", spec: "Детский стоматолог", rating: 5.0 },
];

const svcList = [
  { id: 1, name: "Осмотр + консультация", price: 500, duration: 30 },
  { id: 2, name: "Проф. чистка", price: 3500, duration: 45 },
  { id: 3, name: "Лечение кариеса", price: 2500, duration: 45 },
  { id: 4, name: "Отбеливание ZOOM", price: 12000, duration: 90 },
  { id: 5, name: "Удаление зуба", price: 2000, duration: 30 },
  { id: 6, name: "Консультация (имплантация)", price: 500, duration: 30 },
  { id: 7, name: "Детский осмотр", price: 300, duration: 20 },
  { id: 8, name: "Брекеты (консультация)", price: 500, duration: 30 },
];

const dates = [
  { day: "Вт", date: "15", full: "15 апреля" },
  { day: "Ср", date: "16", full: "16 апреля" },
  { day: "Чт", date: "17", full: "17 апреля" },
  { day: "Пт", date: "18", full: "18 апреля" },
  { day: "Сб", date: "19", full: "19 апреля" },
];

const times = ["09:00", "09:30", "10:00", "10:30", "11:30", "12:00", "14:00", "15:00", "15:30", "16:00", "17:00"];

const pastBookings = [
  { date: "10.04.2026", time: "10:00", doctor: "Д-р Айгуль", service: "Проф. чистка", status: "done" },
  { date: "15.02.2026", time: "11:30", doctor: "Д-р Айгуль", service: "Пломба зуб 24", status: "done" },
  { date: "20.01.2026", time: "09:00", doctor: "Д-р Марат", service: "Имплант зуб 46", status: "done" },
];

const upcomingBookings = [
  { date: "22.04.2026", time: "10:00", doctor: "Д-р Марат", service: "Имплант (контроль)", status: "upcoming" },
];


function BookingWidget() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selDoctor, setSelDoctor] = useState<number | null | "any">(null);
  const [selDate, setSelDate] = useState<number | null>(null);
  const [selTime, setSelTime] = useState<string | null>(null);
  const [selSvcs, setSelSvcs] = useState<number[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [bName, setBName] = useState("");
  const [bPhone, setBPhone] = useState("");

  const [showAccount, setShowAccount] = useState(false);
  const [accountStep, setAccountStep] = useState<"phone" | "code" | "profile">("phone");
  const [accPhone, setAccPhone] = useState("");
  const [accCode, setAccCode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [chatMsgs] = useState<{ from: string; text: string }[]>([]);
  const [typing] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const pickDoctor = (id: number | null | "any") => { setSelDoctor(id); setExpanded("services"); };
  const toggleSvc = (id: number) => setSelSvcs(p => p.includes(id) ? p.filter(s => s !== id) : [...p, id]);
  const confirmSvcs = () => { if (selSvcs.length > 0) setExpanded("datetime"); };
  const pickTime = (t: string) => { setSelTime(t); setExpanded(null); };

  const docObj = (selDoctor && selDoctor !== "any") ? doctors.find(d => d.id === selDoctor) : null;
  const dateObj = selDate !== null ? dates[selDate] : null;
  const totalP = selSvcs.reduce((a, id) => a + (svcList.find(s => s.id === id)?.price || 0), 0);
  const totalD = selSvcs.reduce((a, id) => a + (svcList.find(s => s.id === id)?.duration || 0), 0);
  const canConfirm = selSvcs.length > 0 && selDate !== null && selTime && bName && bPhone;


  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatMsgs, typing]);

  const sendCode = () => { if (accPhone.length > 5) setAccountStep("code"); };
  const verifyCode = () => { if (accCode.length >= 4) { setAccountStep("profile"); setLoggedIn(true); } };

  const doctorSelected = selDoctor !== null;
  const doctorLabel = selDoctor === "any" ? "Любой свободный" : (docObj?.name ?? "Выбрать специалиста");
  const doctorSub = selDoctor === "any" ? "Ближайшее время" : docObj?.spec;

  if (confirmed) {
    return (
      <div style={{ fontFamily: font, background: C.bg, color: C.text, padding: "40px 16px", textAlign: "center" }}>
        {I.check(48, C.green)}
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "16px 0 6px" }}>Вы записаны!</h2>
        <p style={{ fontSize: 14, color: C.textMuted, margin: "0 0 24px" }}>Подтверждение придёт в WhatsApp</p>
        <div style={{ background: C.card, borderRadius: 14, padding: 18, textAlign: "left" }}>
          {([
            { l: "Услуги", v: selSvcs.map(id => svcList.find(s => s.id === id)?.name).join(", ") },
            doctorSelected ? { l: "Врач", v: doctorLabel } : null,
            { l: "Дата", v: `${dateObj?.full} 2026, ${selTime}` },
            { l: "Стоимость", v: totalP.toLocaleString() + " сом", bold: true },
          ] as ({ l: string; v: string; bold?: boolean } | null)[]).filter(Boolean).map((r, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 3 ? `1px solid ${C.border}` : "none", fontSize: 13 }}>
              <span style={{ color: C.textDim }}>{r!.l}</span>
              <span style={{ color: r!.bold ? C.yellow : C.text, fontWeight: r!.bold ? 700 : 400, textAlign: "right", maxWidth: "60%" }}>{r!.v}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12, color: C.textDim, marginTop: 40 }}>
          Работает на <span style={{ color: C.blue, fontWeight: 600 }}>DentaCRM</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: font, background: C.bg, color: C.text, padding: "24px 16px" }}>
      {/* ─── HEADER ─── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: C.blue + "10", border: `1px solid ${C.blue}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {I.tooth(20, C.blue)}
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: C.text }}>Smile Clinic</div>
            <div style={{ fontSize: 12, color: C.textDim }}>ул. Чуй, 120, Бишкек</div>
          </div>
        </div>
        <div onClick={() => setShowAccount(!showAccount)} style={{ width: 40, height: 40, borderRadius: "50%", cursor: "pointer", background: loggedIn ? C.blue + "15" : C.cardAlt, border: `1.5px solid ${loggedIn ? C.blue + "30" : C.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {loggedIn ? <span style={{ fontSize: 14, fontWeight: 700, color: C.blue }}>БА</span> : I.person(20, C.textMuted)}
        </div>
      </div>

      {/* ─── ACCOUNT PANEL ─── */}
      {showAccount && (
        <div style={{ background: C.card, borderRadius: 14, padding: 20, border: `1px solid ${C.border}`, marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{loggedIn ? "Мои записи" : "Войти"}</span>
            <div onClick={() => setShowAccount(false)} style={{ cursor: "pointer" }}>{I.close(16, C.textDim)}</div>
          </div>

          {!loggedIn && accountStep === "phone" && (
            <div>
              <p style={{ fontSize: 13, color: C.textMuted, margin: "0 0 12px", lineHeight: 1.5 }}>Введите номер, который вы указывали при записи — мы отправим код подтверждения</p>
              <input value={accPhone} onChange={e => setAccPhone(e.target.value)} placeholder="+996 555 ..."
                style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.bg, color: C.text, fontSize: 14, fontFamily: font, outline: "none", boxSizing: "border-box", marginBottom: 8 }} />
              <button onClick={sendCode} style={{ width: "100%", padding: "10px 0", borderRadius: 8, border: "none", background: accPhone.length > 5 ? C.blue : C.border, color: accPhone.length > 5 ? "#fff" : C.textDim, fontSize: 13, fontWeight: 600, fontFamily: font, cursor: accPhone.length > 5 ? "pointer" : "default" }}>
                Получить код
              </button>
            </div>
          )}

          {!loggedIn && accountStep === "code" && (
            <div>
              <p style={{ fontSize: 13, color: C.textMuted, margin: "0 0 12px" }}>Код отправлен на {accPhone}</p>
              <input value={accCode} onChange={e => setAccCode(e.target.value)} placeholder="Введите код" maxLength={4}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.bg, color: C.text, fontSize: 18, fontFamily: font, outline: "none", boxSizing: "border-box", marginBottom: 8, textAlign: "center", letterSpacing: 8 }} />
              <button onClick={verifyCode} style={{ width: "100%", padding: "10px 0", borderRadius: 8, border: "none", background: accCode.length >= 4 ? C.blue : C.border, color: accCode.length >= 4 ? "#fff" : C.textDim, fontSize: 13, fontWeight: 600, fontFamily: font, cursor: accCode.length >= 4 ? "pointer" : "default" }}>
                Подтвердить
              </button>
            </div>
          )}

          {loggedIn && (
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Бакытбек Асанов</div>
              <div style={{ fontSize: 12, color: C.textDim, marginBottom: 14 }}>{accPhone || "+996 555 123 456"}</div>
              {upcomingBookings.length > 0 && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.blue, marginBottom: 6 }}>Предстоящие</div>
                  {upcomingBookings.map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", background: C.blue + "08", borderRadius: 8, border: `1px solid ${C.blue}15` }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{b.service}</div>
                        <div style={{ fontSize: 12, color: C.textDim }}>{b.doctor} · {b.date}, {b.time}</div>
                      </div>
                      <button style={{ marginLeft: "auto", padding: "4px 10px", borderRadius: 5, border: `1px solid ${C.red}30`, background: "transparent", color: C.red, fontSize: 11, fontFamily: font, cursor: "pointer" }}>Отменить</button>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ fontSize: 11, fontWeight: 700, color: C.textDim, marginBottom: 6 }}>Прошлые визиты</div>
              {pastBookings.map((b, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < pastBookings.length - 1 ? `1px solid ${C.border}` : "none", fontSize: 12 }}>
                  <div>
                    <span style={{ color: C.text }}>{b.service}</span>
                    <span style={{ color: C.textDim, marginLeft: 6 }}>· {b.doctor}</span>
                  </div>
                  <span style={{ color: C.textDim }}>{b.date}</span>
                </div>
              ))}
              <button onClick={() => { setLoggedIn(false); setAccountStep("phone"); setAccPhone(""); setAccCode(""); }}
                style={{ marginTop: 14, padding: "6px 14px", borderRadius: 6, border: `1px solid ${C.border}`, background: "transparent", color: C.textDim, fontSize: 11, fontFamily: font, cursor: "pointer" }}>
                Выйти
              </button>
            </div>
          )}
        </div>
      )}

      {/* ─── SPECIALIST ─── */}
      <div>
        <div onClick={() => setExpanded(expanded === "specialist" ? null : "specialist")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 4px", borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}>
          {I.specialist(22, doctorSelected ? C.blue : C.textMuted)}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, color: C.text }}>{doctorLabel}</div>
            {doctorSelected && <div style={{ fontSize: 12, color: C.textDim }}>{doctorSub}</div>}
          </div>
          {doctorSelected && <div style={{ marginRight: 4 }}>{I.check(16, C.green)}</div>}
          {expanded === "specialist" ? I.chevDown(16, C.textDim) : I.chevron(16, C.textDim)}
        </div>
        {expanded === "specialist" && (
          <div style={{ padding: "6px 0" }}>
            <div onClick={() => pickDoctor("any")} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 8px", borderRadius: 8, cursor: "pointer" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.green + "10", border: `1.5px solid ${C.green}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.green }}>?</div>
              <div>
                <div style={{ fontSize: 14, color: C.text }}>Любой свободный</div>
                <div style={{ fontSize: 12, color: C.textDim }}>Ближайшее время</div>
              </div>
            </div>
            {doctors.map(d => (
              <div key={d.id} onClick={() => pickDoctor(d.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 8px", borderRadius: 8, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.blue + "10", border: `1.5px solid ${C.blue}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C.blue }}>
                  {d.name.replace("Д-р ", "").split(" ").map((w: string) => w[0]).join("")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: C.text }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: C.textDim }}>{d.spec}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  {I.star(11, C.yellow)}
                  <span style={{ fontSize: 12, color: C.yellow }}>{d.rating}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── SERVICES ─── */}
      <div>
        <div onClick={() => setExpanded(expanded === "services" ? null : "services")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 4px", borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}>
          {I.listIcon(22, selSvcs.length > 0 ? C.blue : C.textMuted)}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, color: C.text }}>{selSvcs.length > 0 ? `Выбрано: ${selSvcs.length}` : "Выбрать услуги"}</div>
            {selSvcs.length > 0 && <div style={{ fontSize: 12, color: C.textDim }}>{totalP.toLocaleString()} сом · {totalD} мин</div>}
          </div>
          {selSvcs.length > 0 && <div style={{ marginRight: 4 }}>{I.check(16, C.green)}</div>}
          {expanded === "services" ? I.chevDown(16, C.textDim) : I.chevron(16, C.textDim)}
        </div>
        {expanded === "services" && (
          <div style={{ padding: "6px 0" }}>
            {svcList.map(s => {
              const sel = selSvcs.includes(s.id);
              return (
                <div key={s.id} onClick={() => toggleSvc(s.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 8px", borderRadius: 8, cursor: "pointer" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: sel ? C.blue : "transparent", border: sel ? `2px solid ${C.blue}` : `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {sel && <svg width="12" height="12" viewBox="0 0 24 24"><path d="M5 12L10 17L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: C.text }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: C.textDim, display: "flex", alignItems: "center", gap: 3 }}>
                      {I.clock(11, C.textDim)} {s.duration} мин
                    </div>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.yellow }}>{s.price.toLocaleString()} с</span>
                </div>
              );
            })}
            {selSvcs.length > 0 && (
              <button onClick={confirmSvcs} style={{ width: "100%", padding: "10px 0", borderRadius: 8, border: "none", background: C.blue, color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: font, cursor: "pointer", marginTop: 6 }}>
                Далее — выбрать время
              </button>
            )}
          </div>
        )}
      </div>

      {/* ─── DATE TIME ─── */}
      <div>
        <div onClick={() => setExpanded(expanded === "datetime" ? null : "datetime")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 4px", borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}>
          {I.calendarIcon(22, selTime ? C.blue : C.textMuted)}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, color: C.text }}>{selDate !== null && selTime ? `${dateObj?.full}, ${selTime}` : "Выбрать дату и время"}</div>
          </div>
          {selTime && <div style={{ marginRight: 4 }}>{I.check(16, C.green)}</div>}
          {expanded === "datetime" ? I.chevDown(16, C.textDim) : I.chevron(16, C.textDim)}
        </div>
        {expanded === "datetime" && (
          <div style={{ padding: "10px 0" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
              {dates.map((d, i) => (
                <div key={i} onClick={() => setSelDate(i)} style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 10, cursor: "pointer", background: selDate === i ? C.blue + "12" : "transparent", border: selDate === i ? `1.5px solid ${C.blue}30` : `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 11, color: C.textDim }}>{d.day}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: selDate === i ? C.blue : C.text }}>{d.date}</div>
                </div>
              ))}
            </div>
            {selDate !== null && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                {times.map((t, i) => (
                  <div key={i} onClick={() => pickTime(t)} style={{ padding: "9px 0", textAlign: "center", borderRadius: 8, cursor: "pointer", background: selTime === t ? C.blue : C.cardAlt, border: `1px solid ${selTime === t ? C.blue : C.border}`, color: selTime === t ? "#fff" : C.text, fontSize: 13, fontWeight: selTime === t ? 700 : 400 }}>
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── CONFIRM ─── */}
      {selSvcs.length > 0 && selTime && expanded === null && (
        <div style={{ marginTop: 20 }}>
          <input value={bName} onChange={e => setBName(e.target.value)} placeholder="Ваше имя"
            style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.card, color: C.text, fontSize: 14, fontFamily: font, outline: "none", boxSizing: "border-box", marginBottom: 8 }} />
          <input value={bPhone} onChange={e => setBPhone(e.target.value)} placeholder="Телефон (WhatsApp)"
            style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.card, color: C.text, fontSize: 14, fontFamily: font, outline: "none", boxSizing: "border-box" }} />
          <button onClick={() => canConfirm && setConfirmed(true)} style={{ width: "100%", padding: "14px 0", borderRadius: 10, border: "none", background: canConfirm ? C.blue : C.border, color: canConfirm ? "#fff" : C.textDim, fontSize: 15, fontWeight: 700, fontFamily: font, cursor: canConfirm ? "pointer" : "default", marginTop: 8 }}>
            Записаться · {totalP.toLocaleString()} сом
          </button>
        </div>
      )}

      {/* ─── AI CHAT ─── */}
      <div style={{ marginTop: 32, borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          {I.ai(20, C.blue)}
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>Есть вопрос?</div>
            <div style={{ fontSize: 12, color: C.textDim }}>Получите ответ на любой вопрос о клинике и услугах</div>
          </div>
        </div>

        {chatMsgs.length > 0 && (
          <div ref={chatRef} style={{ maxHeight: 200, overflowY: "auto", marginBottom: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            {chatMsgs.map((m, i) => (
              <div key={i} style={{ alignSelf: m.from === "user" ? "flex-end" : "flex-start", maxWidth: "85%", background: m.from === "user" ? C.blue : C.card, borderRadius: 12, borderBottomRightRadius: m.from === "user" ? 4 : 12, borderBottomLeftRadius: m.from === "ai" ? 4 : 12, padding: "10px 14px", border: m.from === "ai" ? `1px solid ${C.border}` : "none" }}>
                <div style={{ fontSize: 13, color: m.from === "user" ? "#fff" : C.text, lineHeight: 1.5 }}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div style={{ alignSelf: "flex-start", background: C.card, borderRadius: 12, borderBottomLeftRadius: 4, padding: "10px 18px", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[0, 1, 2].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue, opacity: 0.5 }} />)}
                </div>
              </div>
            )}
          </div>
        )}

        {chatMsgs.length === 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {["Сколько стоит имплант?", "Больно ли лечить?", "Часы работы"].map((q, i) => (
              <button key={i} disabled style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${C.border}`, background: "transparent", color: C.textMuted, fontSize: 12, fontFamily: font, cursor: "default" }}>
                {q}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          <input value="" readOnly placeholder="Напишите вопрос..."
            style={{ flex: 1, padding: "11px 14px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.card, color: C.text, fontSize: 13, fontFamily: font, outline: "none", cursor: "default" }} />
          <button disabled style={{ width: 42, height: 42, borderRadius: 10, border: "none", background: C.cardAlt, display: "flex", alignItems: "center", justifyContent: "center", cursor: "default", flexShrink: 0 }}>
            {I.send(16, C.textDim)}
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 28, paddingBottom: 8, fontSize: 12, color: C.textDim }}>
        Работает на <span style={{ color: C.blue, fontWeight: 600 }}>DentaCRM</span>
      </div>
    </div>
  );
}

export default function PatientBookingSection() {
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
        <p className="text-center text-[#a1a1aa] mb-10">
          Попробуйте сами — нажимайте на разделы, выбирайте врача и услуги
        </p>

        {/* Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#27272a] shadow-xl shadow-black/40">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
