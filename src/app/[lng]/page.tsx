import Script from 'next/script';
import Masthead from './components/Masthead/Masthead';
import Scurve from './components/Scurve/Scurve';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import BlogCards from './modules/BlogCards';
import { getDictionary } from './dictionaries';
import RecentProjects from './modules/RecentProjects';
import ContactSection from './modules/ContactSection/ContactSection';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const metadata = {
  title: 'Andrés Banda - Desarrollador Frontend | Portafolio',
  description:
    'Soy Andrés Banda, desarrollador frontend con experiencia en React JS. Explora mi portafolio con proyectos web innovadores y contáctame para colaborar.'
};

export default async function Home({ params }: any) {
  const { lng } = params;
  const dict = await getDictionary(lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };
  const sCurveInfo = dict?.about || {
    title: '',
    description: '',
    cta: ''
  };
  const services = dict?.services || {
    title: '',
    services: []
  };
  const contact = dict?.contact || {
    blockTitle: '',
    inlineTitle: '',
    description: '',
    cta: ''
  };

  const localizedProjects = dict?.recentProjects || [];
  return (
    <>
      <Masthead {...mastheadInfo} lang={lng} />
      <FeaturedProjects {...services} />
      <Scurve {...sCurveInfo} />
      <RecentProjects localizedProjects={localizedProjects} />
      <BlogCards maxCards={3} sectionTitle="Blog" locale={lng} />
      <ContactSection layout={'inline'} {...contact} />
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
