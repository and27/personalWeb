import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { getDictionary } from './dictionaries';
import './globals.css';

export const metadata = {
  title: "Inicio | Andrés' Personal Web.",
  description:
    'Taking your online presence to the next level with security-driven web applications.',
  author: 'Andrés',
  keywords: ['personal web', 'online presence', 'web applications', 'security']
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dict = await getDictionary(params?.lng || 'en');

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
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navigation dict={dict} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
