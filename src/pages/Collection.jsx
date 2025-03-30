import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (event) => {
    if (categories.includes(event.target.value)) {
      setCategories((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setCategories((prev) => [...prev, event.target.value]);
    }
  };

  const toggleSubCategory = (event) => {
    if (subCategories.includes(event.target.value)) {
      setSubCategories((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategories((prev) => [...prev, event.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    //Check the searchbox
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    //Filter with category and sub category
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categories.includes(item.category)
      );
    }

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }

    //Sort with sorttype
    switch (sortType) {
      case "low-high":
        setFilterProducts(
          productsCopy.sort((item1, item2) => item1.price - item2.price)
        );
        break;
      case "high-low":
        setFilterProducts(
          productsCopy.sort((item1, item2) => item2.price - item1.price)
        );
        break;
      default:
        setFilterProducts(productsCopy);
        break;
    }
  };

  const sortProduct = (type) => {
    //sort filter products
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(
          filterProductsCopy.sort((item1, item2) => item1.price - item2.price)
        );
        break;
      case "high-low":
        setFilterProducts(
          filterProductsCopy.sort((item1, item2) => item2.price - item1.price)
        );
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400">
      {/* Filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side - show products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* Product Sort Feature */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* List of products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
