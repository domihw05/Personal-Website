import heroImg from '../assets/Dom_SoccerPhoto.png'
import nflDataBowlPdf from '../assets/NFLDataBowlExplor.pdf'
import timbersPreview from '../assets/TotalTimbers_Preview.png'
import cmuLogo from '../assets/cmu_logo.png'
import tartanLogo from '../assets/tartan_logo.png'
import metaLogo from '../assets/meta_logo.png'
import aramarkLogo from '../assets/aramarkLogo.png'
import metaselfie from '../assets/metaselfie.jpeg'
import nyu_soccer from '../assets/JumpNyu.JPG'
import soccercmu from '../assets/soccercmu.jpg'
import NFLBigDataBowl from "../assets/NFLBigDataBowl.png"
import aramarkSelfies from '../assets/aramark_selfies.jpeg'
import fightingIrishPreview from '../assets/fightingirish_preview.png'
import readingImg from '../assets/hobbies/reading.jpeg'
import travellingImg from '../assets/hobbies/travelling.jpeg'
import watchingSoccerImg from '../assets/hobbies/watchingsoccer.jpeg'

export { heroImg, nyu_soccer, soccercmu, aramarkSelfies, fightingIrishPreview}

export const featuredProjects = [
  {
    title: 'TotalTimbers',
    category: 'Sports Analytics',
    description:
      'Built a sports analytics social media following with more than 3K followers, dedicated to the Portland Timbers of the MLS.',
    demo: 'https://www.instagram.com/totaltimbers/',
    githubURL: '',
    image: timbersPreview,
    imageAlt: 'Preview of the TotalTimbers Instagram profile',
  },
  {
    title: 'NFL Big Data Bowl',
    category: 'Sports Analytics',
    description:
      'Analyzed NFL player tracking data and encoded multinomial and neural network models in R to predict passing play outcomes given pre-snap predictor variables such as play clock, down, and yards to go.',
    demo: nflDataBowlPdf,
    githubURL: 'https://github.com/domihw05/NFL-Big-Data-Bowl',
    image: NFLBigDataBowl,
    imageAlt: 'Preview of the NFL Big Data Bowl project, showing a plot of model predictions versus actual outcomes.',
  },
  {
    title: 'Python Fighting Irish World Game',
    category: 'Game Development',
    description:
    'This was my term project for 15-112 at Carnegie Mellon University and is\
     called “Fighting Irish World.” It is a single player game similar to Super\
      Mario Bros. Players will select one of three maps. They will then try to\
       evade or kill enemies and collect pots of gold on the way to the finish\
        line on the right side of the map. The game was programmed in Python.',
    demo: 'https://youtube.com/watch?v=0J6zRpfWX_E',
    githubURL: 'https://github.com/domihw05/Fighting-Irish-World-Game-Python-',
    image: fightingIrishPreview,
    imageAlt: 'Preview of the Fighting Irish World Game, showcasing\
     the leprechaun running across the map.',
  }
]

export const experiences = [
  {
    period: 'Summer 2024',
    sortOrder: 2024,
    title: 'IT and Data Science Intern',
    category: 'Aramark',
    description:
      'Worked as a Technology and Data Science Intern for Aramark, who operates\
       the hospitality services at the Nike World Headquarters. Helped build\
        and analyze databases to identify trends to improve service. Assisted\
         with the development and introduction of a mobile app for ordering\
          services around the Nike campus.',
    image: aramarkLogo,
    imageAlt: 'Aramark Logo',
    attachment: '',
    attachmentLabel: '',
  },
  {
    period: 'Jan-Sep 2025',
    sortOrder: 2025.5,
    title: 'Machine Learning Research Assistant',
    category: 'CMU Cognitive Neuroscience Lab (CAOs)',
    description:
      'Developed machine learning models using brain data to further\
       neuroscience discoveries in the Cognitive Neuroscience Lab (CAOs)\
        at CMU. Modeled brain associations to specific words using\
         functional MRI data.',
    image: cmuLogo,
    imageAlt: 'Carnegie Mellon University Logo',
    attachment: '',
    attachmentLabel: '',
  },
  {
    period: 'Summer 2025',
    sortOrder: 2025.6,
    title: 'AI Specialist and Data Science Intern',
    category: 'Aramark Headquarters',
    description:
      "Engineered and deployed Aramark’s AI assistant “Sage” ability to\
       dynamically submit PTO/vacation requests—integrating natural language\
        processing, Kronos and calendar APIs, and Aisera’s AI platform to\
         eliminate manual HR steps. Built agentic AI data interfaces in \
         Snowflake and Aisera–leveraging LLM-driven capabilities to enable \
         non-technical users to query hospitality metrics via natural language.\
          Developed and maintained Workflow and Hyperflow modules in Aisera’s\
           AI Platform to orchestrate end-to-end decision flows—automating\
            service processes and reducing manual handoffs.",
    image: aramarkLogo,
    imageAlt: 'Aramark Logo',
    attachment: aramarkSelfies,
    attachmentLabel: 'Aramark Selfie',
  },
  {
    period: 'Summer 2026',
    sortOrder: 2026.5,
    title: 'Software Engineering Intern',
    category: 'Meta',
    description:
      'Incoming Software Engineering Intern on the Marketplace Growth Team for Summer 2026 in Seattle, Washington.',
    image: metaLogo,
    imageAlt: 'Meta Logo',
    attachment: metaselfie,
    attachmentLabel: 'Meta Selfie',
  },
]

export const strengths = [
  'Programming',
  'Machine Learning and Data Science',
  'Leadership',
  'Creative Problem Solving',
]

export const homeInterests = [
  {
    title: 'Travel',
    caption: 'I love exploring new places, cultures, and cuisines.',
    image: travellingImg,
    imageAlt: 'Image of Dominic Hoar-Weiler traveling Spring Break 2026',
  },
  {
    title: 'Soccer',
    caption: 'I love playing and watching soccer. My favorite teams are the Portland Timbers and Bayern Munich.',
    image: watchingSoccerImg,
    imageAlt: 'Image of Dominic Hoar-Weiler watching soccer at Providence Park',
  },
  {
    title: 'Reading',
    caption: 'I love diving into books on a variety of topics, ranging from Murder Mystery to Life Philosophy.',
    image: readingImg,
    imageAlt: 'Image of Dominic Hoar-Weiler\'s book shelf',
  },
]

export const soccerHighlights = [
  "Varsity Men's Soccer captain at Carnegie Mellon University",
  'Leadership experience built through communication, accountability, and consistency',
  'Strong interest in the overlap between athletics, analytics, and high-performance teams',
]

export const soccerGallery = [
  {
    image: soccercmu,
    imageAlt: "Dominic Hoar-Weiler playing for Carnegie Mellon men's soccer",
  },
  {
    image: nyu_soccer,
    imageAlt: 'Dominic Hoar-Weiler in a match against NYU',
  },
]

export const soccerAwards = [
  {
    title: "UAA Honorable Mention ('23, '25)",
    description:
      'Conference recognition for outstanding performance.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
  },
  {
    title: "CMU Men’s Soccer Midfielder of the Year ('23, '24)",
    description:
      'Intra-team award given to the best-performing midfielder each season.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
  },
  {
    title: "Dean’s List - High Honors ('23-'26)",
    description:
      'Award for achieving high academic success.',
    logo: cmuLogo,
    logoAlt: 'Carnegie Mellon University Logo',
  },
  {
    title: "CMU Men's Soccer Most Valuable Player ('25)",
    description:
      'Intra-team award for oustanding performance and leadership on the field and in the locker room. Recognizes the player whose contributions are among the most impactful to the team\'s success.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
  },
]
