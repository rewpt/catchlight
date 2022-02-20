import React, { useState } from "react";
import BottomPop from "./BottomPop";
import { Link, Router } from 'react-router-dom'

export default function CardItem(props) {
  const [hidden, setHidden] = useState(true);

  return (
    <div
      onMouseEnter={(e) => {
        setHidden(false);
      }}
      onMouseLeave={(e) => {
        setHidden(true);
      }}
      className="flex flex-col snap-center mt-10 min-w-[150px] min-h-[220px] max-w-[150px] max-h-[220px]  hover:scale-120 ease-in duration-100 origin-bottom mx-1"
    >
      <Link to={`/media/${props.mediaID}`} key={props.mediaID}>
        <img className="h-full w-full no-underline decoration-0 min-w-[150px] min-h-[220px] max-w-[150px] max-h-[220px]" src={props.image} alt="" />
      </Link>
      {!hidden && <BottomPop 
      mediaID={props.mediaID} 
      refresh={props.refresh}
      setRefresh={props.setRefresh}
      />}
    </div>
  );
}
