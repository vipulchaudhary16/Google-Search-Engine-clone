import React, { useEffect, useState, useContext } from "react";
import ResultContext from "../context/ResultContext";

import "../global.css"

const Search = () => {
  const context = useContext(ResultContext);
  const [tempText, setTempText] = useState('')
  const [text, setText] = useState("vipul chaudhary");
  const { setSearchTerm } = context;

  let buttinClicked = false;
  console.log(tempText);

  useEffect(() => {
      setSearchTerm(text);
  }, [text]);

  return (
    <div className="flex flex-wrap items-center content-center relative sm:ml-48 sm:-mt-10 mt-3">
      <input
        value={tempText}
        type="text"
        className=" w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setTempText(e.target.value)}
      />
      <button
        class="search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full ml-2"
        onClick={(e) => {
          setText(tempText);
            buttinClicked = true;
        }}
      >
        Search
      </button>
      {/* {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )} */}
    </div>
  );
};

export default Search;
