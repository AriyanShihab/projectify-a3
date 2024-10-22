import React from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";

export default function OnProgres() {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">On Progress (45)</h3>
          <SortingIcon />
        </div>
        <TaskCard />
        {/* Add more task cards here */}
      </div>
    </div>
  );
}
