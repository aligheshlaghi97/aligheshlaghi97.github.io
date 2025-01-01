import React from "react";
import "./styles/AppSection.css";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import AppNavbar from "./components/AppNavbar";
import BlogsSection from "./components/BlogsSection";

const App = () => {
  return (
    <div className="app-section">
      <AppNavbar />
      <WelcomeSection />
      <AboutSection />
      <BlogsSection />
    </div>
  );
};

export default App;
