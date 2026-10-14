import type { StatusSection } from "@/lib/status-1"

// Bildene ligger i public/images/status-2/.
export const status2Sections: StatusSection[] = [
  {
    title: "Siden sist",
    paragraphs: [
      "Siden Status 1 har vi gått fra en prototype med testdata til en løsning som bygger på klubbens egne data. Vi har lagt inn flere av funksjonene trenerne har bedt om, erstattet testdataene med ekte spillerstaller og trenernes egne vurderinger, og gjort løsningen klar for drift på server. Uke 40 var høstferie.",
    ],
    image: {
      src: "/images/status-2/tribune.jpg",
      alt: "Ser ut over banen fra tribunen på Sparebanken Norge Arena Kristiansand mens et av lagene trener.",
      width: 1125,
      height: 1500,
    },
  },
  {
    title: "Nye funksjoner",
    paragraphs: [
      "Trenernes Excel-ark for suksesjonsplanlegging er nå bygget inn i appen. Hver trener vurderer spillerne jevnlig, og løsningen samler vurderingene og viser posisjoner, potensial og hvem som har vurdert. Har en spiller ingen vurderinger i inneværende periode, vises de fra forrige periode.",
      "Vi har også laget «beste ellever», en bane i riktig målestokk med formasjonen 3-5-2 som trenerne ønsket. Trenerne kan flytte spillere rundt og se vurderingene endre seg underveis, inspirert av Football Manager. Den nyeste funksjonen er spilletid og posisjoner: trenerne laster opp sitt ukentlige ark, og løsningen viser minutter og posisjoner per lag og per spiller. Slik kan en spiller som er vurdert med høyt potensial ses opp mot hvor mye og hvor varierte posisjoner hen faktisk får spille. I tillegg blir spillerne nå ønsket velkommen med fornavn og bilde når de logger inn.",
    ],
    image: {
      src: "/images/status-2/beste-ellever.jpg",
      alt: "Beste ellever i StartCompass: en bane med formasjonen 3-5-2, lagvurdering per lagdel og en liste med innbyttere. Navn, bilder og vurderinger er sladdet.",
      width: 1966,
      height: 1522,
    },
  },
  {
    title: "Fra testdata til ekte data",
    paragraphs: [
      "Løsningen bruker nå ekte spillerstaller og spillerbilder som IK Start har godkjent, og lagene har fått klubbens egne navn: G14, G15 og G17. Vi har laget en import av trenernes utfylte vurderingsark og fjernet alle oppdiktede data, slik at det som vises bygger på trenernes egne tall.",
      "Med ekte data om mindreårige har personvern blitt enda viktigere. Vi har oppdatert meldingen til Sikt, stengt databasetabellene for tilgang utenfra og skjult løsningen for søkemotorer. Prosjektet er også oppgradert til .NET 10 og gjort klart for drift på server.",
    ],
    image: {
      src: "/images/status-2/identitet-presentasjon.jpg",
      alt: "Presentasjon av StartCompass på storskjerm, med G17 sammenlignet mot klubbens mål for akademiet.",
      width: 1500,
      height: 1125,
    },
  },
  {
    title: "Utfordringer",
    paragraphs: [
      "Trenerne er engasjerte og kommer stadig med nye ønsker. Det er positivt, men vi må hele tiden prioritere hva som gir mest verdi. Overgangen til ekte data krevde også at trenernes Excel-ark måtte tolkes og kobles riktig mot spillerne. I tillegg har vi møtt tekniske begrensninger, blant annet i hvor mange samtidige databasetilkoblinger Supabase tillater.",
    ],
    image: {
      src: "/images/status-2/arbeidsokt.jpg",
      alt: "Gruppen jobber sammen rundt et bord med bærbare PC-er, med listen over pull requests på skjermen.",
      width: 1125,
      height: 1500,
    },
  },
  {
    title: "Veien videre",
    paragraphs: [
      "Fremover skal vi videreutvikle funksjonene sammen med trenerne, teste løsningen med ekte brukere og få den i drift på server. Vi skal også fortsette arbeidet med personvern og rollebasert tilgang, slik at løsningen er trygg å bruke for spillere, foresatte og trenere.",
    ],
  },
]
