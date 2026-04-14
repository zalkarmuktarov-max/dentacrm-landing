import LeadForm from "./LeadForm";
import { WhatsAppIcon } from "./Icons";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#68a5e8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#68a5e8]/10 border border-[#68a5e8]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#68a5e8]" />
          <span className="text-[#68a5e8] text-sm">14 дней бесплатно</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e4e4e7] mb-4 text-balance">
          Готовы автоматизировать клинику?
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10">
          Запишитесь на демо — покажем всё за 15 минут
        </p>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-6">
          <LeadForm size="large" />
        </div>

        {/* WhatsApp */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 max-w-[100px] h-px bg-[#27272a]" />
          <span className="text-[#52525b] text-sm">или</span>
          <div className="flex-1 max-w-[100px] h-px bg-[#27272a]" />
        </div>

        <a
          href="https://wa.me/996700000000?text=Здравствуйте!%20Хочу%20узнать%20про%20DentaCRM"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2.5 bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 text-[#25d366] font-medium px-6 py-3 rounded-xl transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Написать в WhatsApp
        </a>

        {/* Trust */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#52525b] text-sm">
          <span>✓ Без карты</span>
          <span>✓ Настроим за вас</span>
          <span>✓ Бесплатное обучение</span>
          <span>✓ Поддержка на русском</span>
        </div>
      </div>
    </section>
  );
}
