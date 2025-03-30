import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, productSize) => {
    if (!productSize) {
      toast.error("Select product size please!");
      return;
    }

    let cartData = structuredClone(cartItems); //clone the cartItems

    if (cartData[itemId]) {
      if (cartData[itemId][productSize]) {
        //increase the quantity of same item already in cart
        cartData[itemId][productSize] += 1;
      } else {
        //create new entry in cart with diff size
        cartData[itemId][productSize] = 1;
      }
    } else {
      //create completely new entry
      cartData[itemId] = {};
      cartData[itemId][productSize] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      //Check product item
      for (const size in cartItems[items]) {
        //Check product size
        try {
          if (cartItems[items][size] > 0) {
            totalCount += cartItems[items][size];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
