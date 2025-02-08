import React from "react";
import RoomList from "../components/RoomList";
import TableList from "../components/TableList";
import OrderList from "../components/OrderList";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray-900 grid grid-cols-5 justify-items-between mx-auto">
      <div className="p-2 bg-gray-800">
        <RoomList />
        <TableList />
      </div>
      <div className="row-span-2 col-span-2">
        <OrderList />
      </div>
      <div className="row-span-2 col-span-2">
        <OrderList />
      </div>
    </div>
  );
};
export default Home;
