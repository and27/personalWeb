import { Inter } from 'next/font/google';
import RowCards, { IRowCards } from './components/RowCards/RowCards';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeatureCards from './components/FeatureCards/FeatureCards';
import BlogCards from './modules/BlogCards';

const inter = Inter({ subsets: ['latin'] });

const ProjectCards = [
  {
    title: 'Ciodesia',
    description:
      'Ciodesia is an education platform to provide training and services related to geography.',
    link: ''
  },
  {
    title: 'Secure Lab',
    description:
      'Secure Lab (Hacker Club) is a cybersecurity training platform for IT professionals.',
    link: ''
  },
  {
    title: 'Snacks',
    description:
      'Snacks website provides actionable tips and pieces of advice about digital marketing.',
    link: ''
  }
];

const Projects: IRowCards = {
  title: 'Recent Projects',
  cards: ProjectCards,
  orientation: 'vertical'
};

const sCurveTitle = 'About';
const sCurveDescription = [
  'In a world driven by technology, we have been granted boundless opportunities to create innovative digital applications that have the power to revolutionize our lives. Yet, amidst this digital revolution, a daunting challenge looms large before us: safeguarding our invaluable digital assets from the ever-growing threats of cyberattacks, data breaches, and malicious exploitation.',
  'My vision transcends the creation of ordinary websites and apps. I am committed to crafting extraordinary digital solutions through immersive dynamic content, robust security measures. and personalized interactions. With my guidance, you will not only protect your digital assets'
];

export default function Home() {
  return (
    <>
      <Masthead />
      <Scurve title={sCurveTitle} description={sCurveDescription} />
      <FeatureCards />
      <RowCards {...Projects} />
      <BlogCards maxCards={3} />
    </>
  );
}
