import ProductCard from "../components/ProductCard.js";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.js";

const Products = () => {
  const shopContext = useContext(ShopContext);

  if (!shopContext || !shopContext.productsData) {
    return <div>Loading...</div>;
  }

  const { productsData } = shopContext;

  return (
    <div>
      <h1 className="text-center text-4xl mt-5">Products</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-5 mt-10">
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
