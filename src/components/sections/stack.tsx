import { stack } from "@/config/site";
import { Icon } from "@/components/icon";

export function Stack() {
  return (
    <section id="stack" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col gap-space-xs max-w-xl pb-space-xl">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            ENGINEERING FOUNDATION
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Tools I Build With
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Battle-tested technologies and tooling I use across production
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {stack.map((group) => (
            <div
              key={group.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                  <Icon
                    name={group.icon}
                    className={
                      group.iconTone === "accent"
                        ? "text-[18px] text-secondary"
                        : "text-[18px] text-on-surface"
                    }
                  />
                </div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">
                  {group.title}
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-code-inline text-code-inline px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
