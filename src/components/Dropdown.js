import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


// Component Func w/ Passed Down Props
function Dropdown({options, value, onChange}){
    
    // UseState Variables
    const[isOpen, setIsOpen] = useState('false');
    
    // UseRef Hook Func 
    const Elem = useRef();

    // UseEffect Func to Listen for Click Event
    useEffect(() => {
        const handler = (event) => {
            // If there's no reference, return early from the handler
            if(!Elem.current){
                return
            };

            // Assume if element is inside that property
            if(!Elem.current.contains(event.target)){
                setIsOpen(false);
            };
        }

        document.addEventListener('click', handler, true);
        
        return () => {
            document.removeEventListener('click', handler);   
        }
        
    }, []);


    // Event Handler Click Func
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    // Event Handler Click Option Func
    const handleClickOption = (option) => {
        // Close Dropdown
        setIsOpen(false)
        // What option did the user click on??
        onChange(option);
    }

    // Map Func
    const renderedOptions = options.map ((option) =>{
        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleClickOption(option)} key={option.value}>
            {option.label}
        </div>
        )
    });

    // JSX Elements Returned
    return(
        <div ref={Elem} className="w-48 relative">
            <Panel 
            className="flex justify-between items-center cursor-pointer" 
            onClick={handleClick}>
                {value?.label || "Select..."} 
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel 
            className="absolute top-full border rounded p-3 shadow bg-white w-full">
                {renderedOptions}
            </Panel>}
        </div>
    );    
};

export default Dropdown;