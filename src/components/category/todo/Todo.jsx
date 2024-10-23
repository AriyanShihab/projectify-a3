import React, { useContext } from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import EditIcon from "../../../global-icons/EditIcon";
import TaskCard from "../Card/TaskCard";
import { ProjectContext } from "../../../context/index";
import EmptyList from "../../EmptyList";
// ---------------
// -------
export default function Todo({ data }) {
  const { project } = useContext(ProjectContext);

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do ({data.length})</h3>
          <SortingIcon />
        </div>
        <div>
          {data.length > 0 ? (
            data.map((pr) => <TaskCard key={pr.id} data={pr} />)
          ) : (
            <EmptyList buttonColor={"text-indigo-600"} />
          )}
        </div>
      </div>
    </div>
  );
}
