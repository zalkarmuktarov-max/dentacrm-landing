import { CheckIcon } from "./Icons";

const plans = [
  {
    name: "Старт",
    price: "2 990",
    period: "сом/мес",
    description: "Для небольшой клиники",
    seats: "1–2 кресла",
    popular: false,
    features: [
      "Расписание и онлайн-запись",
      "Карточки пациентов",
      "1 пользователь",
      "Базовая аналитика",
      "Поддержка по email",
    ],
    cta: "Начать бесплатно",
    color: "#68a5e8",
  },
  {
    name: "Клиника",
    price: "5 990",
    period: "сом/мес",
    description: "Оптимальный выбор",
    seats: "3–5 кресел",
    popular: true,
    features: [
      "Всё из «Старт»",
      "Зубная формула и планы лечения",
      "AI-ассистент для пациентов",
      "Финансы и аналитика",
      "До 10 пользователей",
      "Приоритетная поддержка",
    ],
    cta: "Начать бесплатно",
    color: "#68a5e8",
  },
  {
    name: "Сеть",
    price: "9 990",
    period: "сом/мес за филиал",
    description: "Для сети клиник",
    seats: "5+ кресел",
    popular: false,
    features: [
      "Всё из «Клиника»",
      "Управление несколькими филиалами",
      "Расчёт зарплат врачей",
      "API-доступ",
      "Неограниченно пользователей",
      "Персональный менеджер",
    ],
    cta: "Обсудить условия",
    color: "#5eadb0",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Тарифы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7]">
            Прозрачные цены без скрытых платежей
          </h2>
          <p className="mt-4 text-[#a1a1aa]">
            Начните с бесплатных 14 дней — карта не нужна
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl ${
                plan.popular
                  ? "bg-[#111113] border-2 border-[#68a5e8] shadow-lg shadow-[#68a5e8]/10"
                  : "bg-[#111113] border border-[#27272a]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#68a5e8] text-[#09090b] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Популярный
                  </span>
                </div>
              )}

              <div className="p-7 flex-1">
                {/* Plan name */}
                <div className="mb-5">
                  <h3 className="text-[#e4e4e7] font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-[#52525b] text-sm">{plan.description}</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 bg-[#18181b] rounded-full px-3 py-1">
                    <span className="text-[#52525b] text-xs">{plan.seats}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-bold text-[#e4e4e7]">{plan.price}</span>
                    <span className="text-[#52525b] text-sm mb-1.5">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                      >
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      <span className="text-[#a1a1aa] text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-7 pt-0">
                <a
                  href="#contact"
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors text-sm ${
                    plan.popular
                      ? "bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b]"
                      : "bg-[#18181b] hover:bg-[#1f1f22] text-[#e4e4e7] border border-[#27272a]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#52525b] text-sm mt-8">
          Скидка 20% при оплате за год · Бесплатное внедрение и обучение
        </p>
      </div>
    </section>
  );
}
