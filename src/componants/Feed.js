// /components/Feed.js
import React, { useState } from 'react';
import CreatePost from './CreatePost';
import '../App.css';

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, content: 'Post 1', user: 'Lucky' },
    { id: 2, content: 'Post 2', user: 'Priyanshu' },
    { id: 3, content: 'Post 3', user: 'John' },
  ]);

  const userNames = [ 'Krishna', 'Rama',, 'Charlie','Lucky', 'Shivam', 'Ayush', 'Lily','Adam', 'David','Avni' ];

  function getRandomUserName() {
    const randomIndex = Math.floor(Math.random() * userNames.length);
    return userNames[randomIndex];
  }

  const addPost = (content) => {
    setPosts([...posts, { id: posts.length + 1, content, user: getRandomUserName() }]);
  };

  return (
    <div className="feed">
      <CreatePost addPost={addPost} />
      {posts.map((post) => (
        <div key={post.id} className="feed__post">
          <h4>{post.user}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
