import Link from 'next/link';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Blog</h1>
      <Link href="/create-post" className={styles.link}>
        Create a New Post
      </Link> <br/><br/>
      <Link href="/load-post" className={styles.link}>
        Load my posts
      </Link>
    </div>
  );
}
