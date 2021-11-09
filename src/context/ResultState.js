import ResultContext from "./ResultContext";
import React, { useState } from "react";

const baseUrl = "https://google-search1.p.rapidapi.com/google-search";

const ResultState = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "d4312b90b0mshad9f078a2e6644ep18c1dfjsn88a03ca2ea7f",
      },
    });
    const data = await res.json();
    console.log(data);
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
