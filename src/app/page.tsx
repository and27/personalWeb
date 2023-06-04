import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contacts'
import Masthead from './components/Masthead/Masthead'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Masthead/>
    <Projects/>
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>What I do?</h2>
        <div className={styles.cards}>
          <div className={styles.card__left}>
            <h3 className={styles.card__title}>Frontend Development</h3>
            <p className={styles.card__description}>I build responsive websites and web applications using React, Next.js, TypeScript, JavaScript, HTML, CSS, and SASS.</p>
          </div>
          <div className={styles.card__right}>
            <h3 className={styles.card__title}>Backend Development</h3>
            <p className={styles.card__description}>I build REST APIs using Node.js, Express, MongoDB, and Firebase.</p>
          </div>
          <div className={styles.card__left}>
            <h3 className={styles.card__title}>UI/UX Design</h3>
            <p className={styles.card__description}>I design user interfaces and user experiences using Figma, Adobe XD, and Adobe Photoshop.</p>
          </div>
        </div>
      </div>
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}
