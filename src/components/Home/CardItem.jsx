import React, { useState } from "react";
import BottomPop from "./BottomPop";
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  const [ hidden, setHidden ] = useState(true);

  return (
    <div
      onMouseEnter={(e) => {
        setHidden(false);
      }}
      onMouseLeave={(e) => {
        setHidden(true);
      }}
      className="flex flex-col mt-10 min-w-[150px] min-h-[220px] max-w-[150px] max-h-[220px] mx-4 hover:scale-120 ease-in duration-100 origin-bottom"
    >
      <Link to={`/media/${props.id}`} key={props.id}>
        <img className="h-full w-full" src={props.image} alt="" />
        {!hidden && <BottomPop />}
      </Link>
    </div>
  );
}
