import RowCards, { IRowCards } from './components/RowCards/RowCards';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeatureCards from './components/FeatureCards/FeatureCards';
import BlogCards from './modules/BlogCards';
import { getDictionary } from './dictionaries';
import Contact from './contact/page';
import CiodesiaImg from '../../../public/ciodesia.svg';
import Codercat from '../../../public/codercat.png';
import SecureLab from '../../../public/securelab_logo.svg';

const ProjectCards = [
  {
    title: 'Ciodesia',
    description:
      'Ciodesia is an education platform to provide training and services related to geography.',
    link: 'https://ciodesia.com',
    image: {
      src: CiodesiaImg,
      width: 75,
      heigth: 75,
      alt: '',
      title: ''
    }
  },
  {
    title: 'Codercat',
    description:
      'Codercat is a web and mobile app that provides daily tips on accesibility, security and user experience.',
    link: 'https://codercat.vercel.app',
    image: {
      src: Codercat,
      width: 100,
      heigth: 70,
      alt: '',
      title: ''
    }
  },
  {
    title: 'Secure Lab',
    description:
      'Secure Lab is a mobile app designed to teach cibersecurity  with short tutorials.',
    link: '/securelab',
    image: {
      src: SecureLab,
      width: 70,
      heigth: 70,
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
  'Welcome to my personal website. I am a passionate web developer working on making the internet a safer and more accessible place for everyone.',
  "Explore my portfolio, learn more about my work, and le'ts create a digital experience that brings joy to your customers and drives remarkable returns."
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
      <FeatureCards />
      <RowCards {...Projects} />
      <BlogCards maxCards={3} />
      <Contact layout={'inline'} />
    </>
  );
}
