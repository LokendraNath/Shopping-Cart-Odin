import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext.js";

const ProductCard = ({ productDetail }) => {
  const context = useContext(ShopContext);
  if (!context)
    throw new Error("ShopContext must be used within ShopContextProvider");

  const onAddToCart = context.onAddToCart;
  const [quantity, setQuantity] = useState(1);

  function handleQtyClick(arg: "plus" | "min") {
    setQuantity((prev) => {
      const numPrev = typeof prev === "string" ? Number(prev) : prev;
      if (arg === "plus" && numPrev < 10) return numPrev + 1;
      else if (arg === "min" && numPrev > 1) return numPrev - 1;
      return numPrev;
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }
    const num = Number(value);
    if (!isNaN(num) && num >= 1 && num <= 10) {
      setQuantity(num);
    }
  }

  function handleAddToCart() {
    if (quantity && Number(quantity) > 0) {
      onAddToCart(productDetail, Number(quantity));
      setQuantity(1);

      // Show success toast
      if (window.showToast) {
        window.showToast(`${productDetail.title} added to cart!`, "success");
      }
    }
  }

  return (
    <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg hover-lift transition-all duration-300">
      <div>
        <img src={productDetail.image} className="h-50" alt="image tha" />
      </div>
      <div className="mt-5 md:mt-10 flex items-start flex-col">
        <h2 className="text-sm md:text-lg mb-3 text-wrap line-clamp-1">
          {productDetail.title}
        </h2>
        <div className="flex mx-auto text-black items-center mb-5">
          <p className="text-xl mr-5">${productDetail.price}</p>
          <div className="hidden border border-black px-2 py-1 rounded-2xl md:flex items-center">
            <span
              onClick={() => handleQtyClick("min")}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              -
            </span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleInputChange}
              max={10}
              className="bg-white text-black w-8 border-none focus:border-none outline-none ml-4"
            />
            <span
              onClick={() => handleQtyClick("plus")}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              +
            </span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex self-center bg-blue-800 text-white py-2 text-sm md:text-xl items-center px-5 rounded-full gap-3 active:scale-95 transition-transform duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
