import { ToothIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="text-[#68a5e8]">
              <ToothIcon className="w-6 h-6" />
            </div>
            <span className="text-[#e4e4e7] font-semibold text-lg">DentaCRM</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "#features", label: "Возможности" },
              { href: "#demo", label: "Демо" },
              { href: "#pricing", label: "Тарифы" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#52525b] hover:text-[#a1a1aa] text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#52525b] text-xs">© 2026 DentaCRM</p>
          <p className="text-[#52525b] text-xs">Бишкек, Кыргызстан</p>
        </div>
      </div>
    </footer>
  );
}
