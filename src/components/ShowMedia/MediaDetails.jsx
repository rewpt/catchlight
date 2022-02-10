import * as React from 'react';
import RatingBar from './RatingBar'
import RatingFaces from './RatingFaces';

export default function MediaDetails() {
  return (
   <div className="grid grid-cols-2 gap-y-3">
     <h1 className='media-title whitespace-nowrap text-3xl font-extrabold'> Lord Of the Rings </h1>
     <div className='flex flex-row justify-center items-center'>
     <RatingBar />
     </div>
     <p className='font-semibold text-slate-800'> Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.</p>
     <RatingFaces />
     <h3>Watch on: Netflix, HBO</h3>
     <div>
      <button className="btn">Watched!</button>
      <button className="btn">Add to Watch List</button>
    </div>
    
   </div>
  );
}