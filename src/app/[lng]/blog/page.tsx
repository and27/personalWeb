import BlogCards from '../modules/BlogCards';
import Newsletter from '../components/Newsletter/Newsletter';
import styles from './blogHome.module.scss';
import globalStyles from '../page.module.scss';

export async function generateMetadata({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng } = await params;
  const isEn = lng === 'en';
  return {
    title: 'Blog',
    description: isEn
      ? 'Ideas and lessons on product development, frontend and artificial intelligence.'
      : 'Ideas y aprendizajes sobre desarrollo de producto, frontend e inteligencia artificial.'
  };
}

async function Blog({ params }: { params: Promise<{ lng?: string }> }) {
  const { lng = 'es' } = await params;
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
        <BlogCards maxCards={100} cta={cta} locale={lng} />
      </div>
      <Newsletter lng={lng} />
    </section>
  );
}

export default Blog;
