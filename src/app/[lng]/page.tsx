import RowCards, { IRowCards } from './components/Cards/RowCards/RowCards';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import BlogCards from './modules/BlogCards';
import { getDictionary } from './dictionaries';
import Contact from './contact/page';
import Codercat from '../../../public/codercat.png';
import Ciodesia from '../../../public/ciodesia.png';
import Securelab from '../../../public/securelab.png';
import { IRowCard } from './components/Cards/VerticalCard/Card';

const ProjectCards: IRowCard[] = [
  {
    id: '1',
    title: 'Ciodesia',
    description:
      'Ciodesia is an education platform to provide training and services related to geography.',
    link: 'https://ciodesia.com',
    image: {
      src: Ciodesia,
      alt: '',
      title: ''
    }
  },
  {
    id: '2',
    title: 'Codercat',
    description:
      'Codercat is a web and mobile app that provides daily tips on accesibility, security and user experience.',
    link: 'https://codercat.vercel.app',
    image: {
      src: Codercat,
      alt: '',
      title: ''
    }
  },
  {
    id: '3',
    title: 'Secure Lab',
    description:
      'Secure Lab is a mobile app designed to teach cibersecurity  with short tutorials.',
    link: '/securelab',
    image: {
      src: Securelab,
      alt: '',
      title: ''
    }
  }
];

const Projects: IRowCards = {
  title: 'Recent Projects',
  cards: ProjectCards,
  orientation: 'vertical'
};

const sCurveTitle = 'About';
const sCurveDescription = [
  'Welcome to my personal website. I am a passionate software developer working on making the internet a safer and more accessible place for everyone.',
  "For the past four years, I've dedicated my efforts to crafting web and mobile apps spanning diverse domains, including games, the manufacturing industry, and agency projects.",
  '<a href="#recentprojects" style="color: #eee; text-decoration: underline; text-underline-offset: 2px;">Explore my portfolio</a>, learn more about my work, and feel free to contact me.'
];

export default async function Home({ params }: any) {
  const dict = await getDictionary(params?.lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };

  return (
    <>
      <Masthead {...mastheadInfo} />
      <Scurve title={sCurveTitle} description={sCurveDescription} />
      <FeaturedProjects />
      <RowCards {...Projects} />
      <BlogCards maxCards={3} sectionTitle="Writing" />
      <Contact layout={'inline'} />
    </>
  );
}
