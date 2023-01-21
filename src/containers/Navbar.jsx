import Avatar from '../components/Avatar';
import BurgerBtn from '../components/BurgerBtn';
import CartBtn from '../components/CartBtn';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import cart from '../images/icon-cart2.svg';

const Navbar = ({
  menu,
  logo,
  avatar,
  hideMenu,
  burger,
  close,
  cartAction,
  cartQuantity,
}) => {
  return (
    <nav className="navbar">
      <BurgerBtn image={menu} action={burger} />
      <Logo image={logo} />
      <Menu hide={hideMenu} close={close} action={burger} />
      <CartBtn image={cart} action={cartAction} cartQuantity={cartQuantity} />
      <Avatar image={avatar} />
    </nav>
  );
};

export default Navbar;
