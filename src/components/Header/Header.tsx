import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import menu from "../../images/icon-menu.svg";
import "./Header.css";
import {useState} from "react";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";
import {Product} from "../../models/Product";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  const productsQuantity = useSelector((state: {cart: any}) =>
    state.cart.products.reduce(
      (acc: number, currValue: Product) => acc + currValue.quantity,
      0
    )
  );
  return (
    <header className="header">
      <button className="header__mobile" onClick={() => setMenuOpened(true)}>
        <img src={menu} alt="Menu" />
      </button>
      {menuOpened && (
        <div className="header__menu__wrapper">
          <div className="header__menu">
            <button
              className="header__mobile"
              onClick={() => setMenuOpened(false)}
            >
              X
            </button>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}

      <img className="header__logo" src={logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav__ul">
          <div className="nav__tabs">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <div className="nav__buttons">
            <li>
              <div className="nav__buttons__cart-wrapper">
                <button
                  className="nav__buttons__cart"
                  onClick={() => setCartOpened((prevValue) => !prevValue)}
                >
                  <img src={cart} alt="" />
                </button>
                {productsQuantity > 0 && (
                  <div className="nav__buttons__cart-badge">
                    {productsQuantity}
                  </div>
                )}
              </div>
              <button className="nav__buttons__avatar">
                <img src={avatar} alt="" />
              </button>
            </li>
            {cartOpened && <Cart />}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
