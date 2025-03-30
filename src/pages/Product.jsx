import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const getProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    getProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={productData.name}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt={productData.name} />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border border-gray-400 py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-800 border-2" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 w-full h-[1px] bg-gray-400 border-0" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 15 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-400 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-400 px-5 py-3 text-sm">
            Reviews (150)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-400 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            eaque esse mollitia ratione dolorem, quaerat harum rem nam, hic quos
            optio illo quis explicabo soluta, atque animi nihil quo doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor,
            ducimus possimus necessitatibus odio similique ipsam laborum minus
            quia fugit quibusdam magnam, consequuntur omnis a culpa voluptatem
            autem expedita amet. Minima ipsam doloribus accusantium aliquid
            eligendi laboriosam provident at labore animi. Dicta non dolore qui
            iusto sed. Dicta, autem totam possimus, animi rerum id nobis, ab
            expedita tenetur natus itaque? Deleniti assumenda reprehenderit sit
            nam velit voluptatibus qui illo inventore similique voluptates.
            Saepe assumenda aliquam, enim eligendi atque asperiores excepturi,
            fuga ab, quo facilis eveniet esse facere temporibus numquam. Eius!
            Fugit unde veniam excepturi corporis cupiditate nisi, voluptatibus
            corrupti temporibus minima ab praesentium perferendis qui officia
            nihil magni, ea exercitationem nobis ullam ipsam quidem sunt labore
            maxime? Possimus, rem explicabo. Commodi omnis eligendi delectus,
            saepe non esse possimus accusamus veritatis minus temporibus id
            atque dolorem quod facere explicabo nihil repellendus ratione
            dignissimos tenetur. Perferendis hic at quia. Qui, voluptas
            officiis! Quis officia labore incidunt reiciendis iusto! Ducimus
            iusto culpa odit? Unde adipisci animi error non delectus illum quos
            nemo? Praesentium, fugiat distinctio nemo neque aspernatur odio
            facere! Dolore, incidunt hic. Omnis, dicta quis. Cumque repellendus
            ratione, consequuntur, odit mollitia voluptate nostrum minus totam
            quidem praesentium, obcaecati nulla dolorum impedit atque rem
            recusandae sequi ab voluptas architecto assumenda voluptatem?
            Dolorem, magni. Saepe dolore, ipsam consequatur ea veritatis ipsum
            laborum earum, doloremque ex eum doloribus dicta repudiandae, vitae
            deserunt? Id cupiditate recusandae dicta nihil, soluta nam, quia
            quas assumenda quod qui praesentium!
          </p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      ></RelatedProducts>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
