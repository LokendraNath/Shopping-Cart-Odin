import ProductCard from "../components/ProductCard.js";
import ProductSkeleton from "../components/ProductSkeleton.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import EmptyState from "../components/EmptyState.js";
import SearchBar from "../components/SearchBar.js";
import { useContext, useState, useEffect, useMemo } from "react";
import { ShopContext } from "../Context/ShopContext.js";

const Products = () => {
  const shopContext = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search term - moved before conditional returns
  const filteredProducts = useMemo(() => {
    if (!shopContext?.productsData) return [];
    if (!searchTerm.trim()) return shopContext.productsData;

    return shopContext.productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [shopContext?.productsData, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (!shopContext) {
    return <LoadingSpinner size="large" text="Initializing..." />;
  }

  if (isLoading) {
    return (
      <div>
        <h1 className="text-center text-4xl mt-5 mb-10">Products</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!shopContext.productsData || shopContext.productsData.length === 0) {
    return (
      <EmptyState
        title="No Products Found"
        description="We couldn't find any products at the moment. Please try again later."
        icon="🔍"
        action={{
          label: "Refresh Page",
          onClick: () => window.location.reload(),
        }}
      />
    );
  }

  return (
    <div>
      <h1 className="text-center text-4xl mt-5 mb-10">Products</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
        {filteredProducts.map((productDetail) => (
          <ProductCard key={productDetail.id} productDetail={productDetail} />
        ))}
      </div>
      {filteredProducts.length === 0 && searchTerm && (
        <EmptyState
          title="No Products Found"
          description={`No products found matching "${searchTerm}". Try a different search term.`}
          icon="🔍"
        />
      )}
    </div>
  );
};

export default Products;
