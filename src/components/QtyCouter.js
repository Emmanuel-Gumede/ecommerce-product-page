import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';

const QtyCounter = (props) => {
  return (
    <div className="product__counter">
      <button onClick={() => props.handleQuantity(-1, props.product)}>
        <img src={minus} alt="minus" />
      </button>
      <span style={{ fontWeight: '700', fontSize: '1rem', color: '#1D2026' }}>
        {' '}
        {props.quantity}{' '}
      </span>
      <button onClick={() => props.handleQuantity(1, props.product)}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default QtyCounter;
