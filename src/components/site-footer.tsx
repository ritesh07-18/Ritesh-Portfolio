import { mailto, site, socials, tel, whatsappUrl } from "@/config/site";

const footerLinks = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Instagram", href: socials.instagram },
  { label: "WhatsApp", href: whatsappUrl },
  { label: "Email", href: mailto },
  { label: "Phone", href: tel },
  { label: "X / Twitter", href: socials.x },
].filter((link) => Boolean(link.href));

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40 py-space-2xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-xl border-b border-outline-variant/40">
          <div className="md:col-span-6 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight">
                {site.name}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-caps text-label-caps uppercase text-on-surface-variant">
                Founder — OneDistrict
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Full-Stack Developer &amp; AI Agent Builder. Architecting modern web
              infrastructures, high-precision interfaces, and autonomous agentic
              systems.
            </p>
            <div className="flex items-center gap-2 pt-space-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-code-inline text-code-inline">
                {site.location}
              </span>
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/50">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">
                {site.availabilityLine}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-2">
              {footerLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-space-md">
                  {index > 0 && (
                    <span className="text-outline-variant text-body-sm">•</span>
                  )}
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-code-inline text-code-inline text-on-surface-variant hover:text-secondary transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-caps text-label-caps uppercase text-on-surface-variant">
          <p>&copy; {new Date().getFullYear()} {site.name}. Built with precision.</p>
          <p className="font-code-inline text-code-inline lowercase tracking-normal text-outline">
            portfolio v2.6.0 — editorial warm minimal
          </p>
        </div>
      </div>
    </footer>
  );
}
