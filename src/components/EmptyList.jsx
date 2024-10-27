import React, { useState } from "react";
import AddTaskModal from "../components/Modal/AddTaskModal";

export default function EmptyList({ buttonColor }) {
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && <AddTaskModal onClose={handleClose} />}
      <div className="bg-slate-900 m-2  rounded-lg text-slate-400 text-base text-center border p-3">
        <h3>There is No Project At this Momment</h3>
        <button
          onClick={() => setShowModal(true)}
          className={`${buttonColor} cursor-pointer mt-2`}
        >
          Add Project
        </button>
      </div>
    </>
  );
}
