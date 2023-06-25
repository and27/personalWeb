import BlogCards from '../modules/BlogCards';
import styles from './blogHome.module.css';

function Blog() {
  return (
    <section className={styles.blog}>
      <BlogCards maxCards={100} isFeatured={true} cta="Load more" />
    </section>
  );
}

export default Blog;
