interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const SideBar: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    onFilterChange(filter);
  };

  return (
    <div className="w-64 bg-gray-200 p-4">
      <h3 className="text-lg font-bold mb-4">Ангилал</h3>

      <div>
        <input
          type="checkbox"
          value="alcohol"
          onChange={handleCheckboxChange}
        />{" "}
        Алкохол
      </div>
      <div>
        <input
          type="checkbox"
          value="non-alcohol"
          onChange={handleCheckboxChange}
        />{" "}
        Алкохолгүй
      </div>
      <div>
        <input type="checkbox" value="food" onChange={handleCheckboxChange} />{" "}
        Хоол
      </div>
      {/* Бусад filter-ийн сонголтууд */}
    </div>
  );
};

export default SideBar;
