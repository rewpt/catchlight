import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function FriendNotification(props) {
  const respondFriendReq = async (friendResponse) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.put(
        "http://localhost:3001/api/friends/requests",
        { id: props.id, friendResponse: friendResponse },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid grid-cols-12 border-x-[1px] border-x-slate-100 border-t-slate-100 border-y-[1px] py-2 border-b-slate-300 even:bg-white odd:bg-slate-100">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white z-20 self-center justify-self-center col-span-2"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="w-full col-span-6 h-full">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
      <button
        onClick={() => {
          respondFriendReq(true);
        }}
        className="btn-friend-accept self-center justify-self-center col-span-2 mr-2"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className=" btn-friend-decline self-center justify-self-center col-span-2 mr-2">
        <FontAwesomeIcon
          onClick={() => {
            respondFriendReq(false);
          }}
          icon={faX}
        />
      </button>
    </div>
  );
}
