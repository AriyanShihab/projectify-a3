import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProjectContext } from "../../../context/index";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import EditIcon from "../../../global-icons/EditIcon";
import AddTaskModal from "../../Modal/AddTaskModal";
import ConfirmationPopup from "../../Modal/ConfirmPopup";

export default function TaskCard({ data, headerColor }) {
  const { dispatch } = useContext(ProjectContext);
  const [popup, setPopup] = useState(false);
  const [permission, setPermission] = useState(false);
  // handele deletetion
  const handleDelete = () => {
    setPopup(true);
  };

  function handleYes() {
    dispatch({
      type: "REMOVE_PROJECT",
      payload: {
        ...data,
      },
    });
    toast.success("Deletetion Success", {
      position: "bottom-center",
      theme: "dark",
    });
    setPopup(false);
  }
  function handleNo() {
    toast.warn("Entry is not deleted, Thank you", {
      position: "bottom-center",
      theme:"dark"
    });
    setPopup(false);
  }
  // handle Edit
  const [show, setShow] = useState(false);

  const handleEdit = (task) => {
    setShow(true);
  };
  function handleClose() {
    setShow(false);
  }

  return (
    <>
      {popup && (
        <ConfirmationPopup onPermission={handleYes} onDecline={handleNo} />
      )}
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
