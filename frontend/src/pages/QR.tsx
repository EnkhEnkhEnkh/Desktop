import React, { useState } from "react";
import DeleteModal from "../module/DeleteQRModal";
import AddQrModal from "../module/AddQRModal";
import { QrListProps } from "../module/Types";
import List from "../module/List";
import QRCode from "qrcode";

const roomqr: QrListProps = {
  title: "Өрөө",
  data: [
    {
      id: 1,
      name: "Өрөө 1",
      desc: "1-р өрөөний тайлбар",
      status: 1,
    },
    {
      id: 2,
      name: "Өрөө 2",
      desc: "2-р өрөөний тайлбар",
      status: 0,
    },
  ],
};

const tableqr: QrListProps = {
  title: "Ширээ",
  data: [
    {
      id: 1,
      name: "Ширээ 1",
      desc: "1-р ширээний тайлбар",
      status: 1,
    },
    {
      id: 2,
      name: "Ширээ 2",
      desc: "2-р ширээний тайлбар",
      status: 2,
    },
  ],
};

async function generateQRCode(data: {
  id: string;
  name: string;
}): Promise<string> {
  try {
    const jsonData = JSON.stringify(data);
    const qrCode = await QRCode.toDataURL(jsonData);
    return qrCode;
  } catch (error) {
    console.error("QR код үүсгэхэд алдаа гарлаа: ", error);
    throw error;
  }
}

const QuickResPage: React.FC = () => {
  const [isQrModalOpen, setQrModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddQrModalOpen, setAddQrModalOpen] = useState(false);

  const openDelete = () => {
    setDeleteModalOpen(true);
  };

  const showStored = () => {
    const value = localStorage.getItem("qrCodes");
    console.log(value);
  };

  const closeDelete = () => {
    setDeleteModalOpen(false);
  };

  const openAddQR = () => setAddQrModalOpen(true);
  const closeAddQR = () => setAddQrModalOpen(false);

  return (
    <div className="h-screen text-center bg-gray-600 p-2">
      <div className="flex flex-row bg-gray-600 rounded-xl overflow-hidden h-fit w-screen">
        <img
          src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png"
          alt="qr image"
          className="w-72 h-72 bg-gray-200 m-3 rounded-xl flex-col"
        />
        <div className="flex flex-col">
          {/* qr image */}
          <div className="bg-gray-600 ">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mx-20">
                  Item 1
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Description for Item 1
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Status: <span className="text-green-600">Active</span>
                </p>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="space-x-4">
            <button
              className="font-bold w-32 my-1 hover:bg-gray-300 hover:shadow-md hover:shadow-teal-400 cursor-pointer transition duration-500 border rounded-xl p-2"
              onClick={showStored}
            >
              Татах
            </button>
            <button
              className="font-bold w-32 my-1 hover:bg-gray-300 hover:shadow-md hover:shadow-blue-400 cursor-pointer transition duration-500 border rounded-xl p-2"
              onClick={openAddQR}
            >
              Солих
            </button>
            <AddQrModal isOpen={isAddQrModalOpen} onClose={closeAddQR} />
            <button
              className="font-bold w-32 my-1 hover:bg-gray-300 hover:shadow-md hover:shadow-red-400 cursor-pointer transition duration-500 border rounded-xl p-2"
              onClick={openDelete}
            >
              Устгах
            </button>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDelete} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 m-3">
        {List(roomqr)}
        {List(tableqr)}
      </div>
    </div>
  );
};

export default QuickResPage;
