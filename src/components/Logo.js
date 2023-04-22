const Logo = (props) => {
  return (
    <div className="navbar__logo">
      <img src={props.image} alt={'logo'} />
    </div>
  );
};

export default Logo;
