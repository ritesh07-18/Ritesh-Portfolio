import { site } from "@/config/site";
import { Icon } from "@/components/icon";

export function About() {
  return (
    <section id="about" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
              BACKGROUND &amp; PHILOSOPHY
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              More About Me
            </h2>
            <div className="font-code-inline text-code-inline text-outline pt-2">
              NIT Hamirpur • Engineer • Builder
            </div>
          </div>
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-sm flex flex-col gap-space-md">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              I&apos;m {site.name}, a student at <strong>{site.college}</strong>{" "}
              and a product-focused developer. I enjoy building complete products
              rather than only writing isolated pieces of code — from frontend
              interfaces and backend systems to mobile applications, APIs and
              AI-powered workflows.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              My philosophy is rooted in pragmatism: writing maintainable code,
              shipping fast, and solving tangible pain points for real users. Whether
              it&apos;s organizing local commerce across tier-2 cities or
              orchestrating agents that eliminate manual digital labor, my goal is
              always to deliver software that people genuinely depend on.
            </p>
            <div className="pt-2 flex flex-col gap-3 text-on-surface-variant">
              <div className="flex items-center gap-3">
                <Icon name="school" className="text-secondary text-[20px]" />
                <span className="font-code-inline text-code-inline">
                  {site.collegeFull}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="scchool" className="text-secondary text-[20px]" />
                <span className="font-code-inline text-code-inline">
                  {site.school}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
