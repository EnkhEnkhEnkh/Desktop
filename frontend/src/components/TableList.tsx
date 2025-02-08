import React, { useState } from "react";
import Pro from "./ProductGrid";
import { CiMenuKebab } from "react-icons/ci";

interface Table {
  id: number;
  name: string;
  total: number;
  status: boolean;
}

const tables: Table[] = [
  {
    id: 9,
    name: "Ширээ 9",
    total: 2000000,
    status: false,
  },
  {
    id: 10,
    name: "Ширээ 10",
    total: 2000000,
    status: false,
  },
  {
    id: 11,
    name: "Ширээ 11",
    total: 2000000,
    status: false,
  },
  {
    id: 12,
    name: "Ширээ 12",
    total: 2000000,
    status: false,
  },
  {
    id: 13,
    name: "Ширээ 13",
    total: 2000000,
    status: false,
  },
  {
    id: 14,
    name: "Ширээ 14",
    total: 2000000,
    status: false,
  },
];

const ProductList: React.FC = () => {
  const [tableStatus, setStatus] = useState(true);

  // const handleStatusChange = (id: number, status: boolean) => {
  //   const newStatus = status;
  //   tables.find();
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Ширээ</h1>
      <div className="grid grid-cols-2 gap-4 w-full h-svh">
        {tables.map((product) => (
          <div
            key={product.id}
            className={`${
              product.status === true ? "bg-green-400" : "bg-red-400"
            }
              flex p-2 rounded shadow mx-2`}
          >
            <div className="flex-grow">
              <h2 className="text-xl font-bold">{product.id}</h2>
              <p className="text-lg">{product.total}₮</p>
            </div>
            <button
              className="flex-grow-0 content-center"
              // onClick={setStatus(false)}
            >
              <CiMenuKebab size={24} color="black" />{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
