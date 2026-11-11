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
  {
    week: "Uke 38",
    title: "Presentasjon og Status 1",
    body: "Vi presenterte prosjektet for de andre studentgruppene og fullførte Status 1. Vi fikk også flere tilbakemeldinger og ønsker om nye funksjoner i appen. I tillegg jobbet vi med å forbedre brukergrensesnittet, noe som har vært en veldig viktig prioritet.",
  },
  {
    week: "Uke 39",
    title: "Nye funksjoner og forbedringer",
    body: "Denne uken la vi til flere funksjoner som Start har etterspurt. Trenernes Excel-ark for suksesjonsplanlegging ble bygget inn som egne sider i appen, med 1., 2. og 3. posisjon og oversikt over hvem som har vurdert spilleren. Vi lagde også «beste ellever»: en bane i riktig målestokk med 3-5-2, der trenerne kan flytte spillere rundt og se vurderingene endre seg underveis. I tillegg blir spillerne nå ønsket velkommen med fornavn og bilde når de logger inn, vi bruker spillernavn i stedet for koder, og vi utvidet Identity-sidene med oversikt, nøkkelinnsikt og utvikling.",
  },
  {
    week: "Uke 40",
    title: "Høstferie",
    body: "Høstferie.",
  },
  {
    week: "Uke 41",
    title: "Fra testdata til ekte data",
    body: "Denne uken erstattet vi testdataene med ekte spillerstaller og godkjente spillerbilder fra IK Start, og lagene har fått klubbens egne navn: G14, G15 og G17. Vi lagde også en import av trenernes utfylte ark for suksesjonsplanlegging, slik at løsningen nå bare viser ekte data. Prosjektet ble oppgradert til .NET 10 og gjort klart for drift på server. I tillegg ryddet vi i dokumentasjonen, la til egne feilsider og egen favicon, og skjulte appen for søkemotorer.",
  },
  {
    week: "Uke 42",
    title: "Spilletid, personvern og språkvelger",
    body: "Trenerne ønsket å se spilletid ved siden av suksesjonsplanleggingen, så vi har lagt til en funksjon der de laster opp sitt ukentlige ark med minutter og posisjoner. Arket vises per lag og per spiller. Har en spiller ingen vurderinger i inneværende periode, vises nå vurderingene fra forrige periode. Vi har også stengt databasetabellene for Supabase sitt Data API og oppdatert dokumentasjonen og Sikt-meldingen nå som løsningen inneholder ekte data. Resten av uken ble den travleste i hele prosjektet: vi skrev personvernerklæringen med IK Start som behandlingsansvarlig, åpnet for at klubben kan opprette spillere og foresatte i appen, og la inn en språkvelger slik at grensesnittet finnes på både norsk og engelsk. Identity Benchmarking ble lagt om til PDF-rapporter, forsiden ble gjort om til en startside per rolle, og vi la til opplasting av kampdata. Tofaktorpålogging ble forsøkt, men reversert igjen fordi den ikke var klar.",
  },
  {
    week: "Uke 43",
    title: "Enklere navigasjon",
    body: "Vi ryddet i navigasjonen. Menyen er ikke lenger skjult bak en knapp, hver rolle ser bare sidene den faktisk bruker, og sider inne i en seksjon har fått en vei tilbake øverst til venstre. Forsiden fikk oppgavekortene opp på det gule med svarte knapper. Vi la også om loggingen av lagoversikten i 5C, slik at et oppslag på et helt lag blir én skriving i stedet for én per spiller. På nettsiden la vi ut statusvideoen på Status 2.",
  },
  {
    week: "Uke 44",
    title: "Gjennomgang på video",
    body: "Denne uken spilte vi inn en kort gjennomgang av prosjektet og la den ut på Status 2, slik at løsningen kan ses i bruk uten at noen må logge inn. Det ble ingen utvikling i appen denne uken.",
  },
  {
    week: "Uke 45",
    title: "Personverngjennomgang",
    body: "Vi gikk gjennom hele kodebasen mot dokumentasjonen for å finne steder der appen, eller vår egen beskrivelse av den, lovet noe koden ikke gjør. Fire punkter ble rettet: samtykkeskjemaet beskriver nå hva klubben har lov til å bruke svarene til i stedet for å love foresatte noe det ikke holder, oppslag på foresattsiden havner i revisjonsloggen, kladden til et uferdig skjema ligger ikke lenger igjen på maskinen etter at fanen lukkes, og kvitteringscookien som navngir spillere er herdet som de andre. Resten av uken gikk til å utvide Identity Benchmarking med definisjoner av målepunktene og regler for hvilken datakilde tallene faktisk kommer fra.",
  },
  {
    week: "Uke 46",
    title: "Siste uke og refleksjon",
    body: "Siste uken i praksisperioden. Arbeidet med datakilder i Identity Benchmarking ble slått sammen i appen, og vi skrev det avsluttende refleksjonsnotatet her på nettsiden. Nå gjenstår den avsluttende samlingen, og noen avgjørelser som er klubbens å ta — blant annet hva som skjer med de ekte dataene i utviklingsbasen fram til meldingen til Sikt er behandlet.",
  },
]
