import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row space-y-2 sticky top-0">
      <div className="flex w-screen bg-gray-900">
        <button className="p-4 pl-8 text-lg font-bold bg-gray-800 text-white">
          MyApp
        </button>{" "}
        <div
          className={`w-full bg-gray-800 text-white flex flex-row justify-end mx-auto items-center space-x-4`}
        >
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Нүүр
          </Link>{" "}
          <Link to="/product" className="hover:bg-gray-700 p-2 rounded">
            Бараа
          </Link>{" "}
          <Link to="/report" className="hover:bg-gray-700 p-2 rounded">
            Тайлан
          </Link>{" "}
          <Link to="/quickres" className="hover:bg-gray-700 p-2 rounded">
            QR
          </Link>{" "}
          <Link to="/about" className="hover:bg-gray-700 p-2 rounded">
            Гарын авалга
          </Link>{" "}
          <Link to="/account" className="hover:bg-gray-700 p-2 rounded">
            Хаяг
          </Link>{" "}
        </div>{" "}
      </div>
    </nav>
  );
};
export default Navbar;
