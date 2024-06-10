import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/CreatePost.module.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const username = 'your_username';
  const password = 'your_password';
  const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://localhost/wordpress/wp-json/wp/v2/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify({ title, content, status: 'publish' }),
      });

      if (response.ok) {
        const post = await response.json(); // Extract post from response
        setSuccessMessage('Post created successfully! You can view it ');
        setTitle('');
        setContent('');
      } else {
        setErrorMessage('Failed to create post');
      }
    } catch (error) {
      setErrorMessage('Failed to create post: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Post</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="title">Title</label>
          <input
            className={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="content">Content</label>
          <textarea
            className={styles.textarea}
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
      {successMessage && (
        <div className={styles.successMessage}>
          {successMessage} {/* Remove the reference to post.id */}
        </div>
      )}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
}
