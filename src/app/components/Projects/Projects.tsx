import styles from './Projects.module.css'
import globalStyles from '../../page.module.css'

export default function Projects(){
    return (
     <section className={globalStyles.projects}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.section__title}>Recent Projects</h2>
        <div className={styles.project__cards}>
          <div className={styles.project__card}>
            <h3 className={styles.project__title}>Frontend Development</h3>
            <p className={styles.project__description}>I build responsive websites and web applications using React, Next.js, TypeScript, JavaScript, HTML, CSS, and SASS.</p>
            <a className={styles.link}>See more &#8680;</a>
          </div>
          <div className={styles.project__card}>
            <h3 className={styles.project__title}>Backend Development</h3>
            <p className={styles.project__description}>I build REST APIs using Node.js, Express, MongoDB, and Firebase.</p>
            <a className={styles.link}>See more &#8680;</a>
          </div>
          <div className={styles.project__card}>
            <h3 className={styles.project__title}>UI/UX Design</h3>
            <p className={styles.project__description}>I design user interfaces and user experiences using Figma, Adobe XD, and Adobe Photoshop.</p>
            <a className={styles.link}>See more &#8680;</a>
          </div>
        </div>
      </div>
    </section>
    )
}