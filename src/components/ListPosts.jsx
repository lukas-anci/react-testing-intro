import { useState, useEffect } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
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
