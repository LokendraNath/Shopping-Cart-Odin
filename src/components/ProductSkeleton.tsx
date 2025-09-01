import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg">
      {/* Image skeleton */}
      <div className="w-48 h-48 bg-gray-300 rounded-lg mb-4 animate-shimmer"></div>

      {/* Title skeleton */}
      <div className="w-full mb-3">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto animate-shimmer"></div>
      </div>

      {/* Price skeleton */}
      <div className="w-full mb-4">
        <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto animate-shimmer"></div>
      </div>

      {/* Button skeleton */}
      <div className="w-full">
        <div className="h-10 bg-gray-300 rounded-full w-2/3 mx-auto animate-shimmer"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
