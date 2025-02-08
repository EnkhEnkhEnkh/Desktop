import React from "react";
import Pro from "./ProductGrid";
import { CiMenuKebab } from "react-icons/ci";

interface Product {
  id: number;
  name: string;
  owner: number;
  status: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Өрөө 1",
    owner: 80123456,
    status: false,
  },
  {
    id: 2,
    name: "Өрөө 2",
    owner: 80123456,
    status: false,
  },
  {
    id: 3,
    name: "Өрөө 3",
    owner: 80123456,
    status: false,
  },
  {
    id: 4,
    name: "Өрөө 4",
    owner: 80123456,
    status: false,
  },
  {
    id: 5,
    name: "Өрөө 5",
    owner: 80123456,
    status: false,
  },
  {
    id: 6,
    name: "Өрөө 6",
    owner: 80123456,
    status: false,
  },
  {
    id: 7,
    name: "Өрөө 7",
    owner: 80123456,
    status: false,
  },
  {
    id: 8,
    name: "Өрөө 8",
    owner: 80123456,
    status: false,
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="container p-2">
      <h1 className="text-2xl font-bold mb-4 text-white">Захиалга</h1>
      <div className="grid grid-cols-1 gap-4 w-full">
        {products.map((product) => (
          <div key={product.id} className="flex rounded shadow mx-2">
            <div className="flex-grow">
              <p className="text-white">{product.name}</p>
              <h2 className="text-xl font-bold text-white">{product.owner}</h2>
            </div>
            <button className="flex-grow-0 text-sm font-medium text-white-500 content-center text-center bg-green-500 rounded-full m-3 p-1">
              Болсон
            </button>
            <button className="flex-grow-0 text-sm font-medium text-white-500 content-center text-center bg-red-400 rounded-full m-3 p-1">
              Цуцлах
            </button>
            <button className="flex-grow-0 content-center">
              <CiMenuKebab size={24} color="black" />{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
