
import { ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import { Option } from '../pages/home/components/LinkItem';
import options from '../data/options.json'

type Props = {
  selectedOption: Option;
  getSelectedOption: (option: Option) => void;
}

const CustomSelect: FC<Props> = ({getSelectedOption, selectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    getSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="bg-gray-50 border border-gray-200 rounded-md p-2 w-full flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="mr-2 flex items-center gap-2">
          <img src={selectedOption.icon} className='w-5 h-5' alt='' />
          {selectedOption.label}</span>
        <span className=''>
          <ChevronDown />
        </span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full border border-gray-300 bg-white rounded-md shadow-lg">
          {options.map((option: Option) => (
            <li
              key={option.value}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <span className="mr-2 flex items-center gap-2">
                <img src={option.icon} className='w-5 h-5' alt='' />
                {option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;