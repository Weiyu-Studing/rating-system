import { useState } from 'react';
import Star from './Star';

const ratingStanders = {
  0: 'Click star to rate',
  1: 'Terrible',
  2: 'Bad',
  3: 'OK',
  4: 'Very good',
  5: 'Amazing',
};

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            selected={star <= rating}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <h2 className="rating-standers">{ratingStanders[rating]}</h2>
    </div>
  );
}

export default StarRating;