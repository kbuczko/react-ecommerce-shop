import minus from "../../../../images/icon-minus.svg";
import plus from "../../../../images/icon-plus.svg";
import cart from "../../../../images/icon-cart.svg";
import "./ProductDetails.css";
import {useState} from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => ++prevQuantity);
  };
  const handleDecrementQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevQuantity) => --prevQuantity);
  };
  return (
    <section className="main__details">
      <h2 className="main__company">Sneaker Company</h2>
      <h1 className="main__name">Fall Limited Edition Sneakers</h1>
      <p className="main__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="main__price">
        <h3>$125.00</h3>
        <span className="main__price-badge">50%</span>
      </div>
      <span className="main__price-old">$250.00</span>
      <div className="main__actions">
        <div className="main__actions-quantity">
          <button
            className="main__actions-btn"
            onClick={handleDecrementQuantity}
          >
            <img src={minus} alt="" />
          </button>
          <span>{quantity}</span>
          <button
            className="main__actions-btn"
            onClick={handleIncrementQuantity}
          >
            <img src={plus} alt="" />
          </button>
        </div>
        <button className="main__actions-cart">
          <img src={cart} alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
