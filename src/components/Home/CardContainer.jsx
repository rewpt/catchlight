import React from 'react';
import CardItem from './CardItem';

export default function CardContainer(props) {
  return (
    <div>
      <div className="mt-6 mx-6 text-2xl font-bold px-6 text-rose-500">
        {props.children}
      </div>
      <div className="flex overflow-x-scroll whitespace-nowrap min-h-[305px] rounded-xl px-7 h-30%">
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://image.tmdb.org/t/p/w342/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg"} />
          <CardItem imageSource={"https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@.jpg"} />
      </div>
    </div>
  )
}