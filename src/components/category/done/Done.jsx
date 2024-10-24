import React, { useContext, useState } from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";
import EmptyList from "../../EmptyList";
import { ProjectContext } from "../../../context/index";

export default function Done({ data }) {
  const { project } = useContext(ProjectContext);
  const [order, setOrder] = useState(true);

  let filteredData = project.projectData.filter((pr) => pr.category === "done");
  if (!order) {
    filteredData = filteredData.reverse();
  }
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-teal-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Done ({filteredData.length})
          </h3>
          <button onClick={() => setOrder(!order)}>
            <SortingIcon />
          </button>
        </div>
        {filteredData.length > 0 && (
          <span className="text-base text-stone-100">
            {order ? "*newest at top" : "*oldest at top"}
          </span>
        )}
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((pr) => <TaskCard key={pr.id} data={pr}  headerColor={"text-teal-500"}/>)
          ) : (
            <EmptyList buttonColor={"text-teal-500"} />
          )}
        </div>
      </div>
    </div>
  );
}
