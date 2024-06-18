import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const carouselItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
  },
  
  {
    id: 4,
    image: 'https://images.pexels.com/photos/13068358/pexels-photo-13068358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Commercial Design',
    description: 'Create innovative and practical spaces for commercial clients.'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/5691533/pexels-photo-5691533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Interior Renovation',
    description: 'Revamp interiors to enhance functionality and aesthetics.'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1922978/pexels-photo-1922978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Landscape Design',
    description: 'Design outdoor spaces that harmonize with architectural elements.'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg',
    title: 'Retail Design',
    description: 'Create engaging retail environments that attract customers.'
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

