import { useState, useEffect } from 'react';
import styles from '../styles/Post.module.css'; // Update the CSS import if needed

export default function LoadPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setErrorMessage('');

      try {
        const response = await fetch('https://localhost/wordpress/wp-json/wp/v2/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      } catch (error) {
        setErrorMessage('Failed to fetch posts: ' + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // Run once on component mount

  return (
    <div>
      <h1>Posts:</h1><br/>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <div className={styles.postsContainer}>
        {posts.map(post => (
          <div key={post.id} className={styles.post}>
            <h2>Title: {post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: "<br/>Content: <br/><br/>"+post.content.rendered }}></p>
          </div>
        ))}
      </div>
    </div>
  );
}
