import RowCards, { Posts } from '../components/RowCards/RowCards';
import styles from './blogHome.module.css'

function Blog() {
    return (
    <section className={styles.blog}>
      <RowCards {...Posts}/>
    </section>
  );
}

export default Blog;