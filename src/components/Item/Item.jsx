import { NavLink } from 'react-router-dom';
import './item.scss';
import Icon1 from '../../assets/images/nav-icon1-active.svg';
import Icon2 from '../../assets/images/nav-icon2-active.svg';
import Icon3 from '../../assets/images/nav-icon3.svg';
import Icon4 from '../../assets/images/nav-icon4.svg';
import Icon5 from '../../assets/images/nav-icon5.svg';
import Icon6 from '../../assets/images/nav-icon6.svg';
import Icon7 from '../../assets/images/nav-icon7.svg';
import Icon8 from '../../assets/images/nav-icon8.svg';

const Item = () => {
  return (
    <ul className='w-100'>
      <li className='nav__item'>
        <NavLink
          to='/'
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: '#3F4049',
                  color: '#DDE2FF',
                  borderLeft: '3px solid #9FA2B4',
                }
              : {
                  backgroundColor: 'transparent',
                  color: '#A4A6B3',
                  borderLeft: 'none',
                }
          }
          className='nav__link'
        >
          <img
            src={Icon1}
            alt='icon'
          />
          Overview
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          to='/tickets'
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: '#3F4049',
                  color: '#DDE2FF',
                  borderLeft: '3px solid #9FA2B4',
                }
              : {
                  backgroundColor: 'transparent',
                  color: '#A4A6B3',
                  borderLeft: 'none',
                }
          }
          className='nav__link'
        >
          <img
            src={Icon2}
            alt='icon'
          />
          Tickets
        </NavLink>
      </li>
      <li className='nav__item'>
        <a
          href='/'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon3}
            alt='icon'
          />
          Ideas
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='/'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon4}
            alt='icon'
          />
          Contacts
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='/'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon5}
            alt='icon'
          />
          Agents
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='/'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon6}
            alt='icon'
          />
          Articles
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='/settings'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon7}
            alt='icon'
          />
          Settings
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='/'
          style={{
            backgroundColor: 'transparent',
            color: '#A4A6B3',
            borderLeft: 'none',
          }}
          className='nav__link'
        >
          <img
            src={Icon8}
            alt='icon'
          />
          Subscription
        </a>
      </li>
    </ul>
  );
};

export default Item;
