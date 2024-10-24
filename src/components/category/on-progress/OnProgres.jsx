import React, { useContext, useState } from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";
import { ProjectContext } from "../../../context/index";
import EmptyList from "../../EmptyList";

export default function OnProgres({ data }) {
  const { project } = useContext(ProjectContext);
  const [order, setOrder] = useState(true);

  let filteredData = project.projectData.filter(
    (pr) => pr.category === "inProgress"
  );
  if (!order) {
    filteredData = filteredData.reverse();
  }

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({filteredData.length})
          </h3>
          <button className="p-2 rounded-md shadow-sm bg-slate-100 bg-opacity-30" onClick={() => setOrder(!order)}>
            <SortingIcon />
          </button>
        </div>
        {filteredData.length > 0 && (
          <span className="text-base text-stone-100">
            {order ? "*newest at top" : "*oldest at top"}
          </span>
        )}
        {filteredData.length > 0 ? (
          filteredData.map((entry) => <TaskCard key={entry.id} data={entry} headerColor={"text-yellow-500"}/>)
        ) : (
          <EmptyList buttonColor={"text-yellow-500"} />
        )}
      </div>
    </div>
  );
}
