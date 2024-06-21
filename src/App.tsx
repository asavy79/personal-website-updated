import React from "react";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Hello } from "./components/Hello";
import Education from "./components/Education";
import { Projects } from "./components/Projects";
import { ContactPage } from "./components/ContactPage";

function App() {
  return (
    <div className="bg-gray-50">
      <NavBar />
      <Hello />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
