import { Inter } from 'next/font/google';
import RowCards, { IRowCards } from './components/RowCards/RowCards';
import Contact from './components/Contact/Contacts';
import Masthead from './components/Masthead/Masthead';
import Footer from './components/Footer/Footer';
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

export default function Home() {
  return (
    <>
      <Masthead />
      <Scurve />
      <FeatureCards />
      <RowCards {...Projects} />
      <BlogCards maxCards={3} />
      <Contact />
      <Footer />
    </>
  );
}
