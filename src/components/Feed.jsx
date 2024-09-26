import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div style={{ flex: 1 }}>
      <CreatePost />
      <Post text="Hello karens!" />
      <Post text="hello Face Book" />
      <Post text="This is my first post!" />
      <Post text="may be React and Material-UI are awesome!" />
      <Post text="I love React" />
      <Post text="i dont know" />
    </div>
  );
};

export default Feed;
