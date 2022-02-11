import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchBar() {
  return (
    <div class=" bg-gray-200">
    <div class="container h-[100px] flex justify-center items-center ">
        <div class="relative"> 
          <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search Any Movie" />
            <div class="absolute top-4 right-3"> 
              <i> <FontAwesomeIcon className='fa fa-search text-gray-400 z-20 hover:text-gray-500 cursor-pointer' icon={faSearch} /></i> 
            </div>
        </div>
    </div>
</div>
  );
};