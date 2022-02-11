import React from 'react';
import CardItem from './CardItem';

export default function CardContainer(props) {
  return (
    <div>
      <div className="mt-6 mx-6 text-2xl font-bold px-6 text-rose-500">
        {props.children}
      </div>
      <div className="flex whitespace-nowrap max-h-[300px] rounded-xl px-7 h-30%">
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/q4FQOiSRhTLWulHl5Vpg37FMArH.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/2EiAX4eChSWQHwgIFAZbPgXKCJ6.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/34osIViLgpz6lEnkxXpTJMbNRBW.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
      </div>
    </div>
  )
}