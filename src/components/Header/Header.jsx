import './Header.scss';
import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart-icon.svg';
import CartHover from '../../assets/cart-icon--hover.svg';
import Burger from '../Burger/Burger';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/' },
];

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo' href='/'>
          <img src={Logo} alt='Company Logo' />
        </a>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            {navLinks.map((link, index) => (
              <li key={index} className='header__nav-item'>
                <a className='header__nav-link' href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className='header__nav-button'>
                <img className='header__nav-icon' src={Cart} alt='View cart' />
                <img
                  className='header__nav-icon header__nav-icon--hover'
                  src={CartHover}
                  alt='View cart'
                />
              </button>
            </li>
          </ul>


          <Burger/>
        </nav>
      </div>
    </header>
  );
};
