import { Link } from 'react-router-dom';
import HomeLink from '../../common/home link/HomeLink';
import SoftwareInfo from './page components/software info/SoftwareInfo';
import SoftwareDescription from './page components/software rating and description/software description/SoftwareDescription';
import SoftwareRating from './page components/software rating and description/software rating/SoftwareRating';
import ReviewsSection from './page components/reviews section/ReviewsSection';
import useSoftwareReviews from '../../../hooks/useSoftwareReviews';

function SoftwareDetailsPage(props) {
  const {
    name,
    developer,
    average_rating,
    total_reviews,
    stars_count,
    id,
    description,
  } = props.software;

  const [reviews, reviewsFetched] = useSoftwareReviews(id);

  return (
    <div className='wrapper software-details-wrapper'>
      <div className='breadcrumbs'>
        <HomeLink isActive={false} />
        <span> \ </span>
        <Link
          className='page-link active-page-link'
          to={`/software_details/${id}`}
        >
          {name}
        </Link>
      </div>

      <SoftwareInfo
        name={name}
        developer={developer}
        average_rating={average_rating}
        total_reviews={total_reviews}
        id={id}
      />

      <section className='software-description-and-rating'>
        <SoftwareDescription description={description} />
        <SoftwareRating
          average_rating={average_rating}
          stars_count={stars_count}
        />
      </section>

      {reviewsFetched && (
        <ReviewsSection
          software={{
            name,
            developer,
            total_reviews,
            id,
          }}
          reviews={reviews}
        />
      )}
    </div>
  );
}

export default SoftwareDetailsPage;
