import BlogCards from '../modules/BlogCards';
import styles from './blogHome.module.scss';
import globalStyles from '../page.module.scss';

function Blog() {
  return (
    <section className={globalStyles.blogHome}>
      <div className={globalStyles.container}>
        <div className={styles.blogHeader}>
          <h1>Blog</h1>
          <p>Exploring Mobile and Web Application Security.</p>
        </div>
        <BlogCards maxCards={100} isFeatured={true} cta="Load more" />
      </div>
    </section>
  );
}

export default Blog;
