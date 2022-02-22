import * as React from "react";

export default function MediaWatchedButton(props) {
  const { buttonState, setButtonState, postMediaButtonClick, handleRatingClick } = props;
  let buttonElement;

  const buttonClass = "flex justify-around mt-20 content-end sm:justify-around sm:mt-20 md:justify-start md:mt-0 lg:justify-start lg:mt-0 xl:justify-start lg:mt-0"

  if (buttonState === "interest") {
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        setButtonState(null);
        postMediaButtonClick(null)

      }}>Remove from Watch List</button>
    )
  } else if (!buttonState){
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        setButtonState('interest');
        postMediaButtonClick("interest")

      }}>Add to Watch List</button>
    )
  } else {
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        handleRatingClick('interest')
        setButtonState('interest');
        postMediaButtonClick("interest");

      }}>Watch it Again!</button>
    )
  }

  return <div>{buttonElement}</div>;
}
