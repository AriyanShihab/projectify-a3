import React from "react";

export default function CloseButton({onClose}) {
  return (
    <button
      onClick={onClose}
      type="button"
      className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      Cancel
    </button>
  );
}
