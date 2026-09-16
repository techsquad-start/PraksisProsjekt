export type DagbokEntry = {
  week: string
  title: string
  body: string
}

// Eldste først - dagboken leses som et forløp gjennom semesteret.
export const dagbokEntries: DagbokEntry[] = [
  {
    week: "Uke 33",
    title: "Første møte med bedriften",
    body: "Første møte med bedriften og presentasjon av prosjekter for gruppene.",
  },
  {
    week: "Uke 34",
    title: "Prosjektet er i gang",
    body: "Andre møte med bedriften. Oppgaven var fortsatt litt uklar i starten av uken, men vi kom skikkelig i gang mot slutten. Vi satte opp prosjektet i Visual Studio Code med MVC-struktur, og fikk laget navigasjonskart og wireframes. Nettsiden til IS-302 ble også ferdigstilt.",
  },
  {
    week: "Uke 35",
    title: "Fra skisse til prototype",
    body: "Denne uken har vi ferdigstilt navigasjonskartet og wireframene. Med designgrunnlaget på plass gikk vi videre og lagde en fungerende prototype av applikasjonen.",
  },
  {
    week: "Uke 36",
    title: "Visning av prototype",
    body: "Vi viste første utkast av prototypen til veilederne våre og fikk gode tilbakemeldinger. Videreutviklet frontend, la til flere funskjoner."
  },
  {
    week: "Uke 37",
    title: "Utvikling av prototype",
    body: "Trenerene har ferdigutviklet spørsmålene vi skal bruke. De kom også med flere ønsker og implementeringer de ønsker i løsningen. Fikk gjennomført noen brukertester for å identifisere endringer som må gjøres i design. Jobbet med dette 9/9.",
  },
]
