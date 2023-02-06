import './overview-tickets-item.scss';

const OverviewTicketsItem = ({ text, number }) => {
  return (
    <li className='tickets__item'>
      <h3>{text}</h3>
      <ins>{number}</ins>
    </li>
  );
};

export default OverviewTicketsItem;
