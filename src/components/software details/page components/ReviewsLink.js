import { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewsLink extends Component {
  render() {
    const { softwareID } = this.props;

    return (
      <Link
        className='reviews-link'
        to={{
          pathname: `/software_details/reviews/${softwareID}`,
        }}
      >
        {' '}
        See all reviews
      </Link>
    );
  }
}

export default ReviewsLink;
