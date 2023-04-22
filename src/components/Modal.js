const Modal = (props) => {
  return (
    <div
      className={`page__modal ${props.hide ? 'page__modal-hide' : ''}`}
      onClick={() => {
        console.log('modal clicked');
      }}
    ></div>
  );
};

export default Modal;
