import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Learning", writer: "Stephen Biz" ,description: "Welcome to learning React!"},
    { id: 2, title: "Installation", writer: "Schewzdenier" ,description: "You can install React from npm" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id} className="card">
          <h4>{blog.title}</h4>
          <p>{blog.writer}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
