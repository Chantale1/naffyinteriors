import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="about" title="About">
        Tab content for Profile
      </Tab>
      <Tab eventKey="services" title="Services">
        Tab content for Services
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
        Tab content for Reviews
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;