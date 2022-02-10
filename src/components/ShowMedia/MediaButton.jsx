import * as React from 'react';

export default function RatingFaces(props) {

  return (
      <button className= "m-x-xl rounded-full tracking-wider text-xs py-2 font-bold uppercase px-3 cursor-pointer bg-green-400 button">
        {props.children}
      </button>
  )
}