import { timeline } from "@/config/site";

export function Timeline() {
  return (
    <section id="experience" className="w-full py-space-3xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col gap-space-xs max-w-xl pb-space-xl">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            EVOLUTION
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            From Idea to Product
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A progression from academic experimentation to founder-led product
            execution.
          </p>
        </div>

        <div className="flex flex-col gap-space-md">
          {timeline.map((milestone, index) => (
            <div
              key={milestone.number}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="font-code-inline text-code-inline text-secondary font-bold pt-1">
                  {milestone.number}
                </span>
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {milestone.description}
                  </p>
                </div>
              </div>
              <span
                className={
                  index === timeline.length - 2
                    ? "font-label-caps text-label-caps uppercase text-secondary font-semibold shrink-0 md:text-right"
                    : "font-label-caps text-label-caps uppercase text-outline shrink-0 md:text-right"
                }
              >
                {milestone.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
