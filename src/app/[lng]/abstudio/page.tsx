import Script from 'next/script';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Masthead from '../components/Masthead/Masthead';
import Scurve from '../components/Scurve/Scurve';
import Testimonials from '../components/Testimonials/Testimonials';
import { getDictionary } from '../dictionaries';
import BlogCards from '../modules/BlogCards';
import ContactSection from '../modules/ContactSection/ContactSection';
import RecentProjects from '../modules/RecentProjects';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default async function Home({ params }: any) {
  const { lng } = params;
  const dict = await getDictionary(lng);
  const mastheadInfo = dict?.mastheadInfo || {
    title: '',
    description: '',
    cta: ''
  };
  const sCurveInfoStudio = dict?.aboutStudio || {
    title: '',
    description: '',
    cta: ''
  };
  const servicesStudio = dict?.servicesStudio || {
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
      <FeaturedProjects {...servicesStudio} />
      <Scurve {...sCurveInfoStudio} />
      <RecentProjects localizedProjects={localizedProjects} />
      <Testimonials />

      {/* <BlogCards maxCards={3} sectionTitle="Blog" locale={lng} /> */}
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