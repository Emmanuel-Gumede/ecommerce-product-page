const Avatar = (props) => {
  return (
    <div className="navbar__avatar">
      <img src={props.image} alt={'avatar'} />
    </div>
  );
};

export default Avatar;
