import { Link } from 'react-router-dom';

function Review(props) {
  const {
    review,
    maxLength,
    maxLengthDifference,
    softwareID,
    fromSoftwareDetailsPage,
    noReviewsPage,
  } = props;
  const lengthDifference = review.review.length - maxLength;

  return (
    <li className='review'>
      <div className='review__info'>
        <span className='reviewer'></span>
        {review.username}
        <span className='review-date'>{review.date}</span>
      </div>
      <div className='review__rating-type'>
        <span className='rating-qty'>{review.rating}</span>
        <img src='/images/red star.svg' alt='red star' />
      </div>
      <p className='review__para'>
        {lengthDifference > maxLengthDifference
          ? `${review.review.slice(0, maxLength)} ....`
          : review.review}
      </p>
      {lengthDifference > maxLengthDifference && (
        <Link
          className='see-more-link'
          to={{
            pathname: `/software_details/${softwareID}/reviews/${review.id}`,
            state: {
              fromSoftwareDetailsPage,
              noReviewsPage,
            },
          }}
        >
          See more
        </Link>
      )}
    </li>
  );
}

export default Review;
