// pages/api/create-post.js
import axios from 'axios';

export default async function postHandler(req, res) {
  
  if (req.method === 'POST') {
    const { title, content } = req.body;

    try {
      const response = await axios.post(
        'https://localhost/wordpress/wp-json/wp/v2/posts',
        {
          title,
          content,
          status: 'publish',  // Or 'draft' if you want to save as draft
        },
        {
          headers: {
            'Content-Type': 'application/json',
           // Authorization: `Bearer YOUR_WORDPRESS_ACCESS_TOKEN`,
          },
        }
      );

      res.status(200).json({ message: 'Post created successfully', post: response.data });
    } catch (error) {
      console.error('Error creating post:', error.response.data);
      res.status(error.response.status).json({ message: 'Failed to create post', error: error.response.data });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
