import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);
  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};
export default PostList;