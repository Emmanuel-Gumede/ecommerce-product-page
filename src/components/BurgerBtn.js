const BurgerBtn = (props) => {
  return (
    <button className="menu-btn" onClick={props.action}>
      <img src={props.image} alt={'menu'} />
    </button>
  );
};

export default BurgerBtn;
