import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserPlus, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Nav() {
  const navItemR = "md:my-0 my-7 md:ml-8 cursor-pointer text-2xl hover:text-gray-400 duration-300"
  const hamburger = "text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
  let [open, setOpen] = React.useState(false);
  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className = 'font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <span className ='text-3xl text-indigo-600 mr-1 pt-2'>
            
          </span>
          Catchlight
        </div>
        <Link to="/showmedia">Temp Showmedia Link</Link>
        <Link to="/welcome">Temp Welcome Link</Link>
        <Link to="/">Temp Home Link</Link>
        <div onClick={()=>setOpen(!open)} className=''>
        <FontAwesomeIcon name={open ? 'close' : 'menu'} className={hamburger}icon={faBars} />
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute 
        md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
        md:pl-0 pl-9 transition-all duration-400 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-80`}>
          <li><FontAwesomeIcon className={navItemR} icon={faBell} /></li>
          <li><FontAwesomeIcon className={navItemR} icon={faUserPlus} /></li>
          <li><FontAwesomeIcon className={navItemR} icon={faCircleUser} /></li>
        </ul>
      </div>
    </div>
  );
}
