import React from "react";
import CardItem from "./CardItem";

export default function CardContainer(props) {
  const { results } = props;

  return (
    <div>
      <div className="mt-3 mx-6 text-2xl font-bold px-6 text-rose-500">
        {props.children}
      </div>
      <div className="flex overflow-x-scroll whitespace-nowrap w-full min-w-[200px] h-[320px] rounded-xl px-7">

        {results &&
          results.map((media) => {
            return <CardItem key={media.id} mediaID={media.id} refresh={props.refresh} setRefresh={props.setRefresh}{...media} />;
          })}

        {props.mediaData &&
          props.mediaData.map((media) => {
            return <CardItem 
              key={media.id}
              image={media.image} 
              mediaID={media.id}
              refresh={props.refresh}
              setRefresh={props.setRefresh}
              />;
          })}
      </div>
    </div>
  );
}
