import RowCards, { IRowCards } from './components/RowCards/RowCards';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeatureCards from './components/FeatureCards/FeatureCards';
import BlogCards from './modules/BlogCards';
import { getDictionary } from './dictionaries';
import Navigation from './components/Navigation/Navigation';

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
  'Welcome to my personal website. I am a passionate web developer working on making the internet a safer and more accessible place for everyone.',
  "Explore my portfolio, learn more about my work, and le'ts create a digital experience that brings joy to your customers and drives remarkable returns."
];

export default async function Home({ params }: any) {
  const dict = await getDictionary(params?.lng);
  const mastheadInfo = dict.mastheadInfo;

  return (
    <>
      <Masthead {...mastheadInfo} />
      <Scurve title={sCurveTitle} description={sCurveDescription} />
      <FeatureCards />
      <RowCards {...Projects} />
      <BlogCards maxCards={3} />
    </>
  );
}