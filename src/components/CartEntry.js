import CartEntryDeleteBtn from './CartEntryDeleteBtn';

const CartEntry = (props) => {
  return (
    <div className="cart__entry">
      <div>
        <img src={props.cartList.image} alt="product" />
      </div>
      <div>
        <p> {props.cartList.title} </p>
        <p>
          {props.cartList.price} x {props.cartList.quantity}
          <span
            style={{
              display: 'inline',
              marginLeft: '1rem',
              color: '#1D2026',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            ${parseInt(props.cartList.price.match(/\d+/g)) * props.cartList.quantity}
          </span>
        </p>
      </div>
      <CartEntryDeleteBtn action={props.remove} />
    </div>
  );
};

export default CartEntry;
