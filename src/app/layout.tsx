import Head from 'next/head';
import Contact from './components/Contact/Contacts';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import './globals.css';

export const metadata = {
  title: "Inicio | Andrés' Personal Web.",
  description:
    'Taking your online presence to the next level with security-driven web applications.',
  author: 'Andrés',
  keywords: ['personal web', 'online presence', 'web applications', 'security']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Paytone+One&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navigation />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
