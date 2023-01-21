const Modal = (props) => {
  return <div className={`page__modal ${props.hide ? 'page__modal-hide' : ''}`}></div>;
};

export default Modal;
