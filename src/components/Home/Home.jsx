import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import FriendRecommendations from "./FriendRecommendations";
import WatchList from "./WatchList";
import Watched from "./Watched";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const searchURL = `/api/media/search/${term}`;
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
      {showSearch && <CardContainer 
        refresh={refresh}
        setRefresh={setRefresh}
        results={results}>Search
      </CardContainer>}

      <FriendRecommendations
        refresh={refresh}
        setRefresh={setRefresh}
      >Friend's Recommendation</FriendRecommendations>
      <WatchList
        refresh={refresh}
        setRefresh={setRefresh}
      >Watch List</WatchList>
      <Watched
        refresh={refresh}
        setRefresh={setRefresh}
      >Watched</Watched>
    </React.Fragment>
  );
}
