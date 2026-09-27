import { flagship } from "@/config/site";
import { Icon } from "@/components/icon";

export function Flagship() {
  return (
    <section id="featured" className="w-full py-space-3xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col gap-space-xs pb-space-lg">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            FLAGSHIP PRODUCT
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Featured Product
          </h2>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-lg">
            <div className="flex flex-col gap-space-sm max-w-2xl">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase font-bold">
                  Founder
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase">
                  Mobile App
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase">
                  Full-Stack
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase">
                  Hyperlocal Platform
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-caps text-label-caps uppercase font-semibold">
                  Production
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                {flagship.name}
              </h3>
              <p className="font-title-sm text-title-sm text-secondary font-medium">
                {flagship.tagline}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant pt-2 leading-relaxed">
                {flagship.description}
              </p>
            </div>
            <div className="flex lg:flex-col items-start lg:items-end gap-space-md">
              <a
                href={flagship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-primary-container transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Explore {flagship.name}</span>
                <Icon name="arrow_outward" className="text-[16px]" />
              </a>
              <span className="font-code-inline text-code-inline text-outline">
                {flagship.version}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container-low p-4 rounded-xl">
            {flagship.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-1 border-l-2 border-secondary pl-3"
              >
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  {metric.label}
                </span>
                <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full bg-surface rounded-xl p-5 md:p-8 flex flex-col gap-space-lg shadow-inner">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-md border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold font-title-sm">
                  OD
                </div>
                <div>
                  <div className="font-title-sm text-title-sm text-on-surface font-semibold">
                    {flagship.name} Gateway
                  </div>
                  <div className="font-code-inline text-[12px] text-outline">
                    Selected: Hamirpur District [HP-22]
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-code-inline text-[12px] shadow-sm">
                  Live Feed: 14 District Hubs
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
              {flagship.directories.map((dir) => (
                <div
                  key={dir.title}
                  className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-2"
                >
                  <Icon name={dir.icon} className="text-secondary text-[24px]" />
                  <span className="font-title-sm text-[15px] font-semibold text-on-surface">
                    {dir.title}
                  </span>
                  <span className="font-code-inline text-[11px] text-on-surface-variant">
                    {dir.meta}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <Icon name="verified_user" className="text-[18px]" />
                </div>
                <div>
                  <span className="font-title-sm text-[14px] font-semibold text-on-surface block">
                    Zero-Friction Merchant Directory
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Every business undergoes KYC verification and geofence mapping
                    before discovery inclusion.
                  </span>
                </div>
              </div>
              <span className="font-code-inline text-[12px] text-secondary font-medium whitespace-nowrap">
                Instant Search Engine &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
