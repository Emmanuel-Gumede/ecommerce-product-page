const ImageScrollBtn = (props) => {
  return (
    <button
      className={`product__scroll-btn ${
        props.position === 'left'
          ? 'product__scroll-btn--left'
          : 'product__scroll-btn--right'
      }`}
      onClick={() => props.action(props.move)}
    >
      <img src={props.image} alt="scroll" />
    </button>
  );
};

export default ImageScrollBtn;
