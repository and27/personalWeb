import Script from 'next/script';
import dynamic from 'next/dynamic';
import Testimonials from '../components/Testimonials/Testimonials';
import { getDictionary } from '../../../dictionaries';
import Masthead from '../components/abstudio/Masthead/Masthead';
import FeaturedProjectsGallery from '../components/abstudio/FeaturedProjects/FeaturedProjectsGallery';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

const ContactSection = dynamic(() => import('../modules/ContactSection/ContactSection'), {
  ssr: false
});

export default async function Home({ params }: any) {
  const lng = 'es';
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
  const services = dict?.services || {
    title: '',
    services: []
  };

  const localizedProjects = (dict?.projects || []).filter(project => !project.hidden);
  return (
    <>
      <Masthead {...mastheadInfo} lang={lng} />
      <FeaturedProjects {...services} />
      <FeaturedProjectsGallery projects={localizedProjects} title="Proyectos web recientes" />
      {/* <Scurve {...sCurveInfoStudio} /> */}
      <Testimonials />
      <ContactSection layout={'inline'} {...contact} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        strategy="worker"
      />
      <Script id="google-analytics" strategy="worker">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
