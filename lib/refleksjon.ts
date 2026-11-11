export type ReflectionPoint = {
  title: string
  text: string
}

// Innledningen leses som en oppsummering av forløpet fra uke 33 til uke 46.
export const refleksjonIntro: string[] = [
  "Vi startet i uke 33 med et første møte hos IK Start og en oppgave som var uklar for oss de første ukene. Vi avslutter med StartCompass i bruk i utviklingsavdelingen, bygget på klubbens egne tropper og trenernes egne vurderinger. Mellom de to punktene ligger navigasjonskart og wireframes, en prototype vi viste fram tidlig, brukertester, og en lang rekke ønsker fra trenere som gjerne ville ha mer.",
  "Det meste av det vi har lært i høst, handler mindre om teknologi enn vi trodde på forhånd. Rammeverket kunne vi. Det vi ikke kunne, var å finne ut hva en kunde egentlig trenger når behovet beskrives i form av et Excel-ark, å prioritere når alle ønskene er gode, og å behandle opplysninger om mindreårige med det alvoret det krever.",
]

export const laert: ReflectionPoint[] = [
  {
    title: "En uklar oppgave er normalt",
    text: "De første ukene var vi usikre på hva klubben egentlig trengte. Det som løste det, var ikke flere møter, men å tegne. Navigasjonskart og wireframes ga noe konkret å peke på, og da ble samtalene med klubben presise.",
  },
  {
    title: "Prioritering er selve jobben",
    text: "Trenerne er engasjerte og har kommet med nye ønsker gjennom hele semesteret. Alle var gode, men vi kunne ikke bygge alt. Vi lærte å spørre hva et nytt ønske skal komme i stedet for, framfor å svare ja til alt.",
  },
  {
    title: "Personvern er en premiss, ikke et påbygg",
    text: "Løsningen behandler opplysninger om mindreårige. Derfor ble roller og tilgang bestemt tidlig og ikke skrudd på til slutt: nekt som standard, revisjonslogg for oppslag på enkeltspillere, og ingen lenker til sider som ikke finnes ennå.",
  },
  {
    title: "Møt brukerne der de er",
    text: "Trenerne jobbet allerede i Excel-ark, både for suksesjonsplanlegging og for spilletid. I stedet for å be dem endre måten de jobber på, lagde vi import av arkene deres. Løsningen la seg inntil arbeidet som allerede var der.",
  },
  {
    title: "Ekte data endrer kravene",
    text: "Da testdataene ble byttet ut med klubbens egne tropper i oktober, ble alt strengere. Arkene måtte tolkes og kobles riktig mot spillerne, databasetabellene ble stengt for tilgang utenfra, løsningen ble skjult for søkemotorer, og personvernerklæringen måtte skrives.",
  },
  {
    title: "Fire personer i samme kodebase",
    text: "Vi har jobbet med egne brancher og pull requests hele veien, 68 på applikasjonen og 28 på denne nettsiden. Det tok litt tid å venne seg til, men det gjorde at ingen overskrev hverandre, og at vi faktisk leste koden til hverandre.",
  },
]

export const lureValg: ReflectionPoint[] = [
  {
    title: "Vi tegnet før vi kodet",
    text: "Navigasjonskart og wireframes i uke 34 og 35 ga oss et felles bilde internt og noe å vise klubben. Det kostet to uker, og sparte oss for å bygge feil.",
  },
  {
    title: "Vi viste prototypen tidlig",
    text: "Første utkast ble vist til veilederne i uke 36, før det var mye å rive ned. Tilbakemeldingene kom mens de fortsatt var billige å ta hensyn til.",
  },
  {
    title: "Brukertester mens designet ennå var mykt",
    text: "Brukertestene i uke 37 fant ting vi ikke ville sett selv, og vi rakk å endre designet før flere funksjoner ble bygget oppå det.",
  },
  {
    title: "Samtykke som hendelseslogg",
    text: "Samtykke lagres som hendelser som ikke kan endres eller slettes, ikke som et felt som overskrives. Klubben må kunne dokumentere hva som var lov når, og et felt som overskrives sletter nettopp den dokumentasjonen.",
  },
  {
    title: "Avviket regnes ut, aldri lagret",
    text: "Avstanden mellom spillerens og trenerens svar regnes ut hver gang en side vises. Et lagret avvik er en påstand om en mindreårig som ellers blir liggende igjen etter at svarene er rettet eller samtykket trukket.",
  },
  {
    title: "Ingen oppdiktede data, og ingen tomme lenker",
    text: "Det som vises i løsningen, er trenernes egne tall. Sider vi ikke har bygget, er ikke lenket til fra menyen: en lenke til en tom side koster et klikk å oppdage, og det er verre enn ingen lenke.",
  },
  {
    title: "Vi skrev dokumentasjonen underveis",
    text: "README og dokumentasjonen i repoet er ført på norsk gjennom hele semesteret, med egne notater for hver større funksjon. Det gjorde det lettere å ta opp tråden etter en pause, og det er det neste gruppe faktisk trenger.",
  },
]

export const annerledes: ReflectionPoint[] = [
  {
    title: "Avklart personvernformalitetene før de ekte dataene",
    text: "De ekte dataene kom inn i den delte utviklingsbasen i oktober, mens meldingen til Sikt fortsatt var et utkast. Rekkefølgen burde vært motsatt. Det formelle sporet må gå parallelt med utviklingen fra dag én, ikke komme etter at løsningen er klar.",
  },
  {
    title: "Bestemt språket i grensesnittet tidlig",
    text: "Vi bygde grensesnittet på engelsk og oversatte det til norsk i oktober, med en språkvelger på toppen. Å oversette i etterkant kostet mer enn å bygge det tospråklig fra starten ville gjort.",
  },
  {
    title: "Tatt avgjørelsen om tester én gang",
    text: "Vi satte opp et testprosjekt tidlig og fjernet det senere, og verifiserer nå ved å kjøre appen. Begge valgene kan forsvares, men vi brukte tid på å gå to veier i samme spørsmål.",
  },
  {
    title: "Færre halvferdige spor samtidig",
    text: "Tofaktorpålogging ble lagt inn og tatt ut igjen, og refleksjonsflyten i 5C ble lagt inn, reversert og lagt inn på nytt. Vi ville holdt oss til én ting av gangen og gjort den ferdig før vi begynte på neste.",
  },
  {
    title: "Ført dagboken fortløpende",
    text: "Dagboken ble skrevet i rykk og napp. Fem linjer hver fredag er enklere enn å huske en måned bakover, og det gir et riktigere bilde av hva som faktisk skjedde.",
  },
  {
    title: "Stilt klubben de åpne spørsmålene tidligere",
    text: "Noen avgjørelser er klubbens å ta, blant annet om trenere skal se alle spillere. De sto åpne lenger enn nødvendig, fordi vi ikke stilte spørsmålet tydelig nok i august.",
  },
]

export const videre: string[] = [
  "StartCompass er i bruk med klubbens egne data, og det som gjenstår står dokumentert i repoet, slik at arbeidet kan tas videre. Vi sitter igjen med erfaring vi ikke kunne lest oss til: hvordan en oppgave blir tydelig gjennom å tegne den, hvordan man prioriterer når alle ønsker er gode, og hva det faktisk krever å bygge noe som behandler opplysninger om barn.",
  "Det vi tar med oss tydeligst, er at de vanskeligste spørsmålene i prosjektet ikke var tekniske. De handlet om hvem som skal se hva, hva klubben har lov til, og hva som er viktigst å få på plass først. Det er også de spørsmålene vi har blitt klart bedre på i løpet av høsten.",
  "Vi vil takke IK Start og veilederne våre for et semester der vi har fått bygge noe klubben skal bruke, og ikke bare noe som skulle leveres inn.",
]
