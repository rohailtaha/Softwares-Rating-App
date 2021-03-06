import Stars from '../../../../../common/stars list/Stars';
import RatingsList from './RatingsList';

function SoftwareRating({ average_rating, stars_count }) {
  const getTotalStars = () => {
    let totalStars = 0;
    Object.keys(stars_count).forEach(key => {
      totalStars += stars_count[key];
    });

    return totalStars;
  };

  return (
    <div className='software-rating'>
      <h2>Rating</h2>
      <div className='average-rating'>
        <span className='rating-qty'>{average_rating}</span>
        <Stars averageRating={average_rating} />
      </div>

      <RatingsList totalStars={getTotalStars()} stars_count={stars_count} />
    </div>
  );
}

export default SoftwareRating;
