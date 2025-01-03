import React, { JSX } from "react";

import { useParams } from "react-router-dom";

const BlogDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const blogs = JSON.parse(process.env.REACT_APP_BLOGS || "[]");
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.text}</p>
    </div>
  );
};

export default BlogDetail;
