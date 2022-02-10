import * as React from 'react';
import MediaDescription from './MediaDescription'

export default function MediaTitle() {
  return (
    <div className='flex-column'>
      <h1 className='media-title whitespace-nowrap text-3xl font-extrabold'> The Matrix </h1>
      <MediaDescription />
    </div>
  );
}