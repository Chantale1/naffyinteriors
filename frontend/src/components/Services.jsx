import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const carouselItems = [
  {
    id: 1,
    image: '/home/chantale/Naffy Interiors/frontend/src/components/Images/service1.jpg',
    title: 'Residential Design',
    description: 'Create beautiful residential spaces tailored to your needs.'
  },
  {
    id: 2,
    image: '/home/chantale/Naffy Interiors/frontend/src/components/Images/service2.jpg',
    title: 'Hospitality Design',
    description: 'Design functional and appealing spaces for hospitality industry.'
  },
  {
    id: 3,
    image: '/home/chantale/Naffy Interiors/frontend/src/components/Images/service3.jpg',
    title: 'Office Design',
    description: 'Transform office spaces into productive environments.'
  }
];

const ServicesCarousel = () => {
  return (
    <Carousel>
      {carouselItems.map(item => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ServicesCarousel;