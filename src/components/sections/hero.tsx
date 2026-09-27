import { Icon } from "@/components/icon";

const tags = [
  { label: "College", value: "NIT Hamirpur" },
  { label: "School", value: "Jesus and Mary School, Balrampur" },
  { label: "Venture", value: "Founder — OneDistrict" },
  { label: "Specialty", value: "Full-Stack Development" },
  { label: "Focus", value: "AI Agent Builder" },
];

const serviceChips = [
  "All Services",
  "Emergency",
  "Verified Stores",
  "Transit",
];

export function Hero() {
  return (
    <section className="w-full pb-space-3xl pt-space-xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">
                Founder &amp; Full-Stack Developer • NIT Hamirpur
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight">
                Hi, I&apos;m Ritesh Maurya.
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface-variant leading-snug">
                Founder &amp; Full-Stack Developer building apps, websites and
                AI-powered products.
              </p>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              NIT Hamirpur student focused on turning real-world problems into
              practical digital products. Architecting systems with clear utility,
              high resilience, and zero unnecessary friction.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-low text-on-surface font-code-inline text-code-inline"
                >
                  <span className="text-secondary font-semibold">[{tag.label}]</span>{" "}
                  {tag.value}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-surface-container-lowest shadow-sm w-fit">
              <Icon name="verified" className="text-secondary text-[20px]" />
              <span className="font-body-md text-body-md text-on-surface font-medium">
                &ldquo;I build products from idea to working application.&rdquo;
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-space-md pt-2">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary-container transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <Icon name="arrow_downward" className="text-[16px]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm hover:bg-surface-container-low transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Let&apos;s Connect</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
            <div className="absolute -top-12 -right-8 w-72 h-72 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
              <div className="px-4 py-2.5 bg-surface-container flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                </div>
                <div className="px-3 py-0.5 rounded bg-surface-container-lowest font-code-inline text-[11px] text-on-surface-variant flex items-center gap-1">
                  <Icon name="lock" className="text-[12px] text-secondary" />
                  onedistrict.in/live
                </div>
                <Icon name="refresh" className="text-[14px] text-on-surface-variant" />
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Current District
                    </span>
                    <div className="font-title-sm text-title-sm text-on-surface flex items-center gap-1">
                      Hamirpur Hub{" "}
                      <Icon name="expand_more" className="text-[16px] text-secondary" />
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-code-inline text-[11px] font-semibold">
                    1,420 Active Nodes
                  </div>
                </div>

                <div className="px-3 py-2 rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Icon name="search" className="text-[16px]" />
                    <span className="font-body-sm text-body-sm text-outline">
                      Find verified repair, health, logistics...
                    </span>
                  </div>
                  <span className="font-code-inline text-[10px] bg-surface-container-lowest px-1.5 py-0.5 rounded text-on-surface">
                    ⌘K
                  </span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {serviceChips.map((chip, index) => (
                    <span
                      key={chip}
                      className={
                        index === 0
                          ? "px-2.5 py-1 rounded-md bg-primary text-on-primary font-body-sm text-[12px]"
                          : "px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-body-sm text-[12px]"
                      }
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="w-full h-32 rounded-lg bg-surface-container relative overflow-hidden flex flex-col justify-end p-3">
                  <svg
                    className="absolute inset-0 w-full h-full text-outline-variant/30"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        height="20"
                        id="grid-pattern"
                        patternUnits="userSpaceOnUse"
                        width="20"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                        />
                      </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                    <circle cx="120" cy="40" fill="rgba(162, 62, 24, 0.12)" r="16" />
                    <circle cx="120" cy="40" fill="#a23e18" r="4" />
                    <circle cx="240" cy="65" fill="rgba(0, 0, 0, 0.08)" r="12" />
                    <circle cx="240" cy="65" fill="#000000" r="3" />
                  </svg>
                  <div className="relative z-10 px-3 py-1.5 rounded-md bg-surface-container-lowest/95 backdrop-blur-sm shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="font-code-inline text-[11px] text-on-surface font-medium">
                        Real-time Node: Hamirpur Central
                      </span>
                    </div>
                    <span className="font-code-inline text-[11px] text-on-surface-variant font-medium">
                      99.8% Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:-mt-14 lg:-mr-6 w-11/12 max-w-xs bg-surface-container-lowest rounded-xl shadow-lg p-3.5 z-20">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-secondary text-on-secondary flex items-center justify-center">
                    <Icon name="local_shipping" className="text-[14px]" />
                  </div>
                  <span className="font-label-caps text-[10px] uppercase font-semibold text-on-surface">
                    Multiverse City • Dispatch
                  </span>
                </div>
                <span className="font-code-inline text-[10px] text-secondary font-medium">
                  Active Order #842
                </span>
              </div>
              <div className="space-y-1.5 bg-surface-container-low p-2 rounded-lg">
                <div className="flex items-center justify-between font-body-sm text-[12px]">
                  <span className="text-on-surface-variant">Merchant Pickup:</span>
                  <span className="font-medium text-on-surface">
                    City Bakery • Sector 4
                  </span>
                </div>
                <div className="flex items-center justify-between font-body-sm text-[12px]">
                  <span className="text-on-surface-variant">Dispatch ETA:</span>
                  <span className="font-code-inline text-on-surface font-semibold text-secondary">
                    7 mins
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-3 self-start lg:-ml-6 bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-md z-30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                <Icon
                  name="rocket_launch"
                  className="text-[18px] text-secondary"
                />
              </div>
              <div>
                <div className="font-title-sm text-[14px] leading-tight text-on-surface font-semibold">
                  6+ Production Builds
                </div>
                <div className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                  Full-Stack &amp; AI Automations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
