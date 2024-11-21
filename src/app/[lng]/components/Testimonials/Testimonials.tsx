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
              Lo que más me impresionó de Abstudio fue su capacidad para comprender nuestro negocio
              y nuestras necesidades.
            </p>
            <p>- María Fernanda Sánchez</p>
          </div>
          <div className={styles.testimonials__item}>
            <p>
              Trabajar con Abstudio ha sido una experiencia transformadora para nuestro negocio. Nos
              han ayudado a crear una presencia online sólida y coherente y a conectar con nuestra
              audiencia.
            </p>
            <p>- Juan Pablo Rodriguez</p>
          </div>
          <div className={styles.testimonials__item}>
            <p>
              ¡Recomendamos sus servicios a cualquier empresa que busque un crecimiento real y
              sostenible!
            </p>
            <p>- Ana Lucía Gómez</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
