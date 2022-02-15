import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => (
  <div className="container">
    <Navbar />
    <div>hello from about page</div>
    <div>
      <div>
        <Link to="about-app">About App</Link>
      </div>
      <div>
        <Link to="about-author">About Author</Link>
      </div>
      <Outlet />
    </div>
  </div>
);
export default About;
