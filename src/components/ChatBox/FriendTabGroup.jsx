import FriendTab from "./FriendTab";

export default function FriendTabGroup(props) {
  const { setActiveFriend, onClick } = props;

  return (
    <div className="flex-col bg-black w-[90px] h-full overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <FriendTab
          onClick={onClick}
          avatarUrl={
            "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          }
        />
        <FriendTab
          avatarUrl={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/1024px-Danny_DeVito_cropped_and_edited_for_brightness.jpg"
          }
        />
        <FriendTab
          avatarUrl={
            "https://cdn.discordapp.com/attachments/867480158658756629/942842921932165150/apple_158989157.jpg"
          }
        />
        <FriendTab
          avatarUrl={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          }
        />
        <FriendTab
          avatarUrl={
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          }
        />
        <FriendTab
          avatarUrl={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </div>
  );
}
