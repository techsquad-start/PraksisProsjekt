import { PageHero } from "@/components/page-hero"
import {
  annerledes,
  laert,
  lureValg,
  refleksjonIntro,
  videre,
} from "@/lib/refleksjon"

export default function RefleksjonPage() {
  return (
    <div>
      <PageHero
        title="Refleksjon"
        lead="Avsluttende refleksjon over praksisperioden: hva vi har lært, hva vi gjorde lurt, og hva vi ville gjort annerledes."
      />

      <div className="pb-[76px]">
        {/* Slik gikk semesteret */}
        <section className="px-5 pt-[60px]">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
              Slik gikk semesteret
            </h2>
            <div className="space-y-3.5">
              {refleksjonIntro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-[1.75] text-muted-foreground text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Hva vi har lært */}
        <section className="px-5 pt-[60px]">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
              Hva vi har lært
            </h2>
            <p className="mb-10 max-w-[680px] text-base leading-[1.75] text-muted-foreground text-pretty">
              Seks ting vi tar med oss videre, og som vi ikke kunne lest oss til
              på forhånd.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
              {laert.map((point) => (
                <article
                  key={point.title}
                  className="border border-t-[5px] border-border border-t-brand-blue bg-card p-6"
                >
                  <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-muted-foreground text-pretty">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Lure ting vi gjorde */}
        <section className="px-5 pt-[60px]">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
              Lure ting vi gjorde
            </h2>
            <p className="mb-10 max-w-[680px] text-base leading-[1.75] text-muted-foreground text-pretty">
              Valg som kostet noe da vi tok dem, og som vi er glade for i dag.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
              {lureValg.map((point) => (
                <article
                  key={point.title}
                  className="border border-l-[6px] border-border border-l-brand-ink bg-card px-7 py-6"
                >
                  <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-muted-foreground text-pretty">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dette ville vi gjort annerledes */}
        <section className="px-5 pt-[60px]">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
              Dette ville vi gjort annerledes
            </h2>
            <p className="mb-10 text-base leading-[1.75] text-muted-foreground text-pretty">
              Ingenting av dette veltet prosjektet, men alt er noe vi ville tatt
              tak i tidligere om vi startet på nytt i dag.
            </p>

            <ol className="space-y-5">
              {annerledes.map((point, index) => (
                <li
                  key={point.title}
                  className="border border-l-[6px] border-border border-l-brand-blue bg-card px-7 py-6"
                >
                  <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2.5 font-display text-[25px] font-bold uppercase leading-[1.05] text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-muted-foreground text-pretty">
                    {point.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Hva vi tar med videre */}
        <section className="px-5 pt-[60px]">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-[18px] h-[5px] w-[46px] bg-brand-blue" />
            <h2 className="mb-3.5 font-display text-[clamp(30px,4.2vw,42px)] font-extrabold uppercase leading-none text-foreground">
              Hva vi tar med videre
            </h2>
            <div className="space-y-3.5">
              {videre.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-[1.75] text-muted-foreground text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
