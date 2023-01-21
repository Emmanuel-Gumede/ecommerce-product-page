import CartEntry from './CartEntry';
import CheckoutBtn from './CheckoutBtn';

const CartContents = (props) => {
  return (
    <div className="cart__contents">
      {props.cartList.map((list) => {
        return <CartEntry cartList={list} key={list.itemId} remove={props.remove} />;
      })}
      <CheckoutBtn action={props.checkout} />
    </div>
  );
};

export default CartContents;
