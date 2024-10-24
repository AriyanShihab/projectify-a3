import React, { useState, useContext } from "react";
import Notification from "../../global-icons/Notification";
import Envelop from "../../global-icons/Envelop";
import MobileOnlyButton from "../../global-icons/MobileOnlyButton";
import { ProjectContext } from "../../context/index";

export default function Search() {
  const { dispatch } = useContext(ProjectContext);
  const [searchTerms, setSearchTerms] = useState("");

  function handleSearchChange(e) {
    let search = e.target.value;
    setSearchTerms(search);

    dispatch({
      type: "SEARCH",
      searchQuery: search.toLowerCase(),
    });
  }
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <MobileOnlyButton />
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          name="search"
          value={searchTerms}
          onChange={handleSearchChange}
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
