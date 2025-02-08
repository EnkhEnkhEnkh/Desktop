import React from "react";
import Pro from "./ProductGrid";
import { CiMenuKebab } from "react-icons/ci";

interface Room {
  id: number;
  name: string;
  total: number;
  status: boolean;
}

const products: Room[] = [
  {
    id: 1,
    name: "Өрөө 1",
    total: 0,
    status: true,
  },
  {
    id: 2,
    name: "Өрөө 2",
    total: 0,
    status: true,
  },
  {
    id: 3,
    name: "Өрөө 3",
    total: 0,
    status: true,
  },
  {
    id: 4,
    name: "Өрөө 4",
    total: 2000000,
    status: false,
  },
  {
    id: 5,
    name: "Өрөө 5",
    total: 2000000,
    status: false,
  },
  {
    id: 6,
    name: "Өрөө 6",
    total: 0,
    status: true,
  },
  {
    id: 7,
    name: "Өрөө 7",
    total: 2000000,
    status: false,
  },
  {
    id: 8,
    name: "Өрөө 8",
    total: 2000000,
    status: false,
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Өрөө</h1>
      <div className="grid grid-cols-2 gap-4 w-full h-svh">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${
              product.status === true ? "bg-green-400" : "bg-red-400"
            }
              flex p-2 rounded shadow mx-2`}
          >
            <div className="flex-grow">
              <p className="text-xl font-bold">{product.id} Time</p>
              <p className="text-lg">{product.total}₮</p>
            </div>
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
