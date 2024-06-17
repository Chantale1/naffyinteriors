import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function About () {
  return (
    <div className="about">
      <div className="about-header">
        <h1>
          About Naffy Interiors<p>Home / About Us</p>
        </h1>
      </div>
      <div className="quotes">
        <div className="pattern first">
          <p></p>
        </div>
        <div className="content">
          <h1>“</h1>
          <p className="comment">
            I believe interiors should reflect the client's ideas, enhance their
            lifestyle, and be timeless.
          </p>
          <p className="author">- Naffy Interiors</p>
        </div>
        <div className="pattern second"></div>
      </div>
      <div className="about-concept">
        <div className="con firstPart">
          <div className="c-text">
            <h2>Who Are We?</h2>
            <p>
              Naffy Interiors is a premier interior design and consultancy firm
              based in [Location], founded by [Founder's Name]. We specialize in
              creating unique and personalized interior spaces that reflect our
              clients' vision and lifestyle.
            </p>
          </div>
        </div>
        <div className="con secondPart">
          <div className="c-text">
            <h2>What We Do?</h2>
            <p>
              With over [Years of Experience] years of experience in the
              industry, we offer comprehensive interior design services for
              residential, commercial, and hospitality sectors. Our services
              range from conceptual design to project execution, ensuring
              exceptional quality and client satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="creative-pro">
        <h2>Have an Idea?</h2>
        <p>
          Whether you're looking to redesign your home, office, or commercial
          space, we're here to turn your ideas into reality. Contact us today to
          discuss your project!
        </p>
        <div className="creMailBox">
          <div className="cre-text">
            <textarea
              name="interested"
              placeholder="Hello, I am interested in.."
            ></textarea>
          </div>
          <div className="cre-send">
            <button>
              Send Now <BsArrowRight style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="history">
        <h2>History</h2>
        <p>
          Naffy Interiors has been shaping interior spaces since [Year of
          Establishment], bringing innovation and elegance to residential and
          commercial projects across [Location]. Our team's expertise and
          dedication have earned us a reputation for excellence and client
          satisfaction.
        </p>
      </div>
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>
          Whether you're ready to start your project or simply have a question,
          feel free to contact us. We're here to help!
        </p>
        <div className="contact-info">
          <h3>Naffy Interiors</h3>
          <div className="contact-links">
            <a href="tel:+1234567890">+1 (234) 567-890</a>
            <a href="mailto:info@naffyinteriors.com">info@naffyinteriors.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
