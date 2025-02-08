import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

type Option = {
  label: string;
  value: string;
  text: string;
};

interface DropdownOptions {
  categories: Option[];
  placeholder?: string;
  selected: Option | null;
  onSelectedChanges: (selected: Option) => void;
}

const DropDown = ({
  categories,
  selected,
  onSelectedChanges,
  placeholder = "Ангилал",
}: DropdownOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.addEventListener("click", onBodyClick);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div ref={ref}>
      <div className="w-64">
        <div className="relative w-full ">
          <button
            onClick={toggleDropDown}
            className="mt-1 flex w-full cursor-pointer bg-white rounded-md border transition duration-500 ease-in-out hover:bg-gray-50 border-gray-200 px-3 py-2 text-left focus:outline-none focus:right-0 focus:ring-purple-800 focus:border-puple/30 focus:shadow-[0px_0px_0px_3px_rgba(158,119,237,0.24)] text-sm"
          >
            <div className="flex justify-between w-full">
              {selected ? (
                <div className="flex gap-x-2">
                  <span className="font-normal block truncate">
                    {selected.value}
                  </span>
                  <span className="font-normal block truncate text-gray-500">
                    {selected.label}
                  </span>
                </div>
              ) : (
                <span className="font-normal block truncate text-gray-400">
                  {placeholder}
                </span>
              )}
              ‍<FaChevronDown size={18} />
            </div>
          </button>
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-[220px] rounded-md py-1 text-base ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm">
              {categories.map((option) => (
                <li
                  key={option.value}
                  className={`${
                    selected?.value === option.value && "bg-slate-100"
                  } hover:bg-slate-100 transition-all flex justify-between cursor-pointer text-gray-900 select-none relative py-2 px-3`}
                  onClick={() => {
                    onSelectedChanges(option);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-x-2">
                    <span className="font-normal block truncate">
                      {option.value}
                    </span>
                    <span className="font-normal block truncate text-gray-500">
                      {option.label}
                    </span>
                  </div>
                  {selected?.value === option.value && (
                    <FaCheck size={10} color="blue" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
