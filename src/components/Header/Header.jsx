import Logo from '../../assets/images/logo.svg';
import './header.scss';
import Item from '../Item/Item';

const Header = () => {
  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <a href='./index.html'>
          <img
            src={Logo}
            alt='Logo'
          />
        </a>
        <nav className='nav'>{<Item />}</nav>
      </div>
    </header>
  );
};

export default Header;
