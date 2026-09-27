import { nav, site, mailto } from "@/config/site";
import { Icon } from "@/components/icon";

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/40">
      <div className="h-16 max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <a href="#top" className="flex items-center gap-space-sm group">
            <span className="font-title-sm text-title-sm text-on-surface tracking-tight group-hover:text-secondary transition-colors">
              {site.name}
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 shadow-[0_1px_2px_rgba(24,24,27,0.03)]">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              {site.statusLine}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <nav className="hidden md:flex items-center gap-space-lg">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={index === 0 ? "page" : undefined}
                className={
                  index === 0
                    ? "transition-colors text-on-surface font-title-sm"
                    : "font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-md">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary-container transition-all shadow-[0_1px_2px_rgba(24,24,27,0.05)] hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href={mailto}
              aria-label={`Email ${site.name}`}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-1 ring-outline-variant/40 hover:bg-primary-container transition-colors"
            >
              <Icon name="person" className="text-on-primary text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
