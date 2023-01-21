import LightBox from '../components/LightBox';
import ProductDetails from '../components/ProductDetails';
import ProductImage from '../components/ProductImage';

const Product = (props) => {
  return (
    <>
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <article className="product">
              <ProductImage
                images={product.images}
                active={props.active}
                scrollLeft={props.scrollLeft}
                scrollRight={props.scrollRight}
                imageScroll={props.imageScroll}
                lightbox={props.handleLightBox}
              />
              <ProductDetails
                product={product.id}
                title1={product.title1}
                title2={product.title2}
                description={product.description}
                quantity={props.quantity}
                handleQuantity={props.handleQuantity}
                handleAddToCart={props.handleAddToCart}
                pay={product.pay}
                discount={product.discount}
                price={product.price}
              />
            </article>
            <LightBox
              images={product.images}
              active={props.lightBoxImage}
              scrollLeft={props.scrollLeft}
              scrollRight={props.scrollRight}
              imageScroll={props.handleLightBoxScroll}
              show={props.showLightBox}
              close={props.handleLightBox}
            />
          </div>
        );
      })}
    </>
  );
};

export default Product;
