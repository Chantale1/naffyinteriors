import React from 'react';

// Define reviewsData with sample review data
const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    comment: "Great service! Naffy Interiors really transformed my home.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Professional team, excellent workmanship.",
    rating: 4
  },
  {
    id: 3,
    name: "Michael Johnson",
    comment: "Highly recommended. They exceeded my expectations.",
    rating: 5
  }
];


const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviewsData.map((review, index) => (
        <div className="review" key={index}>
          <div className="review-header">
            <h3>{review.name}</h3>
            <div className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i}>&#9733;</span> // Star icon for each rating
              ))}
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

