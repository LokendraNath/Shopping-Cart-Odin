import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { productData, setCartProductQtys } = useOutletContext();

  return (
    <div>
      <h1 className="text-center text-4xl mt-5">
        {/* {isLoaded ? "Products" : "Loding...."} */}
      </h1>
      <div className="w-full grid grid-cols-4 gap-10 mt-10">
        {productData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setCartProductQtys={setCartProductQtys}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
