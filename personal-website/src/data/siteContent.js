import heroImg from '../assets/Dom_SoccerPhoto.png'
import nflDataBowlPdf from '../assets/NFLDataBowlExplor.pdf'
import timbersPreview from '../assets/TotalTimbers_Preview.png'
import cmuLogo from '../assets/cmu_logo.png'
import tartanLogo from '../assets/tartan_logo.png'
import metaLogo from '../assets/meta_logo.png'
import aramarkLogo from '../assets/aramarkLogo.png'
import metaselfie from '../assets/metaselfie.jpeg'
import nyu_soccer from '../assets/JumpNyu.jpg'
import soccercmu from '../assets/soccercmu.jpg'
import NFLBigDataBowl from "../assets/NFLBigDataBowl.png"

export { heroImg, nyu_soccer, soccercmu }

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
]

export const experiences = [
  {
    period: 'Summer 2024',
    sortOrder: 2024,
    title: 'IT and Data Science Intern',
    category: 'Aramark',
    description:
      'Analyzed relational databases in Excel to identify service trends, driving improvements in hospitality offerings.',
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
      'Develop machine learning models using functional MRI data to predict semantic brain encodings, providing insights into how the brain processes visual stimuli.',
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
      "Engineered and deployed Aramark's AI assistant Sage to automate PTO and vacation requests by integrating NLP, Kronos and calendar APIs, and Aisera's conversational interface.",
    image: aramarkLogo,
    imageAlt: 'Aramark Logo',
    attachment: '',
    attachmentLabel: '',
  },
  {
    period: 'Upcoming Summer 2026',
    sortOrder: 2026.5,
    title: 'Software Engineering Intern',
    category: 'Meta',
    description:
      'Incoming Software Engineering Intern for Summer 2026 in Seattle, Washington.',
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

export const soccerHighlights = [
  "Varsity Men's Soccer captain at Carnegie Mellon University",
  'Leadership experience built through communication, accountability, and consistency',
  'Strong interest in the overlap between athletics, analytics, and high-performance teams',
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
