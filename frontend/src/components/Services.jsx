import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const serviceDetails = [
  {
    id: 1,
    image:'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Residential Design',
    description: 'Create beautiful residential spaces tailored to your needs.',
    details: `
      Our residential design service focuses on creating bespoke living spaces that reflect your personality and lifestyle. 
      From cozy apartments to luxurious estates, we prioritize functionality and aesthetics to ensure your home is both 
      comfortable and visually stunning.
    `
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5490830/pexels-photo-5490830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hospitality Design',
    description: 'Design functional and appealing spaces for the hospitality industry.',
    details: `
      Hospitality design is all about creating welcoming environments that enhance guest experiences. 
      Whether it's hotels, restaurants, or resorts, we blend functionality with ambiance to create spaces 
      that leave a lasting impression on visitors.
    `
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',

    title: 'Office Design',
    description: 'Transform office spaces into productive environments.',
    details: `
      Our office design services aim to optimize productivity and foster a positive work environment. 
      We consider workflow dynamics, ergonomic principles, and aesthetic appeal to create offices 
      that inspire creativity and efficiency.
    `
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/13068358/pexels-photo-13068358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Commercial Design',
    description: 'Create innovative and practical spaces for commercial clients.',
    details: `
      Commercial design requires a blend of creativity and practicality. Whether it's retail spaces, 
      corporate offices, or public venues, we focus on maximizing functionality while creating spaces 
      that align with your brand identity and business objectives.
    `
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/5691533/pexels-photo-5691533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Interior Renovation',
    description: 'Revamp interiors to enhance functionality and aesthetics.',
    details: `
      Interior renovation breathes new life into existing spaces. We specialize in upgrading interiors 
      to improve functionality, modernize aesthetics, and adapt to changing needs while respecting 
      the original architecture and design intent.
    `
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1922978/pexels-photo-1922978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Landscape Design',
    description: 'Design outdoor spaces that harmonize with architectural elements.',
    details: `
      Landscape design extends the beauty of your property beyond its walls. From gardens and outdoor 
      living areas to sustainable landscapes, we create outdoor spaces that seamlessly integrate with 
      your home or commercial property's architecture and enhance its overall appeal.
    `
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg',
    title: 'Retail Design',
    description: 'Create engaging retail environments that attract customers.',
    details: `
      Retail design plays a crucial role in shaping customer experiences and driving sales. We design 
      retail spaces that captivate shoppers, encourage exploration, and showcase your products in the 
      best possible light, ensuring a memorable and enjoyable shopping environment.
    `
  }
];

const ServicesCarousel = () => {
  return (
    <div className="services-carousel">
      <Carousel>
        {serviceDetails.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image} // Replace with actual image URL
              alt={item.title}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="service-details">
        {serviceDetails.map(item => (
          <div key={item.id} className="service-detail">
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;

