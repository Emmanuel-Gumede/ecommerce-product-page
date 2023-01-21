import cart from '../images/icon-cart1.svg';

const AddToCartBtn = (props) => {
  return (
    <button
      className="product__addtocart-btn"
      onClick={() => props.action(props.product)}
    >
      <img src={cart} alt="cart" /> Add To Cart
    </button>
  );
};

export default AddToCartBtn;
