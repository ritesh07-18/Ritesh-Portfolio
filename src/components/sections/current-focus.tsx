import { currentFocus } from "@/config/site";

export function CurrentFocus() {
  return (
    <section className="w-full py-space-3xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-md flex flex-col gap-space-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
                IN ACTIVE DEVELOPMENT
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Currently Building
            </h2>
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl font-normal leading-snug">
              Building OneDistrict, experimenting with AI agents, and continuously
              turning ideas into working products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
            {currentFocus.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
