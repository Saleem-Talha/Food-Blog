
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './data/blog.json';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id.toString() === id);

  return (
    <div className="max-w-2xl mx-auto p-4">
       
      {blog ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
          <p className="text-gray-600 mb-2">{blog.date}</p>
          <p className="mb-4">{blog.description}</p>
          <h2 className="text-2xl font-semibold mb-2">Recipe:</h2>
          <ul className="list-disc pl-4 mb-4">
        {blog.recipe.split('\n').map((step, index) => (
          <li key={index} className="mb-1">{step}</li>
        ))}
      </ul>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}

export default BlogDetails;
