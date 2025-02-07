import React, { useEffect, useState, JSX } from "react";
import styles from "../styles/BlogDetail.module.css";

import { useParams } from "react-router-dom";

interface blog {
  id: number
  category: string
  title: string
  text: string
  link: string
}

const BlogDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const blogs = JSON.parse(process.env.REACT_APP_BLOGS || "[]");
  const blog = blogs.find((b: blog) => b.id === parseInt(id ?? "1"));

  const [blogContent, setBlogContent] = useState<string | null>(null);
  const [pdfExists, setPdfExists] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!blog) {
      setLoading(false);
      setError("No URL available for this blog.");
      return;
    }

    fetch(`/blogs/${id}/full_text.txt`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog content.");
        }
        return response.text();
      })
      .then((text) => {
        setBlogContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch(`/blogs/${id}/file.pdf`)
      .then((response) => {
        if (response.status === 404) {
          setPdfExists(false);
          return;
        }
        // Check if the content type is PDF and the status is OK
        if (
          response.ok &&
          response.headers.get("Content-Type")?.includes("pdf")
        ) {
          setPdfExists(true);
        } else {
          setPdfExists(false);
        }
      })
      .catch(() => {
        setPdfExists(false);
      });
  }, [blog]);

  const parseLinks = (text: string) => {
    // Regex to find URLs in the text
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };

  if (!blog) {
    return <p className={styles.error}>Blog not found.</p>;
  }

  if (loading) {
    return <p className={styles.error}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blog.title}</h1>
      <img
        className={styles.image}
        src={`/blogs/${blog.id}/img.png`}
        alt={blog.title}
      />
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: blogContent
            ? parseLinks(blogContent)
            : "No additional content available for this blog.",
        }}
      />
      {pdfExists && (
        <div>
          <h4>PDF Preview:</h4>
          <iframe
            src={`/blogs/${id}/file.pdf`}
            width="100%"
            height="500px"
            title="PDF Preview"
          />
        </div>
      )}
      <a href="#/#home" className={styles.btn}>
        Back to Home
      </a>
    </div>
  );
};

export default BlogDetail;
