import Navbar from './containers/Navbar';
import Product from './containers/Product';
import menuImage from './images/icon-menu.svg';
import logoImage from './images/logo.svg';
import avatarImage from './images/image-avatar.png';
import closeBtn from './images/icon-close.svg';
import { useState } from 'react';
import Modal from './components/Modal';
import Cart from './containers/Cart';
import prod1 from './images/image-product-1.jpg';
import prod2 from './images/image-product-2.jpg';
import prod3 from './images/image-product-3.jpg';
import prod4 from './images/image-product-4.jpg';
import thumb1 from './images/image-product-1-thumbnail.jpg';
import thumb2 from './images/image-product-2-thumbnail.jpg';
import thumb3 from './images/image-product-3-thumbnail.jpg';
import thumb4 from './images/image-product-4-thumbnail.jpg';
import scrollLeft from './images/icon-previous.svg';
import scrollRight from './images/icon-next.svg';

const products = [
  {
    id: 1,
    images: [
      { prod: prod1, thumb: thumb1 },
      { prod: prod2, thumb: thumb2 },
      { prod: prod3, thumb: thumb3 },
      { prod: prod4, thumb: thumb4 },
    ],
    title1: 'Sneaker Company',
    title2: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    pay: '$125.00',
    discount: '50%',
    price: '$250.00',
  },
];

function App() {
  const [cartList, setCartList] = useState([]);
  const [hideMenu, setHideMenu] = useState(true);
  const [hideCart, setHideCart] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [lightBox, setLightBox] = useState(false);
  const [lightBoxImage, setLightBoxImage] = useState(0);

  const handleBurgerBtn = () => {
    setHideMenu(!hideMenu);
  };

  const cartEntryRemove = (product) => {
    const deleteLine = cartList.find((line) => line.id === product);
    const newList = cartList.filter((elem) => elem.id !== product);
    setCartList(newList);
    setCartQuantity(cartQuantity - deleteLine.quantity);
  };

  const itemInCart = (product) => {
    let inCart = false;
    cartList.forEach((item) => {
      if (item.itemId === product) {
        inCart = true;
      }
    });

    return inCart;
  };

  const handleCheckout = () => {
    cartList.splice(0);
    setHideCart(!hideCart);
    setQuantity(0);
    setCartQuantity(0);
  };

  const handleAddToCart = (product) => {
    const item = products.find((prod) => prod.id === product);
    if (cartList.length === 0 && quantity > 0) {
      setCartList([
        ...cartList,
        {
          itemId: item.id,
          image: item.images[0].thumb,
          title: item.title2,
          quantity: quantity,
          price: item.pay,
        },
      ]);
      setCartQuantity(cartQuantity + quantity);
    } else if (cartList.length > 0 && quantity > 0) {
      const inCart = itemInCart(product);

      if (!inCart) {
        setCartList([
          ...cartList,
          {
            itemId: item.id,
            image: item.images[0].thumb,
            title: item.title2,
            quantity: quantity,
            price: item.pay,
          },
        ]);
        setCartQuantity(cartQuantity + quantity);
      }
    }
  };

  const handleQuantity = (qty) => {
    if (quantity + qty < 0) {
      qty = 0;
    } else if (quantity + qty > 10) {
      qty = 0;
    }
    setQuantity(quantity + qty);
  };

  const handleCartBtn = () => {
    setHideCart(!hideCart);
  };

  const handleImageScroll = (imageIndex) => {
    if (imageIndex < 0) {
      imageIndex = 0;
    } else if (imageIndex >= 4) {
      imageIndex = 3;
    }
    setActiveImage(imageIndex);
  };

  const handleLightBox = (index) => {
    if (lightBox === false) {
      setLightBoxImage(index);
    } else {
      setLightBoxImage(0);
    }

    setLightBox(!lightBox);
  };

  const handleLightBoxScroll = (imageIndex) => {
    if (imageIndex < 0) {
      imageIndex = 0;
    } else if (imageIndex >= 4) {
      imageIndex = 3;
    }
    setLightBoxImage(imageIndex);
  };

  return (
    <div className="page">
      <Navbar
        menu={menuImage}
        close={closeBtn}
        logo={logoImage}
        cartAction={handleCartBtn}
        avatar={avatarImage}
        burger={handleBurgerBtn}
        hideMenu={hideMenu}
        cartQuantity={cartQuantity}
      />
      <Product
        products={products}
        active={activeImage}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        imageScroll={handleImageScroll}
        quantity={quantity}
        handleQuantity={handleQuantity}
        handleAddToCart={handleAddToCart}
        showLightBox={lightBox}
        handleLightBox={handleLightBox}
        handleLightBoxScroll={handleLightBoxScroll}
        lightBoxImage={lightBoxImage}
      />
      <Cart
        hide={hideCart}
        content={cartList}
        cartEntryRemove={cartEntryRemove}
        checkout={handleCheckout}
      />
      <Modal hide={hideMenu} />
      <Modal hide={!lightBox} />
    </div>
  );
}

export default App;
