import React, { useRef, useState } from "react";
import CardItem from "./CardItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function CardContainer(props) {
  const { results } = props;

  const scrollbar = useRef(null);

  const scroll = (scrollOffset) => {
    console.log(scrollbar.current.scrollLeft)
    scrollbar.current.scrollLeft += scrollOffset;
    console.log(scrollbar.current.scrollLeft)
    
  };



  //scrollbar-hide

  return (
    <div>
      <div className="mt-3 mx-6 text-2xl font-bold px-6 text-rose-500">
        {props.children}
      </div>

      

      <div className="flex flex-row justify-center px-2">

      <button>
          <FontAwesomeIcon 
              title='Add to watch list' 
              className='text-4xl text-zinc-400 p-2' 
              icon={faChevronLeft}
              onClick={() => {scroll(-170)}}>
          </FontAwesomeIcon>
        </button>

        <div ref={scrollbar} className="flex scrollbar-hide snap-mandatory snap-x overflow-x-scroll whitespace-nowrap w-full min-w-[200px] h-[290px] mx-0">
          {results && console.log("CONSOLE.LOG", results)}

          {results &&
            results.map((media) => {
              return <CardItem key={media.id} mediaID={media.id}refresh={props.refresh}setRefresh={props.setRefresh}{...media} />;
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

        <button>
          <FontAwesomeIcon 
              title='Add to watch list' 
              className='text-4xl text-zinc-400 p-2' 
              icon={faChevronRight}
              onClick={() => {scroll(170)}}>
          </FontAwesomeIcon>
        </button>


      </div>
      
    </div>
  );
}
