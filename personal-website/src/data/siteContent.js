import heroImg from '../assets/optimized/dom-soccer-hero.jpg'
import nflDataBowlPdf from '../assets/NFLDataBowlExplor.pdf'
import timbersPreview from '../assets/optimized/total-timbers-preview.jpg'
import cmuLogo from '../assets/cmu_logo.png'
import tartanLogo from '../assets/tartan_logo.png'
import metaLogo from '../assets/meta_logo.png'
import aramarkLogo from '../assets/aramarkLogo.png'
import metaselfie from '../assets/metaselfie.jpeg'
import NFLBigDataBowl from "../assets/NFLBigDataBowl.png"
import aramarkSelfies from '../assets/aramark_selfies.jpeg'
import fightingIrishPreview from '../assets/optimized/fighting-irish-preview.jpg'
import readingImg from '../assets/hobbies/reading.jpeg'
import travellingImg from '../assets/hobbies/travelling.jpeg'
import watchingSoccerImg from '../assets/hobbies/watchingsoccer.jpeg'
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

export { heroImg, aramarkSelfies, fightingIrishPreview}

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
    period: 'May-Aug 2026',
    sortOrder: 2026.5,
    title: 'Software Engineering Intern',
    category: 'Meta',
    description:
      'Shipped five Facebook Marketplace desktop features through 100+ production code changes, closing mobile-web parity gaps and launching A/B tests to hundreds of thousands of users. Built an AI-powered parity agent to automate mobile-to-web feature porting, projected to save 1,300 engineering hours across the summer, and created a dashboard to surface features and trigger headless FaaS runs of the agent.',
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
  'Experience performing in high-pressure situations across ECNL, NCAA DIII, and USL League Two.',
  'Leadership experience as a 3-year captain at CMU.',
  'Personal growth experience overcoming adversity and injury setbacks.',
]

export const soccerGallery = Object.entries(soccerGalleryImages)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, image], index) => ({
    image,
    imageAlt: `Dominic Hoar-Weiler playing for Carnegie Mellon men's soccer, photo ${index + 1}`,
  }))

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
