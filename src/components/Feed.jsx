import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div style={{ flex: 1 }}>
      <CreatePost />
      <Post text="Hello World!" />
      <Post text="This is my first post!" />
      <Post text="React and Material-UI are awesome!" />
    </div>
  );
};

export default Feed;
