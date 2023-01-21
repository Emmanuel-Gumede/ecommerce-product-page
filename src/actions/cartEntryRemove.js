const cartEntryRemove = (
  product,
  cartList,
  setCartList,
  setCartQuantity,
  cartQuantity
) => {
  const deleteLine = cartList.find((line) => line.id === product);
  const newList = cartList.filter((elem) => elem.id !== product);
  setCartList(newList);
  setCartQuantity(cartQuantity - deleteLine.quantity);
};

export default cartEntryRemove;
