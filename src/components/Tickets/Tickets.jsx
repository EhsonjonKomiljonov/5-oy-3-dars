import './tickets.scss';
import SortIcon from '../../assets/images/sort-icon.svg';
import FilterIcon from '../../assets/images/filter-icon.svg';
import { DataAllTickets } from '../../db/DataAllTickets';

export const Tickets = ({ children }) => {
  return (
    <div className='tickets-page'>
      <div className='container'>
        {children}
        <div className='tickets-page__inner'>
          <div className='tickets-page__header d-flex align-items-center justify-content-between mb-5'>
            <h3 className='tickets-page__title'>All tickets</h3>
            <ul className='d-flex align-items-center'>
              <li className='d-flex align-items-center me-4'>
                <img
                  src={SortIcon}
                  alt='Sort icon'
                />
                <a
                  className='ms-2 text-decoration-none'
                  href='/'
                >
                  Sort
                </a>
              </li>
              <li className='d-flex align-items-center'>
                <img
                  src={FilterIcon}
                  alt='Sort icon'
                />
                <a
                  className='ms-2 text-decoration-none'
                  href='/'
                >
                  Filter
                </a>
              </li>
            </ul>
          </div>
          <div className='tickets-page__body'>
            <div className='tickets-page__body__inner d-flex align-items-center justify-content-between'>
              <p>Ticket details</p>
              <p>Customer name</p>
              <p>Date</p>
              <p>Priority</p>
            </div>
            <ul className='tickets-page__list'>
              {DataAllTickets.map((el) => (
                <li
                  className='tickets-page__item d-flex align-items-center justify-content-between'
                  key={el.title}
                >
                  <div className='d-flex align-items-center'>
                    <img
                      className='rounded-circle'
                      src={el.img}
                      alt='Person'
                    />
                    <div>
                      <h4>{el.title}</h4>
                      <p>{el.Updateddata}</p>
                    </div>
                  </div>
                  <div>
                    <h4>{el.customerName}</h4>
                    <p>{el.data}</p>
                  </div>
                  <div>
                    <h4>{el.dataTwo}</h4>
                    <p>{el.time}</p>
                  </div>
                  <div>
                    <button className='text-uppercase'>{el.priority}</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='tickets-page__foot py-4 d-flex align-items-center'>
            <select className='bg-transparent border-0'>
              <option
                selected
                disabled
              >
                Rows per page: <span>8</span>
              </option>
            </select>
            <p>1-8 of 1240</p>
          </div>
        </div>
      </div>
    </div>
  );
};
