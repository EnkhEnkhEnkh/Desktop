import React, { useState } from "react";
import Sidebar from "../components/Categorys";
import ProductGrid from "../components/ProductGrid";
import AddProductModal from "../module/AddProductModal";
import { Item, Option } from "../module/Types";

const initialProducts: Item[] = [
  {
    _id: "1",
    name: "Product 1",
    description: "Baraanii tailbar",
    image: new File(["image data for product 1"], "coffe1.jpg", {
      type: "image/jpeg",
    }),
    prices: [{ size: "L", price: 15000 }],
    subcategory: { _ref: "subcategory1" }, // ✅ Add missing subcategory reference
  },
];

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Item[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Item[]>(initialProducts);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filter: string) => {
    const newFilters = new Set(activeFilters);

    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }

    setActiveFilters(newFilters);

    if (newFilters.size === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.subcategory && newFilters.has(product.subcategory._ref) // ✅ Fix: Ensure subcategory exists
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddProduct = (newProduct: {
    name: string;
    desc: string;
    subcategory: Option;
    amount: number;
    image: File | null;
  }) => {
    const newProductWithId: Item = {
      _id: (products.length + 1).toString(),
      name: newProduct.name,
      description: newProduct.desc,
      image:
        newProduct.image ||
        new File(["default image"], "default.jpg", { type: "image/jpeg" }),
      prices: [],
      subcategory: { _ref: newProduct.subcategory.value }, // ✅ Ensure subcategory is assigned correctly
      quantity: newProduct.amount,
    };

    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProductWithId];
      setFilteredProducts(updatedProducts); // ✅ Fix: Ensure filteredProducts is updated correctly
      return updatedProducts;
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-400">
      <Sidebar onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-500 text-white text-5xl shadow-lg flex items-start justify-center hover:bg-blue-600 focus:outline-none"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ProductPage;
