import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchURL = `http://localhost:3001/api/media/search/${term}`;
    if (term !== "") {
      axios.get(searchURL).then((response) => {
        console.log("AXIOS GET ", response.data);
        setResults([...response.data]);
        setShowSearch(true);
      });
    } else {
      setShowSearch(false);
    }
  }, [term]);

  return (
    <React.Fragment>
      <SearchBar onSearch={(term) => setTerm(term)} />
      {showSearch && <CardContainer results={results}>Search</CardContainer>}
      <CardContainer>Friend's Recommendations</CardContainer>
      <CardContainer>Watch List</CardContainer>
      <CardContainer>Watched</CardContainer>
    </React.Fragment>
  );
}
