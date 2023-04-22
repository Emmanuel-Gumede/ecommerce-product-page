import AddToCart from './AddToCart';
import ProductPrice from './ProductPrice';

const ProductDetails = (props) => {
  return (
    <div className="product__details">
      <h1> {props.title1} </h1>
      <h2> {props.title2} </h2>
      <p> {props.description} </p>
      <ProductPrice pay={props.pay} discount={props.discount} price={props.price} />
      <AddToCart
        quantity={props.quantity}
        handleQuantity={props.handleQuantity}
        handleAddToCart={props.handleAddToCart}
        product={props.product}
      />
    </div>
  );
};

export default ProductDetails;
