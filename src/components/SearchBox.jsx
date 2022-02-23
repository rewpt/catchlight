import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./Home/CardContainer";
import SearchBar from "./Home/SearchBar";

export default function SearchBox(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchURL = `/api/media/search/${term}`;
    if (term !== "") {
      axios.get(searchURL).then((response) => {
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
      {showSearch && (
        <CardContainer
          showSearch={showSearch}
          refresh={props.refresh}
          setRefresh={props.setRefresh}
          results={results}
        >
          Search
        </CardContainer>
      )}
    </React.Fragment>
  );
}
