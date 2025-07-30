
import React from "react";
import type { Artwork } from "../type";
type OverlayProps = {
  
 setSelectedProducts: React.Dispatch<React.SetStateAction<Artwork[]>>;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  data: Artwork[];
  fetchExtraSelectRows: (count: number) => Promise<void>;
};

export default function Overlay({ setShowOverlay , fetchExtraSelectRows }:OverlayProps) {
  const [inputValue, setInputValue] = React.useState("");
  

  const handleSubmit = () => {
    const count = parseInt(inputValue);
    if(count <=0){
     
      alert("enter a valid number");
      setShowOverlay(false);
    }
    else{
        fetchExtraSelectRows(count);
        setShowOverlay(false);
        setInputValue("");

    }
  };

  return (
    <div className="absolute top-32 left-24 bg-white border border-gray-300 shadow-md rounded p-4 z-50 w-56">
      <input
        type="number"
        placeholder="Enter row count"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-3 py-1 rounded w-full"
      >
        Submit
      </button>
      
    </div>
  );
}
