import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>
      <div>
        {cartData.map((item, index) => {
          const prodItem = products.find((pItem) => pItem._id === item._id);
          return (
            <div
              key={index}
              className="py-4 border-t border-b border-t-gray-300 border-b-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr-2fr-0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={prodItem.image[0]}
                  alt={prodItem.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {prodItem.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {prodItem.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-400 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border border-gray-400 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal></CartTotal>
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
