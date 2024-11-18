import styles from './Testimonials.module.scss';
import globalStyles from '../../page.module.scss';

const Testimonials = () => {
  return (
    <main className={styles.contact}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.section__title}>Testimonials</h2>
        <div>
          <div>
            <img src="" alt="" />
            <p>Testimonial</p>
            <p>Author</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Testimonial</p>
            <p>Author</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Testimonial</p>
            <p>Author</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
