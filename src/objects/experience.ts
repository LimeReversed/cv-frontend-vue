import Experience from '@/classes/experience'
import tags from '@/objects/tags'
import Project from '@/classes/project'

// 1 - 2 Beginner
// 3 - 4 Mediocre
// 5 - 6 Confident

// Image and links kinda only makes sense in project. Otherwise there would have to be html code for the description so that the link works, or to put the image in the right place.
// In project we have one place for images, and links. And they are separate from each other.

// Only have one description, but cut it off after a certain amount of letters?
// Or have short summary as a variable...TLDR

export const jobExperience: Experience[] = [
  // CI/CD
  new Experience(
    'Fullstack- och Apputvecklare',
    'Allevi / Carefox',
    'Göteborg',
    new Date(2021, 9),
    new Date(2025, 0),
    'Carefox erbjuder en tjänst för vårdgivare att veta vilken vård de ska ge till vem och när. Jag utvecklade version 2 av deras medarbetarapp.',
    '',
    [
      new Project(
        'Medarbetarappen',
        'Mitt huvudfokus var att skapa version 2 av deras vårdgivar-app, vars utveckling jag följde från start till release.',
        ['project_images/CarefoxApp.png'],
        'https://carefox.se/funktioner/appen/',
      ),
      new Project(
        'Inloggningssidan',
        'Jag var en del av att utveckla deras webbtjänster. Bland annat skrev jag deras inloggningssida i Vue. Utmaningen var att få sidan att passa alla tänkbara skärmstorlekar.',
        ['project_images/CarefoxLogin.png'],
        '',
      ),
    ],
    [
      tags.typescript,
      tags.javascript,
      tags.docker,
      tags.linux,
      tags.css,
      tags.scss,
      tags.vue,
      tags.vueX,
      tags.nativescriptVue,
      tags.sql,
      tags.php,
      tags.androidStudio,
    ],
  ),

  new Experience(
    'Apputvecklare',
    'Queenslab',
    'Göteborg',
    new Date('2021-01'),
    new Date(2021, 4),
    'Detta var en praktik där jag utvecklade min första mobilapp',
    '',
    [
      new Project(
        'Saleor-appen',
        'En kund inom handeln ville kunna skanna QR-koden för en vara, och beställa mer av varan via denna app. Den största utmaningen var att lära mig hur jag via React-Native får tillgång till mobilens olika delar, exempelvis kameran för att skanna koder.',
        ['project_images/SaleorApp.jpg'],
        '',
      ),
    ],
    [tags.typescript, tags.reactNative, tags.css, tags.graphql],
  ),

  new Experience(
    'Utvecklare Frontend',
    'Healthmakers Technologies / Kura',
    'Göteborg',
    new Date(2020, 7),
    new Date(2020, 10),
    'Jag praktiserade på Kura, en tjänst som underlättar kommunikationen mellan vårdtagare och deras läkare.',
    '',
    [
      new Project(
        'Inloggningssidan',
        'Jag lade grunden för deras inloggningssida för vårdtagare',
        ['project_images/InloggningKura.jpg'],
        '',
      ),
    ],
    [tags.typescript, tags.vue, tags.css],
  ),
]

export const hobbyExperience: Experience[] = [
  new Experience(
    'Miranda Random',
    '',
    '',
    new Date(2020),
    new Date(2024),
    'Miranda Random är en personlighet jag skrev för att underhålla tittare på mina livestreams.',
    '',
    [
      new Project(
        'Ordslumpare',
        'Den mest centrala delen är att skapa humoristiskt absurda meningar genom att slumpa ord från min databas. Hon kan svara ja/nej, ge visdomsord, och fortune cookies mm. En stor utmaning var att lägga till tillräckligt med logik för att meningarna ska vara grammatiskt korrekta, utan att ta bort absurditeten.',
        ['project_images/MirandaWisdomRandomizing.png', 'project_images/MirandaWisdomResult.png'],
        '',
      ),
    ],
    [tags.cSharp, tags.sql, tags.sqlite],
  ),
]

export const education: Experience[] = [
  // Datalogi, mern, fullstack, CI/CD
  new Experience(
    '.NET- och Webbutvecklare',
    'Campus Mölndal',
    '',
    new Date(2019),
    new Date(2021),
    '',
    '',
    [],
    [
      tags.cSharp,
      tags.sql,
      tags.html,
      tags.javascript,
      tags.css,
      tags.scrum,
      tags.react,
      tags.redux,
    ],
  ),
  new Experience(
    'Kotlin + Jetpack',
    'Udemy',
    'Här fick jag en kickstart på min resa att utveckla appar med Kotlin.',
    new Date(2025, 0),
    new Date(2025, 2),
    '',
    '',
    [],
    [tags.kotlin, tags.androidStudio],
  ),
  // UX
  new Experience(
    'Kandidatexamen, Media- och kommunikationsvetenskap',
    'Högskolan i Halmstad',
    '',
    new Date(2010),
    new Date(2013),
    '',
    '',
    [],
    [],
  ),
]
