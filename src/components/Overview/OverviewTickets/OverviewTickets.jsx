import './overview-tickets.scss';

const OverviewTickets = ({children}) => {
  return (
    <div className='container'>
      <div className='overview__tickets tickets'>
        <div className='tickets__header'>
          <div>
            <h2 className='tickets__title'>Unresolved tickets</h2>
            <p><span>Group:</span> Support</p>
          </div>
          <a
            className='tickets__link'
            href='./index.html'
          >
            View details
          </a>
        </div>
        <ul className='tickets__list' >{children}</ul>
      </div>
    </div>
  );
};

export default OverviewTickets;
