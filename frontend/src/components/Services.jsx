import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const carouselItems = [
  {
    id: 1,
    image: 'Photo by Pixabay from Pexels: https://www.pexels.com/photo/four-gray-bar-stools-in-front-of-kitchen-countertop-279648/',
    title: 'Residential Design',
    description: 'Create beautiful residential spaces tailored to your needs.'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hospitality Design',
    description: 'Design functional and appealing spaces for the hospitality industry.'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
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
