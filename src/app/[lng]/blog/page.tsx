import BlogCards from '../modules/BlogCards';
import styles from './blogHome.module.scss';
import globalStyles from '../page.module.scss';

export async function generateMetadata({ params }: any) {
  const isEn = params?.lng === 'en';
  return {
    title: 'Blog',
    description: isEn
      ? 'Ideas and lessons on product development, frontend and artificial intelligence.'
      : 'Ideas y aprendizajes sobre desarrollo de producto, frontend e inteligencia artificial.'
  };
}

function Blog({ params }: any) {
  const { lng } = params;
  const isEn = lng === 'en';
  const cta = isEn ? 'Load more' : 'Cargar más';
  const description = isEn
    ? 'Ideas and lessons on product development, frontend and artificial intelligence.'
    : 'Ideas y aprendizajes sobre desarrollo de producto, frontend e inteligencia artificial.';

  return (
    <section className={globalStyles.blogHome}>
      <div className={globalStyles.container}>
        <div className={styles.blogHeader}>
          <h1>Blog</h1>
          <p>{description}</p>
        </div>
        <BlogCards maxCards={100} isFeatured={true} cta={cta} locale={lng} />
      </div>
    </section>
  );
}

export default Blog;
