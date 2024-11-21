import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { getDictionary } from './dictionaries';
import './globals.css';

export const metadata = {
  title: 'Andrés Banda - Desarrollador Frontend | Portafolio',
  description:
    'Soy Andrés Banda, desarrollador frontend con experiencia en React JS. Explora mi portafolio con proyectos web innovadores y contáctame para colaborar.'
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dict = await getDictionary(params?.lng || 'en');
  const navInfo = dict?.menu || [];
  const footerInfo = dict?.footer || { rights: '' };
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
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
        {children}
        <Footer menu={navInfo} rights={footerInfo.rights} />
      </body>
    </html>
  );
}
