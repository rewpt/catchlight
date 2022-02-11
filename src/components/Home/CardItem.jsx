import React, {useState} from "react";
import BottomPop from "./BottomPop"

export default function CardItem({ imageSource }) {
  const [hidden, setHidden] = useState(true);
  
  return (
    <div 
    onMouseEnter={(e) => {
      setHidden(false);
    }
    }
    onMouseLeave={(e) => {
      setHidden(true);
    }}
    className="flex flex-col mt-10 min-w-[150px] max-h-[220px] mx-4 hover:scale-110 ease-in duration-100 origin-bottom"
    >
      <img className='h-full w-full'  src={imageSource} alt="" />  
      {!hidden && (<BottomPop />)}
    </div>

  );
}
