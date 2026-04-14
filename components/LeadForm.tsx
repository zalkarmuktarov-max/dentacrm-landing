"use client";
import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "./Icons";

interface LeadFormProps {
  buttonText?: string;
  size?: "default" | "large";
}

export default function LeadForm({
  buttonText = "Получить демо",
  size = "default",
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !name.trim()) return;
    setStatus("loading");
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), source: "landing" }),
      });
      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-[#4ead7a]/10 border border-[#4ead7a]/30 rounded-xl px-5 py-4">
        <div className="w-8 h-8 rounded-full bg-[#4ead7a]/20 flex items-center justify-center text-[#4ead7a] flex-shrink-0">
          <CheckIcon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[#e4e4e7] font-medium text-sm">Заявка принята!</p>
          <p className="text-[#a1a1aa] text-xs mt-0.5">Свяжемся с вами в ближайшее время</p>
        </div>
      </div>
    );
  }

  const isLarge = size === "large";
  const inputCls = `w-full bg-[#111113] border border-[#27272a] rounded-xl text-[#e4e4e7] placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors ${
    isLarge ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"
  }`;

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя и отчество"
        className={inputCls}
        disabled={status === "loading"}
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Номер телефона"
          className={`flex-1 bg-[#111113] border border-[#27272a] rounded-xl text-[#e4e4e7] placeholder-[#52525b] focus:outline-none focus:border-[#68a5e8] transition-colors ${
            isLarge ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"
          }`}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading" || !phone.trim() || !name.trim()}
          className={`flex items-center justify-center gap-2 bg-[#68a5e8] hover:bg-[#8bbcf0] disabled:opacity-50 disabled:cursor-not-allowed text-[#09090b] font-semibold rounded-xl transition-colors whitespace-nowrap ${
            isLarge ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"
          }`}
        >
          {status === "loading" ? (
            <span className="w-4 h-4 border-2 border-[#09090b]/30 border-t-[#09090b] rounded-full animate-spin" />
          ) : (
            <ArrowRightIcon className="w-4 h-4" />
          )}
          {buttonText}
        </button>
      </div>
    </form>
  );
}
