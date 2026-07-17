import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { getDictionary } from '../../dictionaries';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andresbanda.com';
const siteTitle = 'Andrés Banda · Diseño y desarrollo de soluciones digitales';
const siteDescription =
  'Diseño y desarrollo de soluciones digitales — web, móvil e inteligencia artificial. Portafolio, proyectos y blog de Andrés Banda.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Andrés Banda'
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    siteName: 'Andrés Banda',
    title: siteTitle,
    description: siteDescription,
    locale: 'es'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lng?: string }>;
}) {
  const { lng = 'es' } = await params;
  const dict = await getDictionary(lng);
  const navInfo = dict?.menu || [];
  const footerInfo = dict?.footer || { rights: '' };
  return (
    <html lang={lng} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`
          }}
        />
      </head>

      <body>
        <Navigation dict={dict} />
        <main>{children}</main>
        <Footer menu={navInfo} rights={footerInfo.rights} />
      </body>
    </html>
  );
}
