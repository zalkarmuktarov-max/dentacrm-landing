import { ToothIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[#68a5e8]">
                <ToothIcon className="w-6 h-6" />
              </div>
              <span className="text-[#e4e4e7] font-semibold text-lg">DentaCRM</span>
            </div>
            <p className="text-[#52525b] text-sm leading-relaxed mb-3">
              AI-powered CRM система для стоматологий в Кыргызстане
            </p>
            <a
              href="https://cognitai.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#52525b] text-xs hover:text-[#a1a1aa] transition-colors"
            >
              by CognitAI · cognitai.agency
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#e4e4e7] font-medium text-sm mb-4">Навигация</p>
            <div className="space-y-2.5">
              {[
                { href: "#features", label: "Возможности" },
                { href: "#demo", label: "Демо" },
                { href: "#pricing", label: "Тарифы" },
                { href: "#contact", label: "Контакты" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-[#52525b] hover:text-[#a1a1aa] text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#e4e4e7] font-medium text-sm mb-4">Контакты</p>
            <div className="space-y-3">
              <a
                href="tel:+996700000000"
                className="flex items-center gap-2.5 text-[#52525b] hover:text-[#a1a1aa] text-sm transition-colors"
              >
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                +996 700 000 000
              </a>
              <a
                href="https://wa.me/996700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#52525b] hover:text-[#a1a1aa] text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                WhatsApp
              </a>
              <a
                href="mailto:hello@dentacrm.kg"
                className="flex items-center gap-2.5 text-[#52525b] hover:text-[#a1a1aa] text-sm transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@dentacrm.kg
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#52525b] text-xs">
            © 2025 DentaCRM. Все права защищены.
          </p>
          <p className="text-[#52525b] text-xs">
            Бишкек, Кыргызстан
          </p>
        </div>
      </div>
    </footer>
  );
}
