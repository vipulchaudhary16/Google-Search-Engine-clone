import ResultContext from "./ResultContext";
import React, { useState } from "react";

const baseUrl = "https://google-search1.p.rapidapi.com/google-search";

const ResultState = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("vipul%chaudhary");

  const getResults = async (input) => {
    setLoading(true);
    const res = await fetch(`https://google-search1.p.rapidapi.com/google-search?hl=en&q=${input}&gl=us`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search1.p.rapidapi.com",
        "x-rapidapi-key": "d4312b90b0mshad9f078a2e6644ep18c1dfjsn88a03ca2ea7f"
      }
    })
    const data = await res.json();
    console.log(results)
    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultState;
