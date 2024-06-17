import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <Tabs className="my-tabs" defaultActiveKey="home" id="my-tab">
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="about" title="About">
          <About />
        </Tab>
        <Tab eventKey="services" title="Services">
          <Services />
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <Reviews />
        </Tab>
      </Tabs>
    </Router>
  );
}

export default App;

