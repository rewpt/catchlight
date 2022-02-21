import * as React from "react";

export default function MediaWatchedButton(props) {
  const { buttonState, setButtonState, postMediaButtonClick, handleRatingClick } = props;
  let buttonElement;

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
