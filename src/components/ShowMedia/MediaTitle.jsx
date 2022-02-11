import * as React from 'react';
import MediaDescription from './MediaDescription'

export default function MediaTitle() {
  return (
    <div className=''>
      <h1 className='media-title whitespace-nowrap text-5xl font-extrabold'> The Matrix </h1>
      <MediaDescription />
    </div>
  );
}