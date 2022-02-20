import * as React from 'react';

export default function MediaWatchedButton(props) {
  const { buttonState, setButtonState, mediaButtonClick } = props;
  let buttonElement;

  if(buttonState === 'interest') {
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        setButtonState(null);

        mediaButtonClick(null)
      }}>Remove from Watch List</button>
    )
  } else if (!buttonState){
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        setButtonState('interest');

        mediaButtonClick("interest")
      }}>Add to Watch List</button>
    )
  } else {
    buttonElement = (
      <button className="btn-clicked mr-1" onClick={() => {
        setButtonState('interest');

        mediaButtonClick("interest")
      }}>Watch it Again!</button>
    )
  }

  return (
    <div>
      { buttonElement }
    </div>
  );
}