const CheckoutBtn = (props) => {
  return (
    <button className="cart__checkout" onClick={props.action}>
      Checkout
    </button>
  );
};

export default CheckoutBtn;
