import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function UserAvatar({toggleNewAvatarBox, imageUrl}) {

  return (
    <div className="flex relative overflow-hidden hover:overflow-visible">
      <FontAwesomeIcon 
        onClick={toggleNewAvatarBox} 
        className="h-10 w-10 absolute -right-3 text-pagebackground bg-pagetxt -bottom-2 opacity-25 hover:opacity-100 rounded-full" 
        icon={faPlusCircle}/>
      <img className='inline object-cover aspect-square mr-2 border-b-2 border-pagetxt' src={imageUrl} alt="Your Profile Avatar"/>
    </div>
  )
};

