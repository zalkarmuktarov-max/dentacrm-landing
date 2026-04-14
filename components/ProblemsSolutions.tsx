import { ToothIcon, CalendarIcon, BrainIcon } from "./Icons";

const items = [
  {
    icon: CalendarIcon,
    pain: "Пациенты записаны в тетрадке, записи теряются",
    solution: "Онлайн-расписание — врач видит свой день с телефона, пациент записывается сам",
    color: "#68a5e8",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    pain: "Не знаете сколько заработали за месяц",
    solution: "Финансы в реальном времени — выручка, средний чек, зарплаты врачей",
    color: "#4ead7a",
  },
  {
    icon: BrainIcon,
    pain: "Пациенты звонят в нерабочее время и не могут записаться",
    solution: "AI-бот отвечает на вопросы 24/7 и записывает на приём",
    color: "#d4a94e",
  },
  {
    icon: ToothIcon,
    pain: "Врач не видит историю лечения, каждый раз спрашивает заново",
    solution: "Зубная формула + план лечения — вся история в одном месте",
    color: "#5eadb0",
  },
];

export default function ProblemsSolutions() {
  return (
    <section className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Знакомые проблемы?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7]">
            Мы знаем, чем живёт стоматология
          </h2>
          <p className="mt-4 text-[#a1a1aa] max-w-2xl mx-auto">
            Каждый день владельцы клиник теряют время и деньги из-за устаревших процессов. DentaCRM это исправляет.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#111113] border border-[#27272a] rounded-2xl p-6 hover:border-[#3a3a3f] transition-colors group"
              >
                {/* Pain */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#d45b5b]/10 flex items-center justify-center text-[#d45b5b] flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#52525b] uppercase tracking-wide mb-1">Проблема</p>
                    <p className="text-[#e4e4e7] font-medium leading-snug">{item.pain}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-[#27272a] to-transparent" />
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: item.color }}>
                      Решение
                    </p>
                    <p className="text-[#a1a1aa] leading-snug group-hover:text-[#e4e4e7] transition-colors">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
