import React, { useState, useContext } from "react";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import EditIcon from "../../../global-icons/EditIcon";
import AddTaskModal from "../../Modal/AddTaskModal";
import { ProjectContext } from "../../../context/index";
import { toast } from "react-toastify";

export default function TaskCard({ data,headerColor }) {
  const { dispatch } = useContext(ProjectContext);
  // handele deletetion
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
      toast.warn("Deletetion Success", {
        position: "bottom-center",
      });
    } else {
      toast.info("Entry is not deleted, Thank you", {
        position: "bottom-center",
      });
    }
  };
  // handle Edit
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleEdit = (task) => {
    setShow(true);
  };
  function handleClose() {
    setShow(false);
  }

  return (
    <>
      {show && <AddTaskModal editData={data} onClose={handleClose} />}
      <div className="mb-4 rounded-lg bg-gray-800 p-4">
        <div className="flex justify-between">
          <h4 className={`mb-2 flex-1 font-semibold ${headerColor}`}>
            {data.projectName}
          </h4>
          <div className="flex gap-2">
            <button onClick={() => handleDelete(data)}>
              <DeleteIcon />
            </button>
            <button onClick={() => handleEdit(data)}>
              <EditIcon />
            </button>
          </div>
        </div>
        <p className="mb-2 text-sm text-zinc-200">{data.description}</p>
        <p className="mt-6 text-xs text-zinc-400">{data.date}</p>
      </div>
    </>
  );
}
