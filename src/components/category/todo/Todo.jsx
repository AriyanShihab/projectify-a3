import React from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import EditIcon from "../../../global-icons/EditIcon";
import TaskCard from "../Card/TaskCard";

export default function Todo() {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do (45)</h3>
          <SortingIcon />
        </div>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
}
