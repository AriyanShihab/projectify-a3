import React, { useState } from "react";
import AddButton from "../../global-icons/AddButton";
import AddTaskModal from "../Modal/AddTaskModal";

export default function Title() {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose= ()=>{
    setShowModal(false)
  }
  return (
    <>
      {showModal && <AddTaskModal onClose={handleModalClose} />}
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold">Projectify</h2>
        <div class="flex space-x-2">
          <button
            onClick={() => setShowModal(true)}
            class="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
            <AddButton />
            Add
          </button>
        </div>
      </div>
    </>
  );
}
