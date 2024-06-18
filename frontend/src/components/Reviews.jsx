import React, { useState } from 'react';

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
  },
  {
    id: 4,
    name: "Alice Brown",
    comment: "Fantastic job on my office space. Loved the attention to detail!",
    rating: 5
  },
  {
    id: 5,
    name: "Robert White",
    comment: "Efficient and courteous service. Will definitely hire them again.",
    rating: 4
  },
  {
    id: 6,
    name: "Emily Green",
    comment: "Great communication throughout the project. Very satisfied.",
    rating: 5
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [
      ...reviews,
      { ...newReview, id: reviews.length + 1 }
    ];
    setReviews(updatedReviews); // Update reviews state with new review

    // Clear the form fields
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <div className="review" key={review.id}>
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
      
      {/* Form for adding new reviews */}
      <form onSubmit={handleSubmit}>
        <h3>Add Your Review</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={newReview.comment}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          required
        >
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;



