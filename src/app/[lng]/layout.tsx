import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { getDictionary } from './dictionaries';
import './globals.css';

const metadataAB = {
  title: 'Andrés Banda - Desarrollador Frontend | Portafolio',
  description:
    'Soy Andrés Banda, desarrollador frontend con experiencia en React JS. Explora mi portafolio con proyectos web innovadores y contáctame para colaborar.'
};

export const metadata = {
  title: 'Abstudio | Growth Marketing para Coaches ',
  description:
    'Abstudio ayuda a coaches que transforman vidas en Latinoamérica a aumentar su alcance, construir una marca auténtica y escalar sus negocios con estrategias de growth marketing.'
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dict = await getDictionary(params?.lng || 'es');
  const navInfo = dict?.menu || [];
  const footerInfo = dict?.footer || { rights: '' };
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
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
