import React from 'react';
import BookDetails from './Component/BookDetails';
import BlogDetails from './Component/BlogDetails';
import CourseDetails from './Component/CourseDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div className="grid-container">
        <div className="grid-item">
          <CourseDetails />
        </div>
        <div className="grid-item">
          <BookDetails />
        </div>
        <div className="grid-item">
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
