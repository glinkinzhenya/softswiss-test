import { useState } from 'react';
import Cart from '../../assets/cart-icon.svg';
import './Burger.scss';

export default function Burger() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`burger__menu ${open ? 'burger__menu-active' : ''}`}>
        <nav>
          <ul className={`burger__menu-list ${open ? 'burger__menu-list-active' : ''}`}>
            <li>
              <a href='/' target='blank'>
                Home
              </a>
            </li>

            <li>
              <a href='/' target='blank'>
                Products
              </a>
            </li>

            <li>
              <button className='burger__menu-button'>
                <img src={Cart} alt='View cart' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={() => handleOpen()} className='burger'>
        <div className={`burger__line burger-one ${open ? 'burger-one__active' : ''}`}></div>
        <div className={`burger__line burger-two ${open ? 'burger-two__active' : ''}`}></div>
        <div className={`burger__line burger-three ${open ? 'burger-three__active' : ''}`}></div>
      </button>
    </>
  );
}
