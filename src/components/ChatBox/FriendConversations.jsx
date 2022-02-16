import classNames from 'classnames';


export default function FriendConversations(props) {
  const { isOpen } = props
  const hide = classNames("bg-red-500 relative w-full", {"": isOpen, "hidden": !isOpen});


  return (
  <div className={hide}>

  </div>
  );
}
