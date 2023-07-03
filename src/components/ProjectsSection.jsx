import React from 'react';
import {Container ,ListGroup, Col, Row, Nav} from 'react-bootstrap';
import "../styles/ProjectsSection.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectsSection = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
   <div className="container-projects" id="projects">
    <div>
    <Container className='p-4'>
     <Row>
       <h2 className="header-projects">Recent Projects</h2>
     </Row>

     <Row>
       <Col md={6}>
         <ListGroup>
           <ListGroup.Item>
             <h4 className="projects-title">Soccer Bet Telegram Bot</h4>
             <Nav.Link role="link"
                       className="nav-btn"
                       onClick={() => openInNewTab("https://t.me/alligator_signal")}>
               <h6 className="projects-title">Telegram</h6>
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <h4 className="projects-title">Remitobit Exchange</h4>
           </ListGroup.Item>
           <ListGroup.Item>
             <h4 className="projects-title">Analytic Back-Test Dashboard Using Dash-Plotly</h4>
           </ListGroup.Item>
           <ListGroup.Item>
             <h4 className="projects-title">Cryptocurrency Screener</h4>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project3" className="nav-btn-custom">
               Project3
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project4" className="nav-btn-custom">
               Project4
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project5" className="nav-btn-custom">
               Project5
             </Nav.Link>
           </ListGroup.Item>
         </ListGroup>
       </Col>

       <Col md={6}>
         <ListGroup>
           <ListGroup.Item>
             <h4 className="projects-title">Alligator Indicator Signal Telegram Bot</h4>
             <Nav.Link role="link"
                       className="nav-btn-custom"
                       onClick={() => openInNewTab("https://github.com/aligheshlaghi97/alligator-telegram-bot")}>
                <h6 className="projects-title">Github</h6>
             </Nav.Link>
             <Nav.Link role="link"
                       className="nav-btn"
                       onClick={() => openInNewTab("https://t.me/alligator_signal")}>
                <h6 className="projects-title">Telegram</h6>
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <h4 className="projects-title">Alligator Back-Tests Using Backtesting.py Library</h4>
           </ListGroup.Item>
           <ListGroup.Item>
             <h4 className="projects-title">Alerting Signal Using Ichimoku Indicator with Python/MQL4</h4>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project3" className="nav-btn-custom">
               Project3
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project4" className="nav-btn-custom">
               Project4
             </Nav.Link>
           </ListGroup.Item>
           <ListGroup.Item>
             <Nav.Link href="#project5" className="nav-btn-custom">
               Project5
             </Nav.Link>
           </ListGroup.Item>
         </ListGroup>
       </Col>

     </Row>
    </Container>
   </div>
  </div>
  );
};

export default ProjectsSection;
