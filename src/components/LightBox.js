import closeBtn from '../images/icon-close.svg';
import scrollLeft from '../images/icon-previous.svg';
import scrollRight from '../images/icon-next.svg';

const LightBox = (props) => {
  return (
    <div className={`product__lightbox ${props.show ? 'product__lightbox--show' : ''}`}>
      <button className="product__lightbox--close" onClick={() => props.close()}>
        <img src={closeBtn} alt="close" />
      </button>
      <div style={{ position: 'relative' }}>
        <button
          className="product__carosel-btn product__carosel-btn--left"
          onClick={() => props.imageScroll(props.active - 1)}
        >
          <img src={scrollLeft} alt="left" />
        </button>
        <button
          className="product__carosel-btn product__carosel-btn--right"
          onClick={() => props.imageScroll(props.active + 1)}
        >
          <img src={scrollRight} alt="right" />
        </button>
        <div className="product__carosel">
          <div
            className="product__carosel-inner"
            style={{ transform: `translateX(-${props.active * 100}%)` }}
          >
            {props.images.map((image, i) => {
              return (
                <div key={i} className="product__carosel-item">
                  <img src={image.prod} alt="product" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="product__lightbox-thumbnails">
        {props.images.map((image, i) => {
          return (
            <div className="product__lightbox-thumb" key={i}>
              <img src={image.thumb} alt="thumb" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightBox;
