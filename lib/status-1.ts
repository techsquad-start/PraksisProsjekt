export type StatusImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type StatusSection = {
  title: string
  paragraphs: string[]
  image?: StatusImage
}

// Bildene ligger i public/images/status-1/.
export const status1Sections: StatusSection[] = [
  {
    title: "Om IK Start",
    paragraphs: [
      "IK Start er en fotballklubb fra Kristiansand, stiftet i 1905. Klubben driver med toppfotball, og A-laget spiller i Eliteserien i 2026 etter opprykket fra OBOS-ligaen i fjor. Hjemmebanen er Sparebanken Norge Arena Kristiansand, og klubben ble seriemester i 1978 og 1980. Inntektene kommer blant annet fra sponsorer, billettsalg, medieavtaler og medlemskontingenter.",
    ],
    image: {
      src: "/images/status-1/arena.jpg",
      alt: "Gruppebilde på Sparebanken Norge Arena Kristiansand, med tribunen og banen i bakgrunnen.",
      width: 1297,
      height: 849,
    },
  },
  {
    title: "Våre arbeidsoppgaver",
    paragraphs: [
      "Vi utvikler StartCompass, en digital trenerhub for utviklingsavdelingen. Spillerne vurderer seg selv på de fem C-ene hver uke, og løsningen viser avviket mellom spillerens egen vurdering og trenerens forventning.",
      "Etter de første møtene med klubben laget vi navigasjonskart og wireframes. Deretter satte vi opp prosjektet med MVC-struktur og bygde en første fungerende prototype. Vi har vist prototypen til veilederne våre og fått gode tilbakemeldinger. Siden har vi videreutviklet frontend, lagt til flere funksjoner og gjennomført brukertester for å finne ut hva som må endres i designet.",
    ],
    image: {
      src: "/images/status-1/startcompass-presentasjon.jpg",
      alt: "StartCompass vises på storskjerm under en presentasjon i et møterom.",
      width: 2000,
      height: 1500,
    },
  },
  {
    title: "Utfordringer og spennende erfaringer",
    paragraphs: [
      "I starten var oppgaven litt uklar, og det tok litt tid før vi fikk et tydelig bilde av hva klubben trengte. Løsningen skal også håndtere opplysninger om mindreårige. Derfor må vi tenke nøye gjennom personvern og rollebasert tilgang, slik at ingen ser mer enn de trenger. I tillegg skal svært ulike brukere bruke løsningen, fra unge spillere og foresatte til trenere og administratorer, og den må være enkel for alle.",
      "Det er spennende å jobbe med en klubb som nylig har rykket opp til Eliteserien (Rykker snart ned…) og tydelig satser på spillerutvikling. Trenerne er engasjerte og de har ferdigstilt spørsmålene vi skal bruke, og har kommet med nye ønsker underveis. Det gir oss nyttige innspill, men vi må også prioritere hva som er viktigst å få på plass først.",
    ],
    image: {
      src: "/images/status-1/gjennomgang.jpg",
      alt: "Gjennomgang av en graf på storskjerm i et møterom.",
      width: 2000,
      height: 1500,
    },
  },
  {
    title: "Annet",
    paragraphs: [
      "IK Start har en samarbeidsavtale med Universitetet i Agder, og flere andre UiA-studenter har praktikantstillinger rundt lagene i utviklingsavdelingen. Det er inspirerende å være en del av et miljø der klubben og universitetet jobber sammen om spillerutvikling. Alt i alt er vi fornøyde med praksisprosjektet så langt. Nå gleder vi oss til å bygge inn funnene fra brukertestene og trenernes ønsker i løsningen.",
    ],
    image: {
      src: "/images/status-1/tribune.jpg",
      alt: "Gruppebilde på tribunen.",
      width: 1268,
      height: 1199,
    },
  },
]
