import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { getDictionary } from '../../dictionaries';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andresbanda.com';
const siteTitle = 'Andrés Banda — Ingeniero de Software | Producto, Frontend e IA';
const siteDescription =
  'Soy Andrés Banda, ingeniero de software con más de 5 años construyendo productos digitales. Escribo sobre desarrollo de producto, frontend e inteligencia artificial, y colaboro en proyectos como freelance.';

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
    <html lang={lng} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Paytone+One&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=MuseoModerno:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>

      <body>
        <Navigation dict={dict} />
        <main>{children}</main>
        <Footer menu={navInfo} rights={footerInfo.rights} />
      </body>
    </html>
  );
}
