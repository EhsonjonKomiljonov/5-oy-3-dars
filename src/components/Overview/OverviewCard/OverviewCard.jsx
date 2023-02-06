import './overview-card.scss';

const OverviewCard = ({ title, number }) => {
  return (
    <div className='overview__card card'>
      <h3 className='card__title'>{title}</h3>
      <ins className='card__number'>{number}</ins>
    </div>
  );
};

export default OverviewCard;
