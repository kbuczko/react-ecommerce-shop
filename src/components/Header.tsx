import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav__ul">
          <div>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <div className="nav__buttons">
            <li>
              <button className="nav__buttons__cart">
                <img src={cart} alt="" />
              </button>
              <button className="nav__buttons__avatar">
                <img src={avatar} alt="" />
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;