export default function FriendTab(props) {
  const { avatarUrl, onClick } = props;

  return (
    <div
      className="flex my-4 media-avatar-chat overflow-hidden justify-center h-24 mb-2 bg-black"
      onClick={() => onClick("")}
    >
      <img
        className=" h-full max-w-none hover:opacity-50"
        src={avatarUrl}
        alt="Your Profile Avatar"
      />
    </div>
  );
}
