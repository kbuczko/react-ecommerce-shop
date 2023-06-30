import minus from "../../../../images/icon-minus.svg";
import plus from "../../../../images/icon-plus.svg";
import cart from "../../../../images/icon-cart.svg";
import "./ProductDetails.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../features/cartSlice";

const mainProduct = {
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything theweather can offer.`,
  price: 125.0,
  discount: "50%",
  oldPrice: 250.0,
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => ++prevQuantity);
  };
  const handleDecrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQuantity) => --prevQuantity);
  };
  return (
    <section className="main__details">
      <h2 className="main__company">{mainProduct.company}</h2>
      <h1 className="main__name">{mainProduct.name}</h1>
      <p className="main__description">{mainProduct.description}</p>
      <div className="main__price">
        <h3>${mainProduct.price}.00</h3>
        <span className="main__price-badge">{mainProduct.discount}</span>
      </div>
      <span className="main__price-old">${mainProduct.oldPrice}.00</span>
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
        <button
          className="main__actions-cart"
          onClick={() => {
            dispatch(addToCart({...mainProduct, quantity: quantity}));
            setQuantity(1);
          }}
        >
          <img src={cart} alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
