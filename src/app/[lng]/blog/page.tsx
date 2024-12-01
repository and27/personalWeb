import BlogCards from '../modules/BlogCards';
import styles from './blogHome.module.scss';
import globalStyles from '../page.module.scss';

function Blog({ params }: any) {
  const { lng } = params;
  const cta = lng === 'en' ? 'Load more' : 'Cargar más';
  const isOnMaintainance = true;

  if (isOnMaintainance) {
    return (
      <section className={globalStyles.blogHome}>
        <div className={globalStyles.container}>
          <div className={styles.blogHeader}>
            <h1>Blog</h1>
            <p>Estamos realizando algunas mejoras en nuestro blog. Vuelve pronto.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={globalStyles.blogHome}>
      <div className={globalStyles.container}>
        <div className={styles.blogHeader}>
          <h1>Blog</h1>
          <p>Exploring Mobile and Web Application Security.</p>
        </div>
        <BlogCards maxCards={100} isFeatured={true} cta={cta} locale={lng} />
      </div>
    </section>
  );
}

export default Blog;
