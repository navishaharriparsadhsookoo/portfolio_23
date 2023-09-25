import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import './App.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
