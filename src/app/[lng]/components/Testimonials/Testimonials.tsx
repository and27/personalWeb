import styles from './Testimonials.module.scss';
import globalStyles from '../../page.module.scss';

const Testimonials = () => {
  return (
    <main className={globalStyles.projects}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.section__title}>¿Qué dicen nuestros clientes?</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonials__item}>
            <p>
              [...] lo que más me impresionó fue su capacidad para adaptar la solución a partir de
              nuestro negocio y necesidades.
            </p>
            <p className={styles.testimonials__author}>- María Fernanda Sánchez</p>
          </div>
          <div className={styles.testimonials__item}>
            <p>
              Ha sido una experiencia transformadora para nuestro negocio. Nos han ayudado a crear
              una presencia en línea sólida y coherente y a conectar con nuestra audiencia.
            </p>
            <p className={styles.testimonials__author}>- Juan Pablo Rodriguez</p>
          </div>
          <div className={styles.testimonials__item}>
            <p>
              ¡Recomendamos sus servicios a cualquier empresa que busque un crecimiento real y
              sostenible!
            </p>
            <p className={styles.testimonials__author}>- Ana Lucía Gómez</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
