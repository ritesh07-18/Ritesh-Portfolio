import { capabilities } from "@/config/site";
import { Icon } from "@/components/icon";

export function Capabilities() {
  return (
    <section id="capabilities" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col gap-space-xs max-w-xl pb-space-xl">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            CAPABILITIES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            What I Build
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            From system architecture to production-grade deployment across
            platforms. Everything designed for pragmatic performance and real human
            usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-code-inline text-code-inline text-secondary font-semibold">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                    <Icon name={item.icon} className="text-[20px] text-on-surface" />
                  </div>
                </div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
              <div className="pt-space-md font-code-inline text-[11px] text-outline">
                {item.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
