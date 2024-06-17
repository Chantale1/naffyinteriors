import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import CountUp from 'react-countup';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Transform Your Space with Naffy Interiors</h1>
          <p>Discover innovative interior design solutions tailored for your home.</p>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="company-info">
        <h2>About Naffy Interiors</h2>
        <p>
          Naffy Interiors has been a leader in the interior design industry for over a decade.
          We specialize in creating bespoke solutions that enhance your living spaces, blending
          functionality with aesthetics to reflect your unique style.
        </p>
        <p>
          Our team of skilled designers and decorators are committed to delivering exceptional
          results, ensuring your satisfaction with every project we undertake.
        </p>
      </div>

      {/* Home Experience Section */}
      <div className="home-experience">
        <div className="h-years">
          <CountUp className="h-year num" duration={4} end={12} />
          <p>Years Of Experience</p>
        </div>
        <div className="h-s-project">
          <CountUp duration={4} className="h-sp num" end={85} />
          <p>Successful Projects</p>
        </div>
        <div className="h-a-project">
          <CountUp duration={4} className="h-ap num" end={15} />
          <p>Active Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;



