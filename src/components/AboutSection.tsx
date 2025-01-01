import React, {useEffect, useRef, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import "../styles/AboutSection.css"

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
    <Container className={`${isVisible ? 'animate-fade-in' : ''}`}
               ref={textRef} id="about">
      <Row>
        <div className="container-header-about-me">
          <h2>About Me</h2>
        </div>
        <div className="container-about-me">
          <h4>
           I am a passionate backend developer with experience in Python, Django and FastAPI.
           I love building web applications and exploring new technologies related to web development and financial
           software solutions. I also have two years of experience as quantitative developer/analyst.
          </h4>
        </div>
      </Row>

      <Row className="experience">
        <h3 className="container-header-my-skills">My Skills</h3>
        <div className="skills-rows">
          <div className="circle-custom">
            <div className="skills-list">
              <h4 >Quant Developer</h4>
              <ul className="skills-ul">
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="circle-custom">
            <div className="skills-list">
              <h4>Quant Analyst</h4>
              <ul className="skills-ul">
                <li>Pandas</li>
                <li>Backtest</li>
                <li>SQL</li>
                <li>Statistics</li>
                <li>Tableau</li>
              </ul>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AboutSection;
