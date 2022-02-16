import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function UserAvatar({toggleNewAvatarBox, imageUrl}) {

  return (
    <div className="flex relative overflow-hidden hover:overflow-visible">
      <FontAwesomeIcon 
        onClick={toggleNewAvatarBox} 
        className="h-10 w-10 absolute -right-3 -bottom-2 opacity-25 bg-rose-500 hover:opacity-100 rounded-full" 
        icon={faPlusCircle}/>
      <img className='inline object-cover aspect-square mr-2 border-b-4 border-rose-500' src={imageUrl} alt="Your Profile Avatar"/>
    </div>
  )
};

