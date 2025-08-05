import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { productData, handleAddToCart } = useOutletContext();
  const [quntity, setQuntity] = useState(0);

  function addToCart() {}

  return (
    <div>
      <h1 className="text-center text-4xl mt-5">
        {/* {isLoaded ? "Products" : "Loding...."} */}
      </h1>
      <div className="w-full grid grid-cols-4 gap-10 mt-10">
        {productData.map((product) => {
          return (
            <ProductCard
              product={product}
              AddBtn={handleAddToCart}
              setQuntity={setQuntity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
