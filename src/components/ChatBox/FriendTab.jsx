
export default function FriendTab(props) {
  const { avatarUrl } = props;


  return (
  <div className="flex justify-center mb-2 h-24 border-b-4 border-rose-500">
    <img className='max-w-none hover:opacity-50' src={avatarUrl} alt="Your Profile Avatar"/>
  </div>
  );
}
