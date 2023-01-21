import remove from '../images/icon-delete.svg';

const CartEntryDeleteBtn = (props) => {
  return (
    <button className="cart__entry-delete" onClick={() => props.action(props.product)}>
      <img src={remove} alt="remove" />
    </button>
  );
};

export default CartEntryDeleteBtn;
