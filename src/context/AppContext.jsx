import { createContext, useContext, useEffect, useState } from "react";
import { UseLocalStorage } from "../Hooks/UseLocalStorage";
import Cookies from "js-cookie";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [cartItems, setCartItems] = UseLocalStorage("cartItems", []);

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const AddToCart = (id) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);

      if (!existingItem) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const increaseProductQty = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseProductQty = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => {
          if (item.id == id) {
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter(Boolean)
    );
  };

  const removeProduct = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const getProductQty = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.qty : 0;
  };

  const cartQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  // console.log("cartQty", cartQty);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        AddToCart,
        getProductQty,
        cartQty,
        increaseProductQty,
        decreaseProductQty,
        removeProduct,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
