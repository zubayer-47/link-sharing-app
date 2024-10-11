import { Equal } from "lucide-react";
import { useState } from "react";
import CustomSelect from "../../../components/CustomSelect";
import options from "../../../data/options.json";

export type Option = {
  value: string;
  label: string;
  icon: string;
};

const EditorLinkItem = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const getSelectedOption = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <div className="select-none space-y-2 rounded-lg bg-gray-100 p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <Equal className="text-muted" />
          <span className="text-muted">Link #1</span>
        </div>
        <button type="button" className="text-muted hover:text-gray-800">
          Remove
        </button>
      </div>

      <CustomSelect
        getSelectedOption={getSelectedOption}
        selectedOption={selectedOption}
      />

      <div>
        <label className="text-gray-600">Link</label>
        <input
          type="text"
          className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 focus:outline-none"
          placeholder="https://example.com"
        />
      </div>
    </div>
  );
};

export default EditorLinkItem;
