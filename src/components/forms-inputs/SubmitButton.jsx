import React from "react";

export default function SubmitButton({ editData }) {
  return (
    <button
      type="submit"
      className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      {editData ? "Update Task" : "Create Task"}
    </button>
  );
}
