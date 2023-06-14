import BlogCards from '../modules/BlogCards';
import styles from './blogHome.module.css';

function Blog() {
  return (
    <section className={styles.blog}>
      <BlogCards />
    </section>
  );
}

export default Blog;
