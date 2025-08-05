import { useState } from "react";

const ProductCard = ({ product, setCart, cart, onAddToCart }) => {
  const [quntity, setQuntity] = useState(1);

  function handleQtyClick(arg) {
    setQuntity((prev) => {
      if (arg === "plus" && prev < 10) return prev + 1;
      else if (arg === "min" && prev > 0) return prev - 1;
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
      onAddToCart(product, Number(quntity));
      setQuntity(1);
    }
  }

  return (
    <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg">
      <img src="../image/hello.jpg" className="h-50" alt="image tha" />
      <div className="mt-10 px-3 flex items-center flex-col">
        <h2 className="text-xl mb-3 text-start line-clamp-1">
          {product.title}
        </h2>
        <div className="flex text-black items-center mb-5">
          <p className="text-xl text-start mr-5">${product.price}</p>
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
          onClick={() => handleAddToCart(product.id)}
          className="flex bg-blue-800 text-white py-2 text-xl items-center px-5 rounded-full gap-3 active:scale-95 transition-transform duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
