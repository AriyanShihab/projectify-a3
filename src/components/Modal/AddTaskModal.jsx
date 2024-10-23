import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/index";
import { toast } from "react-toastify";

export default function AddTaskModal({ editData, onClose }) {
  const { project, dispatch } = useContext(ProjectContext);

  const [task, setTask] = useState(
    editData || {
      projectName: "",
      description: "",
      date: "",
      category: "",
    }
  );

  // handlers
  function handleInputChane(event) {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editData) {
      dispatch({
        type: "EDIT_PROJECT",
        payload: {
          ...task,
        },
      });
      return toast.warn("Project Edited successfully", {
        position: "bottom-center",
        theme: "dark",
      });

     
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          ...task,
          id: crypto.randomUUID(),
        },
      });
      toast.success("Project added successfully", {
        position: "bottom-center",
        theme: "dark",
      });
    }

    onClose();
  }

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm p-4 text-white absolute top-0 left-0 z-10">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6 border border-opacity-20 border-green-400 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                for="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                name="projectName"
                value={task.projectName}
                onChange={handleInputChane}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={handleInputChane}
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                for="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="date"
                value={task.date}
                onChange={handleInputChane}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                for="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={task.category}
                onChange={handleInputChane}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled>
                  Select an Category
                </option>
                <option value="todo">To-Do</option>
                <option value="inProgress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
