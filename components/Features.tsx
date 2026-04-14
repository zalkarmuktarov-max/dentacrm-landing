import {
  CalendarIcon,
  ToothIcon,
  TreatmentIcon,
  BrainIcon,
  FinanceIcon,
  AnalyticsIcon,
  BuildingIcon,
  ShieldIcon,
} from "./Icons";

const features = [
  {
    icon: CalendarIcon,
    title: "Онлайн-запись",
    description: "Пациенты записываются через телефон в любое время суток",
    color: "#68a5e8",
  },
  {
    icon: ToothIcon,
    title: "Зубная формула",
    description: "Интерактивная карта зубов с историей изменений и планами",
    color: "#5eadb0",
  },
  {
    icon: TreatmentIcon,
    title: "Планы лечения",
    description: "Этапы, стоимость, прогресс — всё прозрачно для врача и пациента",
    color: "#4ead7a",
  },
  {
    icon: BrainIcon,
    title: "AI-ассистент",
    description: "Бот отвечает пациентам на основе данных вашей клиники 24/7",
    color: "#d4a94e",
  },
  {
    icon: FinanceIcon,
    title: "Финансы",
    description: "Выручка, оплаты, зарплаты врачей — без Excel и ошибок",
    color: "#4ead7a",
  },
  {
    icon: AnalyticsIcon,
    title: "Аналитика",
    description: "Загрузка врачей, популярные услуги, динамика роста клиники",
    color: "#68a5e8",
  },
  {
    icon: BuildingIcon,
    title: "Мультиклиника",
    description: "Управление сетью филиалов из одного личного кабинета",
    color: "#5eadb0",
  },
  {
    icon: ShieldIcon,
    title: "Безопасность",
    description: "Данные пациентов защищены, доступ по ролям и правам",
    color: "#d45b5b",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#68a5e8] text-sm font-medium uppercase tracking-widest mb-3">
            Возможности
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7]">
            Всё что нужно клинике — в одной системе
          </h2>
          <p className="mt-4 text-[#a1a1aa] max-w-2xl mx-auto">
            Больше не нужно использовать разные программы. DentaCRM объединяет все процессы.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group bg-[#111113] border border-[#27272a] rounded-2xl p-6 hover:border-[#3a3a3f] hover:bg-[#131315] transition-all cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[#e4e4e7] font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
