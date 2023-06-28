import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css'
const App = ({ posts, addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="mainConatiner">
      <h1>Blog App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <h4>{post.content}</h4>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch({ type: 'ADD_POST', payload: post }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

