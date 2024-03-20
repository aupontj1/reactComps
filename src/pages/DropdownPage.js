import { useState } from "react";
import Dropdown from "../components/Dropdown";

// Component Func
function DropdownPage(){

  // UseState variables
  const [selection, setSelection] = useState(null);

  // Event Handler Func
  const handleSelect = (option) => {
    setSelection(option);
  }

  // Array of Objects
  const options = [
    {label: 'red', value: 'red'},
    {label: 'blue', value: 'blue'},
    {label: 'green', value: 'green'},
  ];
  
  // Component Element w/ Props
   return(
     <div className="flex">

     <Dropdown 
     onChange={handleSelect} 
     value={selection} 
     options={options} />

     </div>
   ) 
};

export default DropdownPage;