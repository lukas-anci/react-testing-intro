import { useState, useEffect } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
