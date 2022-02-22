import React from "react";

function EmptyNotification() {
  return (
    <div className="px-3 border-x-[1px] text-inputtext border-x-pagebackground border-t-pagebackground border-y-[1px] py-2 border-pagebackground even:pagebackground odd:text-inputtext">
      <p>You have no new notifications</p>
    </div>
  );
}

export default EmptyNotification;
