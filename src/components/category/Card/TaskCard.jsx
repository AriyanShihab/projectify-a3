import React, { useContext } from "react";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import EditIcon from "../../../global-icons/EditIcon";
import { ProjectContext } from "../../../context/index";
import {toast} from "react-toastify"

export default function TaskCard({ data }) {
  const { dispatch } = useContext(ProjectContext);

  const handleDelete = (task) => {
    let permission = window.confirm(
      "are you sure? this will delete the project entry from list!"
    );
    if (permission) {
      dispatch({
        type: "REMOVE_PROJECT",
        payload: {
          ...task,
        },
      });
      toast.warn("Deletetion Success",{
        position: "bottom-center",
      })
    } else {
      toast.info("Entry is not deleted, Thank you",{
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {data.projectName}
        </h4>
        <div className="flex gap-2">
          <button onClick={() => handleDelete(data)}>
            <DeleteIcon />
          </button>
          <EditIcon />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{data.description}</p>
      <p className="mt-6 text-xs text-zinc-400">{data.date}</p>
    </div>
  );
}
