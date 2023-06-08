import React from "react";
import { auth } from "../config/firebase";

function CurrentUser() {
  return (
    <div className="flex items-center gap-2 border border-sky-200 rounded-full">
      <span className="text-sky-500 text-sm m-2 ">
        {auth.currentUser.displayName}
      </span>
      <img
        src={auth.currentUser.photoURL}
        alt=""
        className="rounded-full w-10 h-10 object-cover border border-sky-500"
      />
    </div>
  );
}

export default CurrentUser;
