import React from "react";
import TaskCard from "../Card/TaskCard";
import SortingIcon from "../../../global-icons/SortingIcon";

export default function Revised() {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revise (1)</h3>
          <SortingIcon />
        </div>
        <TaskCard />
        
      </div>
    </div>
  );
}
