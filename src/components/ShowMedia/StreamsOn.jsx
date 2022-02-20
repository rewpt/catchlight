import React from 'react';

export default function StreamsOn(props){
  const { streamingServices } = props;
  
  return(
    <div className='flex sm:justify-center md:justify-start'>
      <div className='font-semibold text-xl text-slate-800 mt-2'>
        <h3>Streaming on:</h3>
        {streamingServices.forEach(service => {

          return <p>{`${service.title}`}</p>
        })}
      </div>
    </div>
  )
}