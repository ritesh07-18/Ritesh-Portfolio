import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Flagship } from "@/components/sections/flagship";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Stack } from "@/components/sections/stack";
import { CurrentFocus } from "@/components/sections/current-focus";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="w-full pt-16 bg-surface min-h-screen flex-1">
        <div className="flex flex-col w-full">
          <Hero />
          <Capabilities />
          <Flagship />
          <Projects />
          <Timeline />
          <Stack />
          <CurrentFocus />
          <About />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
