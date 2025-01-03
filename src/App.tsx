import React, { JSX } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/AppSection.css";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import AppNavbar from "./components/AppNavbar";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import BlogDetail from "./components/BlogDetail";

const App = () => {
  const Home = (): JSX.Element => {
    return (
      <div className="app-section">
        <AppNavbar />
        <WelcomeSection />
        <AboutSection />
        <BlogsSection />
        <ContactSection />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic blog route */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
