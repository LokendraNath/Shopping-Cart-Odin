import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { productData, handleAddToCart } = useOutletContext();

  return (
    <div>
      <h1 className="text-center text-4xl mt-5">
        {/* {isLoaded ? "Products" : "Loding...."} */}
      </h1>
      <div className="w-full grid grid-cols-4 gap-10 mt-10">
        {productData.map((p) => {
          return (
            <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg">
              <img src={p.image} className="h-50" alt="" />
              <div className="mt-10 px-3 flex items-center flex-col">
                <h2 className="text-xl mb-3 text-start line-clamp-1">
                  {p.title}
                </h2>
                <div className="flex text-black items-center mb-5">
                  <p className="text-xl text-start mr-5">${p.price}</p>
                  <div className="border border-black px-2 py-1 rounded-2xl flex items-center">
                    <span className="text-xl">+</span>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="bg-white text-black w-8 border-none focus:border-none outline-none ml-4"
                    />
                    <span className="text-xl">-</span>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(productData.id)}
                  className="flex bg-blue-800 text-white py-2 text-xl items-center px-5 rounded-full gap-3 active:scale-95 transition-transform duration-300"
                >
                  Add To Cart <ShoppingBag />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
