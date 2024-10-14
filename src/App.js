// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ProfileInfo from './components/profileinfo';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import './App.css';


const App = () => {
  const user = {
    name: " Hi I am Sneha Patra!!",
    age: 20,
    email: "patrasneha21@gmail.com",
    bio: "I am a third-year undergraduate student pursuing a Bachelor of Engineering in Information Technology at Vivekanand Education Society's Institute of Technology. I am passionate about leveraging technology to build innovative solutions, with a strong focus on web development, open-source contributions, and sustainable projects.",
    profilePicture: "images.png",
    skills: ["JavaScript", "React", "Node.js", "CSS","html"],
    projects: [
      { title: "InvestHub", description: "InvestHub is a stock tracking platform that offers real-time market data, portfolio management, and personalized alerts to help users make informed decisions. It combines technical analysis tools with market sentiment insights and provides educational resources on investment strategies, making it suitable for both beginners and experienced investors. With customizable dashboards , InvestHub empowers users with data-driven insights and promotes financial literacy." },
      { title: "UniFind", description: "UniFind is a college discovery platform designed to help students explore and find their ideal colleges based on personalized preferences. It provides detailed information on courses, admission criteria, campus facilities, and student reviews to guide informed decisions. Users can filter colleges by location, ranking, fees, and specialization, making the search more efficient. With customizable recommendations and comparisons, UniFind aims to simplify the college selection process and empower students to make confident academic choices" }
    ]
  };

  return (
    <Router>
      <Header />
      <main className='m-5 h-screen'>
        <Routes>
          <Route path="/" element={<ProfileInfo {...user} />} />
          <Route path="/skills" element={<Skills skills={user.skills} />} />
          <Route path="/projects" element={<Projects projects={user.projects} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

