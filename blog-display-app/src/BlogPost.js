// src/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ id, title, description, date, image }) {
  return (
    <div className="m-4 p-4 w-80 bg-white shadow-md rounded-lg">
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </Link>
    </div>
  );
}

export default BlogPost;
