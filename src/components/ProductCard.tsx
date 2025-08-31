import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductCard = ({ productDetail }) => {
  const { onAddToCart } = useContext(ShopContext);
  const [quntity, setQuntity] = useState(1);

  function handleQtyClick(arg) {
    setQuntity((prev) => {
      if (arg === "plus" && prev < 10) return prev + 1;
      else if (arg === "min" && prev > 1) return prev - 1;
      return prev;
    });
  }

  function handleInputChange(e) {
    const value = e.target.value;

    if (value === "") {
      setQuntity("");
      return;
    }
    const num = Number(value);
    if (!isNaN(num) && num >= 1 && num <= 10) {
      setQuntity(num);
    }
  }

  function handleAddToCart() {
    if (quntity && Number(quntity) > 0) {
      onAddToCart(productDetail, Number(quntity));
      setQuntity(1);
    }
  }

  return (
    <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_8px_12px_0px_rgba(0,_0,_0,_0.1)]">
      <img src={productDetail.image} className="h-50" alt="image tha" />
      <div className="mt-10 px-3 flex items-center flex-col">
        <h2 className="text-xl mb-3 text-start line-clamp-1">
          {productDetail.title}
        </h2>
        <div className="flex text-black items-center mb-5">
          <p className="text-xl text-start mr-5">${productDetail.price}</p>
          <div className="border border-black px-2 py-1 rounded-2xl flex items-center">
            <span
              onClick={() => handleQtyClick("min")}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              -
            </span>
            <input
              type="number"
              min={1}
              value={quntity}
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
          onClick={() => handleAddToCart(productDetail.id)}
          className="flex bg-blue-800 text-white py-2 text-xl items-center px-5 rounded-full gap-3 active:scale-95 transition-transform duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
