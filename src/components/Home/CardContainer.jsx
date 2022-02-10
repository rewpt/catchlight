import React from 'react';
import CardItem from './CardItem';

export default function CardContainer(props) {
  return (
    <React.Fragment>
      <div className="mt-6 mx-6 text-2xl font-bold text-rose-500">
        {props.children}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-xl overflow-auto px-7 h-30%">
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/q4FQOiSRhTLWulHl5Vpg37FMArH.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/2EiAX4eChSWQHwgIFAZbPgXKCJ6.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/mso2rEr9i0MilRIOao5HaWFipS9.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/34osIViLgpz6lEnkxXpTJMbNRBW.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
        <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
      </div>
    </React.Fragment>
  )
}