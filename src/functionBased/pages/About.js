import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => (
  <div>
    <Navbar />
    <div>hello from about page</div>
    <div>
      <ul>
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </div>
);
export default About;
