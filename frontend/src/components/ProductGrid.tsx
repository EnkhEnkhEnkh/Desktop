import React from "react";
import { Product } from "../module/Types";

const ProductGrid: React.FC<Product[]> = (products) => {
  return (
    <div className="w-full">
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 mb-5"
      >
        {products.map((product) => (
          <div className="w-56 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={
                  product.image instanceof File
                    ? URL.createObjectURL(product.image)
                    : "https://png.pngtree.com/png-clipart/20201208/original/pngtree-creative-flat-coffee-cup-silhouette-png-image_5569828.jpg" // Default image fallback
                }
                className="h-60 w-56 object-cover rounded-t-xl"
                alt={product.name}
              />
              <div className="px-4 py-3 w-56">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.category}
                </span>
                <p className="text-md font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.amount}
                  </p>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>

      {/* 🛑 Grid Section - Ends Here */}

      <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
    </div>
  );
};

export default ProductGrid;
