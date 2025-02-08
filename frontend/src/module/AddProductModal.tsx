import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Option } from "../module/Types";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (newProduct: {
    name: string;
    desc: string;
    category: Option;
    amount: number;
    image: File | null;
  }) => void;
}

const categories: Option[] = [
  {
    label: "",
    value: "",
    text: "",
  },
  {
    label: "1",
    value: "Food",
    text: "1-р хоол",
  },
  {
    label: "2",
    value: "Food",
    text: "2-р хоол",
  },
];

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState<Option>(categories[0]);
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSelectedChange = (selected: Option) => {
    setCategory(selected);
  };

  const handleAddProduct = () => {
    if (!category || !name || !desc || !amount) {
      alert("Мэдээллийг бүрэн бөглөнө үү!");
      return;
    }
    onAddProduct({ name, desc, category, amount, image });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Шинэ бараа нэмэх</h2>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Барааны нэр</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Тайлбар</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-left text-sm font-medium text-gray-900">
            Ангилал
          </label>
          <Dropdown
            categories={categories}
            selected={category}
            onSelectedChanges={handleSelectedChange}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Үнэ</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Зураг</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {image && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-40 object-cover rounded"
            />
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddProduct}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
