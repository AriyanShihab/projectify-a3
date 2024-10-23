import React, { useContext } from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";
import { ProjectContext } from "../../../context/index";
import EmptyList from "../../EmptyList";

export default function OnProgres({ data }) {
  const { project } = useContext(ProjectContext);
  const filteredData = project.projectData.filter(
    (pr) => pr.category === "inProgress"
  );
  
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">On Progress ({filteredData.length})</h3>
          <SortingIcon />
        </div>
        {filteredData.length > 0 ? (
          filteredData.map((entry) => <TaskCard id={entry.id} data={entry} />)
        ) : (
          <EmptyList buttonColor={"text-yellow-500"} />
        )}
      </div>
    </div>
  );
}
