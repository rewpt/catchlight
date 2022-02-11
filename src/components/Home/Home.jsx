import React from "react"
import CardContainer from "./CardContainer"

export default function Home() {
  return (
    <React.Fragment>
      <CardContainer>Recommendations by Friends</CardContainer>
      <CardContainer>Want to Watch</CardContainer>
      <CardContainer>Watched</CardContainer>
    </React.Fragment>
  )
}