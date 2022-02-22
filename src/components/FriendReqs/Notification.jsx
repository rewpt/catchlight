import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function FriendNotification(props) {
  const { setIncomingFriendReqs } = props;
  const respondFriendReq = async (friendResponse) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.put(
        "http://localhost:3001/api/friends/requests",
        { id: props.id, friendResponse: friendResponse },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIncomingFriendReqs(
        props.incomingFriendReqs.filter((req) => {
          return req.id !== props.id;
        })
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid grid-cols-12 border-x-[1px] border-x-searchmain border-t-searchmain border-y-[1px] py-2 border-b-pagetxt even:bg-searchmain odd:bg-pagebackground">
      
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-searchmain z-20 self-center justify-self-center col-span-2"
        src={props.profile_picture}
        alt=""
      />

      <div className="w-full col-span-8 h-full text-pagetxt">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
      
      <button
        onClick={() => {
          respondFriendReq(true);
        }}
        className="btn-friend-accept self-center justify-self-center col-span-1 mr-14"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>

      <button
        onClick={() => {
          console.log("Request rejected");
          respondFriendReq(false);
        }}
        className=" btn-friend-decline self-center justify-self-center col-span-1 mr-6"
      >
        <FontAwesomeIcon icon={faX} />
      </button>

    </div>
  );
}
