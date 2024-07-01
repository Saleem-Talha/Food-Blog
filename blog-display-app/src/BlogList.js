
import React from 'react';
import BlogPost from './BlogPost';
import blogs from './data/blog.json';

function BlogList() {
  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map((blog) => (
        <BlogPost
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          image={blog.image}
        />
      ))}
    </div>
  );
}

export default BlogList;
