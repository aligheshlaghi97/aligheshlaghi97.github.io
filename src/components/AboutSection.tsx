import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/AboutSection.css";

const AboutSection = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container
      className={`${isVisible ? "animate-fade-in" : ""}`}
      ref={textRef}
      id="/#about"
    >
      <Row>
        <div className="container-header-about-me">
          <h1>About Me</h1>
        </div>
        <div className="container-about-me">
          <h4>
            I am a backend Python developer with over four years of experience,
            specializing in building high-performance, scalable web
            applications. My expertise lies in Python frameworks like Django,
            FastAPI, and Flask, with a strong focus on asynchronous programming
            using Asyncio to maximize Python's efficiency.
          </h4>
          <h4>
            I have a proven track record in designing optimized systems for
            fintech applications, including payment systems and market data
            processing. Passionate about performance and scalability, I
            continuously explore new concepts and technologies to push the
            boundaries of Python backend development.
          </h4>
        </div>
      </Row>
    </Container>
  );
};

export default AboutSection;
