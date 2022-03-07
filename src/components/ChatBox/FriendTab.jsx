import classNames from "classnames";

export default function FriendTab(props) {
  const { avatarUrl, activeFriendClick, activeFriend, id, friendName } = props;
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
      }}
    >
      <img
        title={friendName}
        className={friendImgClass}
        src={avatarUrl}
        alt="Your Profile Avatar"
      />
    </div>
  );
}
