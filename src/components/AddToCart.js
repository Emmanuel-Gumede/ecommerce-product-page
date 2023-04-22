import AddToCartBtn from './AddToCartBtn';
import QtyCounter from './QtyCouter';

const AddToCart = (props) => {
  return (
    <div className="product__addtocart">
      <QtyCounter
        quantity={props.quantity}
        handleQuantity={props.handleQuantity}
        product={props.product}
      />
      <AddToCartBtn product={props.product} action={props.handleAddToCart} />
    </div>
  );
};

export default AddToCart;
