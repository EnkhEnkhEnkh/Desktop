import React from "react";
import { QrListProps } from "./Types";

const List: React.FC<QrListProps> = ({ title, data }) => {
  return (
    <div className="flex-col">
      <h2 className="text-lg leading-6 font-medium text-black text-start p-2">
        {title}
      </h2>
      <ul className="bg-gray-300 rounded-xl">
        {data.map((list) => (
          <li>
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mx-20">
                  {list.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {list.desc}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {list.status} <span className="text-green-600">Active</span>
                </p>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
