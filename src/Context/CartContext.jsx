import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContext({ children }) {
  const cartInitialValue = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cart, setCart] = useState(cartInitialValue);

  const saveToLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const addToCart = (item) => {
    const isExits = cart.some((cartItem) => cartItem.id === item.id);

    saveToLocalStorage();

    if (isExits) {
      setCart(
        cart.map((cartItem) => {
          return cartItem.id === item.id // cartItem = Product
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((CartItem) => CartItem.id != item.id);
    setCart(newCart);
  };

  const ClearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [cart]);

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        ClearCart,
        removeFromCart,
        saveToLocalStorage,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
