import React from "react";
import SortingIcon from "../../../global-icons/SortingIcon";
import TaskCard from "../Card/TaskCard";
import EmptyList from "../../EmptyList";

export default function Done({data}) {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-teal-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Done ({data.length})</h3>
          <SortingIcon />
        </div>
        <div>
        {data.length > 0 ? (
            data.map((pr) => <TaskCard key={pr.id} data={pr} />)
          ) : (
            <EmptyList buttonColor={"text-teal-500"}/>
          )}
        </div>
      </div>
    </div>
  );
}
