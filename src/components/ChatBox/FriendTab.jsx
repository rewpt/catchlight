
export default function FriendTab(props) {
  const { avatarUrl } = props;


  return (
  <div className="relative flex justify-center mb-1.5 h-32 bg-gray-200 border-b-4 border-rose-500">
    <img className='h-full max-w-none' src={avatarUrl} alt="Your Profile Avatar"/>
  </div>
  );
}
