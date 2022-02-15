import FriendTab from "./FriendTab";

export default function FriendTabGroup() {

  return (
  <div className="relative flex-col bg-white py-2 w-14 h-full overflow-hidden">
    <FriendTab avatarUrl={"https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"} />
    <FriendTab avatarUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/1024px-Danny_DeVito_cropped_and_edited_for_brightness.jpg"} />
    <FriendTab avatarUrl={"https://cdn.discordapp.com/attachments/867480158658756629/942842921932165150/apple_158989157.jpg"} />
  </div>
  );
}
