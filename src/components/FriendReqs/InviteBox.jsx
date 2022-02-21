import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";

export default function InviteBox() {
  const [email, updateEmail, resetEmail] = useForm("");
  const submitFriendReq = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        "http://localhost:3001/api/friends",
        {
          email,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resetEmail();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" text-lg bg-pagebackground drop-shadow-xl border-black border-1 border-solid z-50 overflow-hidden  w-[330px] absolute top-[64px] right-0">
      <form onSubmit={submitFriendReq}>
        <label className="block">
          <span className="pl-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-pagetxt">
            Add Friend By Email
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
            className="mt-1 px-3 py-2 bg-pagebackground placeholder-inputtext text-inputtext focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="friend@example.com"
          />
        </label>
      </form>
    </div>
  );
}
