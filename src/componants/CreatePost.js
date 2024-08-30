// /components/CreatePost.js
import React, { useState } from 'react';
import '../App.css';

function CreatePost({ addPost }) {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      addPost(postContent);
      setPostContent(''); // Clear the input after posting
    }
  };

  return (
    <div className="createPost">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="What's on your mind?"
        rows="3"
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default CreatePost;
