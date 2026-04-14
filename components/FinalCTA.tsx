import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#68a5e8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e4e4e7] mb-4 text-balance">
          Готовы автоматизировать клинику?
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10">
          Запишитесь на демо — покажем всё за 15 минут
        </p>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-10">
          <LeadForm size="large" buttonText="Оставить заявку" />
        </div>

        {/* Trust */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#52525b] text-sm">
          <span>✓ Настроим за вас</span>
          <span>✓ Обучение включено</span>
          <span>✓ Поддержка на русском</span>
        </div>
      </div>
    </section>
  );
}
