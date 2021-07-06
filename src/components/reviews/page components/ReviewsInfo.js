import { Component } from 'react'
import ReviewsCount from '../../common/ReviewsCount';
import FilterRatingForm from './FilterRatingForm';


class ReviewsInfo extends Component {

  
  render() {
    const {filterReviews, total_reviews} = this.props;
    return (
      <div className='reviews__info'>
        <ReviewsCount total_reviews={total_reviews} />
        <FilterRatingForm filterReviews={filterReviews} />
      </div>
    );
  }
}

export default ReviewsInfo
