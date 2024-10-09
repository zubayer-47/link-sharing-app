import { Equal } from "lucide-react";
import CustomSelect from "../../../components/CustomSelect";
import { useState } from "react";
import options from '../../../data/options.json'

export type Option = {
  value: string;
  label: string;
  icon: string
}

const LinkItem = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  console.log(selectedOption.icon)

  const getSelectedOption = (option: Option) =>{
    setSelectedOption(option)
  }
  
  return <div className="bg-gray-100 rounded-lg p-4 space-y-2 select-none">
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-1">
        <Equal className="text-gray-500" />
        <span className="text-gray-500">Link #1</span>
      </div>
      <button type="button" className="text-gray-500 hover:text-gray-800">Remove</button>
    </div>

    <CustomSelect 
      getSelectedOption={getSelectedOption}
      selectedOption={selectedOption}
    />

    <div>
      <label className="text-gray-600">Link</label>
      <input type="text" className="bg-gray-50 border border-gray-200 rounded-md p-2 w-full focus:outline-none"
      placeholder="https://example.com"
      />
    </div>
  </div>
}

export default LinkItem