import React,{useContext} from "react";
import TaskCard from "../Card/TaskCard";
import SortingIcon from "../../../global-icons/SortingIcon";
import EmptyList from "../../EmptyList";
import {ProjectContext} from "../../../context/index"

export default function Revised({data}) {
  const { project } = useContext(ProjectContext);
  const filteredData = project.projectData.filter(
    (pr) => pr.category === "revised"
  );
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revise ({filteredData.length})</h3>
          <SortingIcon />
        </div>
        {filteredData.length > 0 ? (
            filteredData.map((pr) => <TaskCard key={pr.id} data={pr} />)
          ) : (
            <EmptyList buttonColor={"text-rose-500"}/>
          )}
      </div>
    </div>
  );
}
