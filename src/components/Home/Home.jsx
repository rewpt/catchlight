import React from "react"
import CardContainer from "./CardContainer"
import SearchBar from "./SearchBar"

export default function Home() {
  return (
    <React.Fragment>
      <SearchBar />
      <CardContainer>Recommendations by Friends</CardContainer>
      <CardContainer>Watch List</CardContainer>
      <CardContainer>Watched</CardContainer>
    </React.Fragment>
  )
}