import CartContents from '../components/CartContents';
import CartEmpty from '../components/CartEmpty';

const Cart = (props) => {
  return (
    <article className={`cart ${props.hide ? 'cart-hide' : ''}`}>
      <h1>Cart</h1>
      <span></span>
      {props.content.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartContents
          cartList={props.content}
          remove={props.cartEntryRemove}
          checkout={props.checkout}
        />
      )}
    </article>
  );
};

export default Cart;
