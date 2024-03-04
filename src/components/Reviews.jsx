import React, { useState } from "react";
import "../styles//ProductReviews.css"; // Import CSS file for styling

const ProductReviews = () => {
  const [reviews, setReviews] = useState([
    { name: "John", comment: "Great product, highly recommended!", rating: 4.5, avatar: "https://via.placeholder.com/50" },
    { name: "Alice", comment: "Fast shipping, arrived earlier than expected.", rating: 4.8, avatar: "https://via.placeholder.com/50" },
    { name: "Bob", comment: "Average quality, but good value for the price.", rating: 3.9, avatar: "https://via.placeholder.com/50" },
    { name: "John", comment: "Great product, highly recommended!", rating: 4.5, avatar: "https://via.placeholder.com/50" },
    { name: "Alice", comment: "Fast shipping, arrived earlier than expected.", rating: 4.8, avatar: "https://via.placeholder.com/50" },
    { name: "Bob", comment: "Average quality, but good value for the price.", rating: 3.9, avatar: "https://via.placeholder.com/50" },
    { name: "John", comment: "Great product, highly recommended!", rating: 4.5, avatar: "https://via.placeholder.com/50" },
    { name: "Alice", comment: "Fast shipping, arrived earlier than expected.", rating: 4.8, avatar: "https://via.placeholder.com/50" },
    { name: "Bob", comment: "Average quality, but good value for the price.", rating: 3.9, avatar: "https://via.placeholder.com/50" },
]);

  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 0, avatar: "https://via.placeholder.com/50" });


  const handleSubmit = (event) => {
    event.preventDefault();
    if (newReview.comment.trim() !== "" && newReview.name.trim() !== "" && newReview.rating !== 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", comment: "", rating: 0, avatar: "https://via.placeholder.com/50" });
    }
  };

  // Calculate total star rating
  const totalStars = reviews.reduce((total, review) => total + review.rating, 0);
  const averageRating = totalStars / reviews.length;

  return (
    <div className="product-reviews">
      <div  style={{backgroundColor:"#252B48", padding:"10px", color:"white", borderRadius:"8px"}}>
      <h2 className="review-title">Product Reviews</h2>
      <div className="review-summary">
        <p>Total Reviews: {reviews.length}</p>
        <p>Total Star Rating: {averageRating.toFixed(1)} ({reviews.length} reviews)</p>
      </div>
      </div>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <img src={review.avatar} alt="Avatar" className="avatar" />
            <div className="review-content">
              <p className="reviewer-name">Reviewer: {review.name}</p>
              <p className="reviewer-rating">Rating: {review.rating}</p>
              <p className="reviewer-comment">Comment: {review.comment}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ProductReviews;
