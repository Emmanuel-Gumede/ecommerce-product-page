const CartBtn = (props) => {
  return (
    <button className="nav__cart" onClick={props.action}>
      <img src={props.image} alt={'cart'} />
      <div
        className={`nav__cart-indicator ${
          props.cartQuantity > 0 ? 'nav__cart-indicator--show' : ''
        } `}
      >
        {' '}
        {props.cartQuantity}{' '}
      </div>
    </button>
  );
};

export default CartBtn;
