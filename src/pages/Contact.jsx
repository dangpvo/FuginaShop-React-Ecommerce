import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-t-gray-400">
        <Title text1={"CONTACT"} text2={"US"}></Title>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            35/9 Nguyen Trai St., District 5 <br /> Ho Chi Minh City, Vietnam
          </p>
          <p className="text-gray-500">
            Tel: +84 (0) 919 345 726 <br /> Email: support@fugina.com.vn
          </p>
          <p className=" font-semibold text-xl text-gray-600">
            Careers at Fugina Vietnam
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox></NewsLetterBox>
    </div>
  );
};

export default Contact;
