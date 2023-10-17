import Script from 'next/script';
import RowCards from './components/Cards/RowCards/RowCards';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import BlogCards from './modules/BlogCards';
import { getDictionary } from './dictionaries';
import Contact from './contact/page';
import { Projects } from '@/data/projectCards';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

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

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
