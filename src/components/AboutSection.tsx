import React, { useEffect, useRef, useState, JSX } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AboutSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to calculate years of experience dynamically
  const calculateExperience = (startYear: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  const yearsOfExperience = calculateExperience(2021);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    observer.observe(sectionRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      id="/#about"
      className={`about-section-container ${isVisible ? "animate-in" : ""}`}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10} lg={8} className="text-center">
            <h1 className="section-title">About Me</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="about-content-card">
              <p className="about-paragraph">
                I am a passionate <span className="highlight-text">backend Python developer</span> with
                <span className="highlight-text">{yearsOfExperience}+ years of experience</span>,
                specializing in building high-performance, scalable web
                applications. My expertise lies in Python frameworks like
                <span className="highlight-text"> Django, FastAPI, and Flask</span>,
                with a strong focus on asynchronous programming using
                <span className="highlight-text"> Asyncio</span> to maximize Python's efficiency.
              </p>
              <p className="about-paragraph">
                I have a proven track record in designing optimized systems for
                <span className="highlight-text"> fintech applications</span>, including payment
                systems and market data processing. Passionate about
                performance and scalability, I continuously explore new concepts
                and technologies to push the boundaries of Python backend
                development. I thrive on solving complex problems and delivering
                robust, efficient solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
