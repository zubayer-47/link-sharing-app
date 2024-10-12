import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";
import githubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedIn-logo.png";
import youtubeLogo from "../assets/youtube-logo.png";
import optionsData from "../data/options.json";
import { Option } from "../pages/home/partials/EditorLinkItem";

const optionLogos = {
  github: githubLogo,
  linkedin: linkedInLogo,
  youtube: youtubeLogo,
};

const options = optionsData as Option[];

type Props = {
  selectedOption: Option;
  getSelectedOption: (option: Option) => void;
};

const CustomSelect: FC<Props> = ({ getSelectedOption, selectedOption }) => {
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
        className="flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-200 bg-gray-50 p-2"
        onClick={toggleDropdown}
      >
        <span className="mr-2 flex items-center gap-2">
          <img
            src={optionLogos[selectedOption.key]}
            className="h-5 w-full"
            alt=""
          />
          {selectedOption.label}
        </span>
        <ChevronDown />
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          {options.map((option: Option) => (
            <li
              key={option.key}
              className="flex cursor-pointer items-center p-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              <span className="mr-2 flex items-center gap-2">
                <img
                  src={optionLogos[option.key]}
                  className="h-5 w-full object-cover"
                  alt=""
                />
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
