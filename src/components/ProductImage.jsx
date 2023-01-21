import ImageScrollBtn from './ImageScrollBtn';

const ProductImage = (props) => {
  return (
    <div className="product__images">
      <div className="product__display">
        <ImageScrollBtn
          image={props.scrollLeft}
          position={'left'}
          action={props.imageScroll}
          move={props.active - 1}
        />
        <ImageScrollBtn
          image={props.scrollRight}
          position={'right'}
          action={props.imageScroll}
          move={props.active + 1}
        />
        <div
          className="product__display-inner"
          style={{ transform: `translateX(-${props.active * 100}%)` }}
        >
          {props.images.map((image, i) => {
            return (
              <div key={i} className="product__display-item">
                <img src={image.prod} alt="product" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="product__images--thumbnails">
        {props.images.map((image, i) => {
          return (
            <button
              key={i}
              className={`product__thumbnail ${
                props.active === i ? 'product__thumbnail--active' : ''
              }`}
              onClick={() => props.lightbox(i)}
            >
              <img src={image.thumb} alt="thumbnail" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
