import React, { useEffect, useState } from "react";
import BottomPop from "./BottomPop";
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CardItem(props) {
  const [hidden, setHidden] = useState(true);
  const [ buttonState, setButtonState ] = useState('');
  const { mediaID } = props

  useEffect(() => {

    const jwt = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    };

    axios.get(`/api/media/${mediaID}/interactions/`, jwt)
    .then((res) => setButtonState(res.data.rating))
    .catch(e => console.log(e))
  }, []);

  return (
    <div
      onMouseEnter={(e) => {
        setHidden(false);
      }}
      onMouseLeave={(e) => {
        setHidden(true);
      }}
      className="flex flex-col mt-10 min-w-[150px] min-h-[220px] max-w-[150px] max-h-[220px] mx-4 hover:scale-120 ease-in duration-100 origin-bottom"
    >
      <Link to={`/media/${props.mediaID}`} key={props.mediaID}>
        <img className="h-full w-full no-underline decoration-0" src={props.image} alt="" />
      </Link>
      {!hidden && <BottomPop 
      mediaID={props.mediaID} 
      refresh={props.refresh}
      setRefresh={props.setRefresh}
      buttonState={buttonState}
      setButtonState={setButtonState}
      />}
    </div>
  );
}
