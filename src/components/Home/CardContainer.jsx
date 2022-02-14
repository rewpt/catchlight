import React from "react";
import CardItem from "./CardItem";

export default function CardContainer(props) {

  return (
    <div>
      <div className="mt-3 mx-6 text-2xl font-bold px-6 text-rose-500">
        {props.children}
      </div>
      <div className="flex overflow-x-scroll whitespace-nowrap min-h-[305px] rounded-xl px-7 h-30%">
        {props.mediaData && props.mediaData.map((media) => {
          return <CardItem 
            image={media.image}
          />
        })}
      </div>
    </div>
  );
}
