import React from "react";
import Notification from "../../global-icons/Notification";
import Envelop from "../../global-icons/Envelop";
import MobileOnlyButton from "../../global-icons/MobileOnlyButton";

export default function Search() {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <MobileOnlyButton />
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <Notification />
        <Envelop />
      </div>
    </header>
  );
}
