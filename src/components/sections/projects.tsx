import { projects } from "@/config/site";
import { Icon } from "@/components/icon";

export function Projects() {
  return (
    <section id="work" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col gap-space-xs max-w-2xl pb-space-xl">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            ECOSYSTEM BUILDS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Other Products I&apos;ve Built
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            End-to-end applications built for ecosystem partners, local commerce,
            logistics, and civic utility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">
                    {project.category}
                  </span>
                  <Icon name={project.icon} className="text-outline text-[18px]" />
                </div>
                <h3 className="font-headline-md text-[20px] font-semibold text-on-surface">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
              </div>
              <div className="pt-space-md flex flex-wrap gap-1.5 items-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code-inline text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-on-surface"
                  >
                    {tag}
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
