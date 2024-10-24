import React, { useContext, useState } from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";
import { ProjectContext } from "../../../context/index";
import EmptyList from "../../EmptyList";
// ---------------
// -------
export default function Todo() {
  const { project, dispatch } = useContext(ProjectContext);
  const [order, setOrder] = useState(true);

  let filteredData = project.projectData.filter((pr) => pr.category === "todo");
  if (!order) {
    filteredData = filteredData.reverse();
  }

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            To-Do ({filteredData.length})
          </h3>
          <button onClick={() => setOrder(!order)}>
            <SortingIcon />
          </button>
        </div>
        {filteredData.length >0 && (
          <span className="text-base text-stone-100">
            {order ? "*newest at top" : "*oldest at top"}
          </span>
        )}
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((pr) => (
              <TaskCard key={pr.id} data={pr} order={order} />
            ))
          ) : (
            <EmptyList buttonColor={"text-indigo-600"} />
          )}
        </div>
      </div>
    </div>
  );
}
