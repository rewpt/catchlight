import React from "react"
import CardContainer from "./CardContainer"

export default function Home() {
  return (
    <React.Fragment>
      <CardContainer>Friend Recommendations</CardContainer>
      <CardContainer>Want to Watch</CardContainer>
      <CardContainer>Watched</CardContainer>
    </React.Fragment>
  )
}