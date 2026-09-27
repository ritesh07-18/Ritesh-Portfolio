import { contact, mailto, site, socials, tel, whatsappUrl } from "@/config/site";
import { Icon, InstagramIcon, WhatsappIcon } from "@/components/icon";

const primaryActions = [
  { label: "Email Me", icon: "mail", href: mailto, external: false },
  {
    label: "LinkedIn Profile",
    icon: "work",
    href: socials.linkedin,
    external: true,
  },
  {
    label: "GitHub Repository",
    icon: "code",
    href: socials.github,
    external: true,
  },
];

const socialActions = [
  { label: "Instagram", href: socials.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: whatsappUrl, Icon: WhatsappIcon },
  { label: `Call ${contact.phoneDisplay}`, href: tel, Icon: null, icon: "call" },
].filter((social) => Boolean(social.href));

export function Contact() {
  return (
    <section id="contact" className="w-full py-space-3xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-8 md:p-14 flex flex-col items-center text-center gap-space-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase font-bold">
            OPEN FOR BUILDS &amp; COLLABORATION
          </div>

          <div className="flex flex-col gap-space-xs max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg md:text-display-xl md:font-display-xl text-on-surface tracking-tight font-bold">
              Have an idea worth building?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant pt-2">
              Let&apos;s build something useful. Whether it&apos;s an early-stage
              product discussion, founder collaboration, or engineering role — my
              inbox is open.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-md pt-2">
            {primaryActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={
                  action.external
                    ? "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm hover:bg-surface-container transition-all shadow-sm hover:-translate-y-0.5"
                    : "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary-container transition-all shadow-sm hover:-translate-y-0.5"
                }
              >
                <Icon name={action.icon} className="text-[18px]" />
                <span>{action.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {socialActions.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={social.label}
                title={social.label}
                className="w-11 h-11 rounded-full bg-surface-container-lowest border border-outline-variant/60 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-colors"
              >
                {social.Icon ? (
                  <social.Icon className="w-[18px] h-[18px]" />
                ) : (
                  <Icon name={social.icon} className="text-[18px]" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-space-md border-t border-outline-variant/30 w-full max-w-md">
            <p className="font-code-inline text-code-inline text-on-surface-variant">
              {site.signOff}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
