import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Products = () => {
  const { productsData } = useContext(ShopContext);

  return (
    <div>
      <h1 className="text-center text-4xl mt-5"></h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {productsData.map((productDetail) => {
          return (
            <ProductCard key={productDetail.id} productDetail={productDetail} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
