import React, { useState } from "react";

const ProductRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="product-rating" >
      <h3 style={{color:"#252B48"}}>Product Rating</h3>
      <p>Current Rating: {rating}</p>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{ cursor: "pointer", color: index < rating ? "orange" : "gray" }}
            onClick={() => handleRatingChange(index + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductRating;
