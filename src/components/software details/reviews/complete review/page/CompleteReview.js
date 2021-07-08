import { Component } from 'react';
import Review from '../../../common components/reviews/review list/Review';
import SoftwareBasicInfo from '../../../../common/software basic info/SoftwareBasicInfo';
import { Link } from 'react-router-dom';
import HomeLink from '../../../../common/home link/HomeLink';

class CompleteReview extends Component {
  render() {
    const { name, developer, id } = this.props.software;
    const { review, fromSoftwareDetailsPage } = this.props;

    return (
      <div className='wrapper review-wrapper'>
        <div className='breadcrumbs'>
          <HomeLink isActive={false} />
          <span> \ </span>
          <Link
            className='page-link'
            to={{
              pathname: `/software_details/${id}`,
            }}
          >
            {name}
          </Link>
          <span> \ </span>
          <Link
            className='page-link'
            to={{
              pathname: `/software_details/${id}/reviews`,
            }}
          >
            {' '}
            Reviews
          </Link>
          <span> \ </span>
          <Link
            className='page-link active-page-link'
            to={{
              pathname: `/software_details/${id}/reviews/review/${review.username}`,
            }}
          >
            {' '}
            Review
          </Link>
        </div>

        <section className='software'>
          <SoftwareBasicInfo name={name} developer={developer} />
        </section>

        <Link
          className='back-link'
          to={
            fromSoftwareDetailsPage
              ? {
                  pathname: `/software_details/${id}`,
                }
              : {
                  pathname: `/software_details/${id}/reviews`,
                }
          }
        >
          <img src='/images/back arrow.svg' alt='back arrow' />{' '}
          <span>Back</span>
        </Link>
        <Review review={review} />
      </div>
    );
  }
}

export default CompleteReview;