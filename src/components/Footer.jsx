import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="flex gap-4 flex-wrap">
            <img src={assets.logo} className="mb-5 w-45" alt="" />
            <img className="w-50" src={assets.bct_icon} alt="" />
          </div>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            aliquam corrupti consectetur. Consequuntur adipisci dolor a
            distinctio, omnis, laboriosam impedit enim asperiores in numquam
            nesciunt iste expedita facere alias maiores?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/about")}>
              About us
            </li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+84 (0) 919 345 726</li>
            <li>support@fugina.com.vn</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ fugina.vn - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
