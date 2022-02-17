import React from "react";

function EmptyNotification() {
  return (
    <div className="px-3 border-x-[1px] border-x-slate-100 border-t-slate-100 border-y-[1px] py-2 border-b-slate-300 even:bg-white odd:bg-slate-100">
      <p>You have no new notifications</p>
    </div>
  );
}

export default EmptyNotification;
