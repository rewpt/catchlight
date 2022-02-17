import * as React from 'react';
import MediaDescription from './MediaDescription'

export default function MediaTitle(props) {
  const { title, description } = props;

  return (
    <div className=''>
      <h1 className='media-title whitespace-nowrap text-5xl font-extrabold'>{title}</h1>
      <MediaDescription description={description}/>
    </div>
  );
}