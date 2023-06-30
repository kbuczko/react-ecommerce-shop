import {removeFromCart} from "../../features/cartSlice";
import "./Cart.css";
import {useSelector, useDispatch} from "react-redux";
import iconDelete from "../../images/icon-delete.svg";
import image1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import {Product} from "../../models/Product";

const Cart = () => {
  const products = useSelector((state: any) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <p className="cart__header">Cart</p>
      {products.length === 0 && (
        <p className="cart__empty">Your cart is empty.</p>
      )}
      {products.length > 0 &&
        products.map((product: Product) => (
          <div key={product.name} className="cart__product">
            <img className="cart__image" src={image1Thumbnail} />
            <div>
              <p className="cart__product__name">{product.name}</p>
              <p className="cart__product__price">
                <span>${product.price}.00</span>
                <span> x {product.quantity}</span>
                <span className="cart__product__total">
                  ${product.price * product.quantity}
                </span>
              </p>
            </div>
            <button onClick={() => dispatch(removeFromCart(product))}>
              <img src={iconDelete} alt="Delete" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
