import classNames from "classnames";

export default function FriendTab(props) {
  const { avatarUrl, activeFriendClick, activeFriend, id } = props;
  const friendImgClass = classNames(
    "h-full max-w-none  hover:brightness-135 hover:opacity-100",
    {
      "brightness-135 opacity-100": activeFriend === id,
      "opacity-60": activeFriend !== id,
    }
  );
  return (
    <div
      id={id}
      className="flex my-4 media-avatar-chat overflow-hidden justify-center h-24 mb-2 bg-black cursor-pointer"
      onClick={() => {
        activeFriendClick(id);
        console.log("this is id", id);
        console.log("and this is activeFriend", activeFriend);
        console.log("bool", activeFriend === id);
      }}
    >
      <img
        className={friendImgClass}
        src={avatarUrl}
        alt="Your Profile Avatar"
      />
    </div>
  );
}
