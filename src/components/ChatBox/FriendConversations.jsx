import classNames from 'classnames';


export default function FriendConversations(props) {
  const { selected } = props
  const hide = classNames("bg-red-500 relative w-full", {"": selected, "hidden": !selected});


  return (
  <div className={hide}>

  </div>
  );
}
