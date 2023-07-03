import React from 'react';
import './styles/AppSection.css';
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import AppNavbar from "./components/AppNavbar";
import ProjectsSection from "./components/ProjectsSection";


const App = () => {
  return (
      <div className="app-section">
        <AppNavbar/>
        <WelcomeSection/>
        <AboutSection/>
        <ProjectsSection/>
      </div>
  );
};

export default App;
