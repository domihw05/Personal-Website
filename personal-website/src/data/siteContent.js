import heroImg from '../assets/optimized/dom-soccer-hero.jpg'
import nflDataBowlPdf from '../assets/NFLDataBowlExplor.pdf'
import timbersPreview from '../assets/optimized/total-timbers-preview.jpg'
import cmuLogo from '../assets/cmu_logo.png'
import tartanLogo from '../assets/tartan_logo.png'
import uaaHonors2023 from '../assets/soccer-awards/2023-uaa-mens-soccer-honors.pdf'
import uaaHonors2025 from '../assets/soccer-awards/2025-uaa-mens-soccer-honors.pdf'
import metaLogo from '../assets/meta_logo.png'
import aramarkLogo from '../assets/aramarkLogo.png'
import metaPhoto from '../assets/optimized/meta-experience.jpg'
import NFLBigDataBowl from "../assets/NFLBigDataBowl.png"
import aramarkPhoto from '../assets/optimized/aramark-experience.jpg'
import fightingIrishPreview from '../assets/optimized/fighting-irish-preview.jpg'
import coffeeBooksFilm from '../assets/hobbies/coffee-books-film.jpg'
import watchingSoccerImg from '../assets/hobbies/watchingsoccer.jpeg'
import bearsLogo from '../assets/hobbies/teams/bears.png'
import notreDameLogo from '../assets/hobbies/teams/notre-dame.png'
import timbersLogo from '../assets/hobbies/teams/timbers.png'
import thornsLogo from '../assets/hobbies/teams/thorns.png'
import bayernLogo from '../assets/hobbies/teams/bayern.png'
import redsLogo from '../assets/hobbies/teams/reds.png'
import blazersLogo from '../assets/hobbies/teams/blazers.png'
import carnegieMellonShield from '../assets/hobbies/teams/carnegie-mellon.jpg'
import handwritten_digits from '../assets/handwritten_digits.png'
import deeplearning_transformer from '../assets/deeplearning_img.png'
import player_visualizer from '../assets/optimized/player-visualization.jpg'

const soccerGalleryImages = import.meta.glob(
  '../assets/Soccer Gallery Optimized/*.jpg',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
)

export { heroImg, fightingIrishPreview }

export const linkedInProfile = 'https://linkedin.com/in/dominichoarweiler'

export function getExperienceId(experience) {
  return `experience-${experience.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}`
}

export const featuredProjects = [
  {
    title: 'TotalTimbers',
    category: 'Sports Analytics',
    summary:
      'Built a Portland Timbers analytics account with 3K+ followers.',
    description:
      'Built and grew TotalTimbers, a Portland Timbers sports analytics account with more than 3K followers. The project combines soccer analysis, data-informed storytelling, and social media strategy to make MLS performance trends more accessible to fans.',
    demo: 'https://www.instagram.com/totaltimbers/',
    githubURL: '',
    skills: ['Python', 'R', 'Sports analytics', 'Data visualization'],
    image: timbersPreview,
    imageAlt: 'Preview of the TotalTimbers Instagram profile',
  },
  {
    title: 'NFL Big Data Bowl',
    category: 'Sports Analytics',
    summary:
      'Modeled pre-snap NFL tracking data to predict passing play outcomes.',
    description:
      'Analyzed NFL player tracking data and built multinomial and neural network models in R to predict passing play outcomes from pre-snap variables such as play clock, down, yards to go, player alignment, and game context. The project focused on extracting useful predictive signals from noisy football tracking data.',
    demo: nflDataBowlPdf,
    githubURL: 'https://github.com/domihw05/NFL-Big-Data-Bowl',
    skills: ['R', 'Neural networks', 'Tracking data', 'Statistical modeling'],
    image: NFLBigDataBowl,
    imageAlt: 'Preview of the NFL Big Data Bowl project, showing a plot of model predictions versus actual outcomes.',
  },
  {
    title: 'Python Fighting Irish World Game',
    category: 'Game Development',
    summary:
      'Created a Python platformer with maps, enemies, collectibles, and win states.',
    description:
    'Created Fighting Irish World as my 15-112 term project at Carnegie Mellon. The game is a single-player Python platformer inspired by Super Mario Bros., with selectable maps, enemy behavior, collision handling, collectibles, and a finish-line objective. Players choose one of three maps, avoid or defeat enemies, collect pots of gold, and progress to the end of the level.',
    demo: 'https://youtube.com/watch?v=0J6zRpfWX_E',
    githubURL: 'https://github.com/domihw05/Fighting-Irish-World-Game-Python-',
    skills: ['Python', 'Game development', 'Collision systems', 'UI design'],
    image: fightingIrishPreview,
    imageAlt: 'Preview of the Fighting Irish World Game, showcasing\
     the leprechaun running across the map.',
  },
  {
    title: 'Handwritten Digit Recognition',
    category: 'Machine Learning',
    summary:
      'Trained a neural network to classify handwritten digits from MNIST images.',
    description:
      'Implemented a neural network classifier for recognizing handwritten digits from 0-9 using TensorFlow/Keras. The model is trained on the MNIST dataset of 28x28 grayscale images and demonstrates a complete machine learning workflow, including preprocessing, model training, evaluation, and prediction.',
    demo: '',
    githubURL: 'https://github.com/domihw05/Handwriting-Classification-Neural-Network',
    skills: ['Python', 'TensorFlow', 'Keras', 'Neural networks'],
    image: handwritten_digits,
    imageAlt: 'Preview of the Handwritten Digit Recognition project, showing a sample of recognized digits.',
  },
  {
    title: 'Deeplearning Transformer',
    category: 'Machine Learning',
    summary:
      'Built an end-to-end Transformer deep learning pipeline for causal language modeling and speech recognition, including custom attention layers, datasets, training loops, decoding, and local test integration.',
    description:
      'This project implements core components of a Transformer-based deep\
       learning system from scratch for CMU’s Introduction to Deep Learning\
        HW4. The codebase includes a decoder-only Transformer for causal\
         language modeling, an encoder-decoder Transformer for automatic\
          speech recognition, reusable model components such as positional\
           encodings, masks, encoder/decoder layers, and sublayers, as well\
            as custom MyTorch implementations of scaled dot-product attention\
             and multi-head attention. The project also includes dataset\
              loaders, tokenization utilities, sequence generation,\
               optimizer/scheduler setup, trainer classes, and a local test\
                suite designed to support modular development and validation\
                 before running larger-scale experiments on GPU resources.',
    demo: '',
    githubURL: '',
    contactForRepo: true,
    skills: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Speech recognition'],
    image: deeplearning_transformer,
    imageAlt: 'Preview of the Deep Learning Transformer project, \
    showing the architecture of the transformer model.',
  },
  {
    title: 'Shot Chart Visualizer App',
    category: 'Sports Analytics',
    summary: 'Built a Python shot chart visualizer that scrapes Understat player shot data and generates interactive or saved visualizations with player-level shooting statistics.',
    description: 'This project scrapes player shot data from Understat and converts it into shot chart visualizations with supporting statistical summaries. The app version opens a local window where users can enter an Understat player ID and filter by season, while the script version prompts for a player ID in the terminal and saves the player’s career shot chart as player_visualization.png. The project combines web scraping, data processing, soccer analytics, and visualization to make player shooting profiles easier to explore and compare.',
    demo: '',
    githubURL: 'https://github.com/domihw05/Shot-Chart-App-Visualizer',
    skills: ['Python', 'Web scraping', 'Data visualization', 'Soccer analytics'],
    image: player_visualizer,
    imageFit: 'contain',
    imageAlt: 'Preview of the Shot Chart Visualizer App, showing a shot chart for Michael Olise with different colored dots representing shot locations and outcomes.',
  }

]

export const experiences = [
  {
    period: 'Summer 2024',
    sortOrder: 2024,
    title: 'IT and Data Science Intern',
    category: 'Aramark',
    highlights: [
      'Helped build and analyze databases to identify ways to improve Aramark’s hospitality services at Nike World Headquarters.',
      'Helped develop and introduce a mobile app for ordering services around the Nike campus.',
    ],
    image: aramarkLogo,
    imageAlt: 'Aramark Logo',
  },
  {
    period: 'Jan–Sep 2025',
    sortOrder: 2025.5,
    title: 'Machine Learning Research Assistant',
    category: 'CMU Cognitive Neuroscience Lab (CAOs)',
    highlights: [
      'Developed machine learning models using functional MRI data to study how the brain represents specific words.',
    ],
    image: cmuLogo,
    imageAlt: 'Carnegie Mellon University Logo',
  },
  {
    period: 'Summer 2025',
    sortOrder: 2025.6,
    title: 'AI Specialist and Data Science Intern',
    category: 'Aramark Headquarters',
    highlights: [
      'Shipped a feature that let Aramark’s AI assistant, Sage, submit time-off requests using natural language, Kronos and calendar APIs, and Aisera.',
      'Built interfaces in Snowflake and Aisera so nontechnical users could query hospitality metrics in plain language.',
      'Built and maintained Aisera Workflow and Hyperflow modules to automate service processes and reduce manual handoffs.',
    ],
    image: aramarkLogo,
    imageAlt: 'Aramark Logo',
    photo: { src: aramarkPhoto, width: 1024, height: 768, alt: 'Dominic with colleagues in front of the Aramark wall sign', caption: 'With the team at Aramark headquarters' },
  },
  {
    period: 'May–Aug 2026',
    sortOrder: 2026.5,
    title: 'Software Engineering Intern',
    category: 'Meta',
    highlights: [
      'Shipped five Facebook Marketplace desktop features across 100+ production code changes, closing mobile-to-web gaps and launching A/B tests to hundreds of thousands of users.',
      'Built an AI agent to port mobile features to the web, with a projected savings of 1,300 engineering hours over the summer.',
      'Created a dashboard to identify features that needed porting and trigger headless FaaS runs of the agent.',
    ],
    image: metaLogo,
    imageAlt: 'Meta Logo',
    photo: { src: metaPhoto, width: 1071, height: 1428, alt: 'Dominic standing in front of the Meta sign', caption: 'AI at Meta Hackathon' },
  },
]

export const strengths = [
  'Programming',
  'Machine Learning and Data Science',
  'Leadership',
  'Creative Problem Solving',
]

export const homeLibrary = {
  title: 'Coffee, books & movies',
  image: coffeeBooksFilm,
  imageAlt: 'A cup of coffee, an open book, and a strip of film on a wooden table',
}

export const sportsInterests = {
  title: 'Teams I follow',
  teams: [
    { id: 'bears', name: 'Chicago Bears', logo: bearsLogo },
    { id: 'notreDame', name: 'Notre Dame Fighting Irish', detail: 'Football', logo: notreDameLogo },
    { id: 'timbers', name: 'Portland Timbers', logo: timbersLogo },
    { id: 'thorns', name: 'Portland Thorns', logo: thornsLogo },
    { id: 'bayern', name: 'Bayern Munich', logo: bayernLogo },
    { id: 'reds', name: 'Cincinnati Reds', logo: redsLogo },
    { id: 'blazers', name: 'Portland Trail Blazers', logo: blazersLogo },
    { id: 'cmu', name: 'Carnegie Mellon University', logo: carnegieMellonShield, shield: true },
  ],
  image: watchingSoccerImg,
  imageAlt: 'A Portland Timbers match seen from the stands at Providence Park',
  photoCredit: 'Providence Park · Portland, Oregon',
}

export const soccerGallery = Object.entries(soccerGalleryImages)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, image], index) => ({
    image,
    imageAlt: `Dominic Hoar-Weiler playing for Carnegie Mellon men's soccer, photo ${index + 1}`,
  }))

export const soccerAwards = [
  {
    title: 'CSC Academic All-District',
    years: '2024, 2026',
    description: 'Named to the NCAA Division III men’s soccer Academic All-District team by College Sports Communicators and advanced to the 2026 Academic All-America ballot.',
    logo: cmuLogo,
    logoAlt: 'Carnegie Mellon University Logo',
    sources: [
      { url: 'https://s3.amazonaws.com/sidearm.sites/cosidaallamerican.sidearmsports.com/documents/2024/11/19/24Acad_MSOC.pdf', label: '2024 CSC team (PDF)' },
      { url: 'https://academicallamerica.com/documents/2026/11/24//2026_27_AAD_MSOC.pdf?id=5705', label: '2026 CSC team (PDF)' },
    ],
  },
  {
    title: 'UAA Men’s Soccer Offensive Athlete of the Week',
    years: '2026',
    description: 'Recognized on November 23, 2026, after scoring the winner against Lynchburg and adding a goal against Bowdoin as Carnegie Mellon reached the NCAA Final Four.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
    sources: [
      { url: 'https://uaasports.info/sports/2023/8/15/information-aow-aow2021.aspx', label: 'UAA weekly honors' },
    ],
  },
  {
    title: 'UAA First Team All-Conference',
    years: '2026',
    description: 'Named to the 2026 UAA Men’s Soccer All-Association First Team as a defender for Carnegie Mellon.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
    sources: [
      { url: 'https://uaasports.info/documents/2026/11/16//26_MSoc_All_Assoc.pdf?id=1216', label: '2026 UAA honors (PDF)' },
    ],
  },
  {
    title: 'UAA Honorable Mention',
    years: '2023, 2025',
    description:
      'Conference recognition for outstanding performance.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
    sources: [
      { url: uaaHonors2023, label: '2023 UAA honors (PDF)' },
      { url: uaaHonors2025, label: '2025 UAA honors (PDF)' },
    ],
  },
  {
    title: 'CMU Men’s Soccer Midfielder of the Year',
    years: '2023, 2024',
    description:
      'Intra-team award given to the best-performing midfielder each season.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
  },
  {
    title: 'Dean’s List – High Honors',
    years: '2023–2026',
    description:
      'Award for achieving high academic success.',
    logo: cmuLogo,
    logoAlt: 'Carnegie Mellon University Logo',
  },
  {
    title: 'CMU Men’s Soccer Most Valuable Player',
    years: '2025',
    description:
      'Intra-team award for outstanding performance and leadership on the field and in the locker room. Recognizes the player whose contributions are among the most impactful to the team’s success.',
    logo: tartanLogo,
    logoAlt: 'Tartan Athletics Logo',
  },
]
