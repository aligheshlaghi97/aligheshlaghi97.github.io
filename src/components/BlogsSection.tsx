import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/BlogsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface blogRecord {
  id: number
  category: string
  title: string
  text: string
  link: string
}

const BlogsSection = () => {
  const blogs = JSON.parse(process.env.REACT_APP_BLOGS || "[]");

  return (
    <div className="container-blogs" id="/#blogs">
      <Container className="p-4">
        <Row>
          <h1 className="header-blogs">Recent Blogs</h1>
        </Row>
        <Row className="container-blogs">
        <div className="blog-grid">
          {blogs.map((blog: blogRecord) => (
            <div key={blog.id} className="card card-section shadow-lg">
              <img
                src={`/blogs/${blog.id}/img.png`}
                className="card-img-top"
                alt={blog.title}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.text}</p>
                <a href={`#${blog.link}`} className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>
        </Row>
      </Container>
    </div>
  );
};

export default BlogsSection;
