const ProductPrice = (props) => {
  return (
    <div className="product__price">
      <p className="product__price-pay">
        {props.pay} <span> {props.discount} </span>
      </p>
      <p className="product__price-full"> {props.price} </p>
    </div>
  );
};

export default ProductPrice;
