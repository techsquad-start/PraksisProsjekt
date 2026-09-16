import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { asset } from "@/lib/base-path"
import { status1Sections } from "@/lib/status-1"

export default function Status1Page() {
  return (
    <div>
      <PageHero
        title="Status 1"
        lead="Første statusoppdatering fra praksisprosjektet."
      />

      <div className="pb-[76px]">
        {status1Sections.map((section) => (
          <section key={section.title} className="px-5 pt-[60px]">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
              <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
                {section.title}
              </h2>
              <div className="space-y-3.5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-[1.75] text-muted-foreground text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.image && (
                <Image
                  src={asset(section.image.src)}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  sizes="(max-width: 860px) 100vw, 820px"
                  className="mt-8 h-auto w-full border border-border bg-card"
                />
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
