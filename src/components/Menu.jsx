import BurgerBtn from './BurgerBtn';

const Menu = (props) => {
  const menuList = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  return (
    <div className={`navbar__menu ${props.hide ? 'navbar__menu-hide' : ''}`}>
      <BurgerBtn image={props.close} action={props.action} />
      <ul>
        {menuList.map((item, i) => {
          return <li key={i}> {item} </li>;
        })}
      </ul>
    </div>
  );
};

export default Menu;
