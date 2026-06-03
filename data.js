const SITE_DATA = {
  candidate: {
    name: "Lukáš Anderko",
    role: "Kandidát na primátora mesta Prešov",
    city: "Prešov",
    slogan: "Prešov s energiou, skúsenosťou a rozvahou.",
    intro:
      "Moderný, otvorený a lepšie spravovaný Prešov potrebuje vedenie, ktoré počúva ľudí, rozhoduje vecne a dokáže spájať skúsenosti s novou energiou.",
    image: "assets/kandidat.jpg",
    imageAlt: "Portrét kandidáta Lukáš Anderko"
  },
  navigation: [
    { label: "Úvod", target: "uvod" },
    { label: "O mne", target: "o-mne" },
    { label: "Program", target: "program" },
    { label: "Prečo kandidujem", target: "preco" },
    { label: "Aktuality", target: "aktuality" },
    { label: "Podpora", target: "podpora" },
    { label: "Kontakt", target: "kontakt" }
  ],
  about: {
    kicker: "O kandidatovi",
    title: "Skúsenosti pre mesto. Energia pre zmenu.",
    text:
      "Lukáš Anderko chce priniesť do vedenia mesta kombináciu energie, skúseností a rozvážneho rozhodovania. Jeho cieľom je moderný, otvorený a lepšie spravovaný Prešov, v ktorom samospráva komunikuje zrozumiteľne a riešenia vznikajú blízko k ľuďom.",
    points: [
      "Slušná a vecná komunikácia s obyvateľmi",
      "Rozhodovanie podľa jasných priorít a potrieb mesta",
      "Dôraz na službu mestu, transparentnosť a každodenné problémy ľudí"
    ]
  },
  programIntro:
    "Program je postavený na realistických krokoch, otvorenej komunikácii a jasných prioritách pre každodenný život v Prešove.",
  program: [
    {
      title: "Doprava, cesty a parkovanie",
      points: [
        "Presadzovať systémové riešenia dopravy v kritických miestach.",
        "Zlepšovať údržbu ciest, chodníkov a priechodov.",
        "Hľadať rozumné možnosti parkovania v spolupráci s obyvateľmi."
      ]
    },
    {
      title: "Čistota a verejný poriadok",
      points: [
        "Nastaviť jasné priority pre čistenie ulíc a verejných priestranstiev.",
        "Zlepšovať dostupnosť košov a starostlivosť o problémové lokality.",
        "Podporovať rýchlejšie riešenie podnetov od obyvateľov."
      ]
    },
    {
      title: "Rodiny, deti a mladí ľudia",
      points: [
        "Vytvárať bezpečné priestory pre rodiny a komunitný život.",
        "Podporovať dostupné voľnočasové aktivity pre deti a mladých.",
        "Otvoriť komunikáciu s rodičmi, školami a komunitami."
      ]
    },
    {
      title: "Seniori a sociálna pomoc",
      points: [
        "Posilňovať dostupnosť informácií a pomoci pre seniorov.",
        "Podporovať služby, ktoré pomáhajú ľuďom ostať aktívnymi.",
        "Hľadať riešenia pre osamelých a zraniteľných obyvateľov."
      ]
    },
    {
      title: "Školy a škôlky",
      points: [
        "Zlepšovať podmienky v školách a škôlkach podľa reálnych potrieb.",
        "Podporovať bezpečné okolie škôl a prehľadné dopravné riešenia.",
        "Komunikovať s riaditeľmi, učiteľmi a rodičmi o prioritách."
      ]
    },
    {
      title: "Bezpečnosť",
      points: [
        "Zamerať sa na prevenciu a viditeľnú prítomnosť v problémových miestach.",
        "Podporovať spoluprácu mesta, polície a komunít.",
        "Zlepšovať osvetlenie a prehľadnosť verejných priestorov."
      ]
    },
    {
      title: "Transparentné hospodárenie mesta",
      points: [
        "Zvýšiť zrozumiteľnosť rozhodnutí a nakladania s verejnými peniazmi.",
        "Zverejňovať priority a výsledky tak, aby im rozumel bežný obyvateľ.",
        "Presadzovať vecnú kontrolu nákladov a prínosov projektov."
      ]
    },
    {
      title: "Verejný priestor, zeleň a oddych",
      points: [
        "Zlepšovať starostlivosť o parky, ihriská a oddychové zóny.",
        "Chrániť zeleň a hľadať rozumné doplnenie tieňa v meste.",
        "Zapájať obyvateľov do plánovania verejných priestorov."
      ]
    },
    {
      title: "Šport, kultúra a komunitný život",
      points: [
        "Podporovať dostupné podujatia pre rôzne generácie.",
        "Rozvíjať športoviská a priestory pre komunitné aktivity.",
        "Spájať mesto, školy, kluby a aktívnych obyvateľov."
      ]
    },
    {
      title: "Moderný úrad a komunikácia s občanmi",
      points: [
        "Zjednodušovať komunikáciu s mestom a riešenie podnetov.",
        "Podporovať prehľadné digitálne služby bez zbytočnej byrokracie.",
        "Nastaviť jasné termíny, zodpovednosti a spätnú väzbu."
      ]
    }
  ],
  why: {
    title: "Prečo kandidujem",
    text:
      "Prešov potrebuje vedenie, ktoré počúva ľudí, rozhoduje rozvážne a má odvahu posúvať mesto dopredu. Kandidujem preto, aby sme viedli slušnú, vecnú a modernú debatu o tom, ako má Prešov vyzerať v najbližších rokoch.",
    quote: "Rozvážne rozhodnutia. Moderný Prešov."
  },
  news: [
    {
      date: "2026-06-01",
      title: "Kampaň pre moderný Prešov sa začína",
      text:
        "Predstavujeme základnú víziu kampane: slušná komunikácia, jasné priority a praktické riešenia pre každodenný život v meste.",
      link: "#program"
    },
    {
      date: "2026-05-24",
      title: "Rozhovory s obyvateľmi v mestských častiach",
      text:
        "Najlepšie podnety prichádzajú priamo z ulíc. Chceme počúvať ľudí v celom Prešove a premietnuť ich skúsenosti do programu.",
      link: ""
    },
    {
      date: "2026-05-12",
      title: "Priority: doprava, čistota a transparentnosť",
      text:
        "Medzi prvé témy kampane patria doprava, verejný poriadok, starostlivosť o priestor a zrozumiteľné hospodárenie mesta.",
      link: "#program"
    }
  ],
  support: {
    title: "Podporte slušnú a modernú kampaň",
    text:
      "Ak vám záleží na budúcnosti Prešova, podporte slušnú, vecnú a modernú kampaň.",
    options: [
      "Sledujte kampaň na Facebooku",
      "Podeľte sa o web s priateľmi",
      "Príďte diskutovať",
      "Napíšte svoj podnet e-mailom"
    ]
  },
  contact: {
    email: "info@lukasanderko.sk",
    phone: "+421 900 000 000",
    facebook: "https://www.facebook.com/",
    note: "Kontaktné údaje sú dočasné placeholdery. Pred zverejnením ich nahraďte reálnymi kontaktmi."
  },
  legal: {
    sponsor: "Zadávateľ: doplniť",
    supplier: "Dodávateľ: doplniť",
    transparentAccount:
      "Transparentný účet: doplniť, ak sa na kandidáta vzťahuje povinnosť",
    candidate:
      "Kandidát: Lukáš Anderko, kandidát na primátora mesta Prešov",
    note:
      "Údaje v tejto sekcii je potrebné pred zverejnením overiť podľa aktuálne platných pravidiel volebnej kampane."
  },
  privacy: {
    text:
      "Táto stránka nepoužíva marketingové cookies a neukladá osobné údaje návštevníkov. Ak bude neskôr pridaná analytika alebo formulár, musí sa doplniť GDPR a cookies text."
  }
};
