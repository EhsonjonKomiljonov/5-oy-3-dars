import './overview-rating-item.scss';

const OverviewRatingItem = ({ text, number }) => {
  return (
    <li className='ratings__item'>
      <h3 className='rating__subtitle'>{text}</h3>
      <ins>{number}</ins>
    </li>
  );
};

export default OverviewRatingItem;
