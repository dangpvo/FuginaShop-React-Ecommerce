import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-t-gray-400">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            incidunt consequuntur molestias. Quisquam, modi reprehenderit. Nulla
            fuga reprehenderit perferendis facilis impedit? Molestiae amet
            laudantium sint! Sit explicabo aliquam earum corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas labore voluptatum eum natus cupiditate repellendus facilis iure
            officiis facere maxime soluta possimus ex non recusandae
            perspiciatis adipisci? Est, nostrum!
          </p>
          <b className="text-gray-800">Our Missions</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis odio quam quod suscipit cupiditate a similique nulla ea
            ut amet, iste eos culpa, mollitia possimus praesentium asperiores
            eligendi adipisci. Vel?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetterBox></NewsLetterBox>
    </div>
  );
};

export default About;
