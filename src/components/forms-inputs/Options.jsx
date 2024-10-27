import React from 'react'

export default function Options({name, value, changeHandler}) {
  return (
    <div className="mb-4">
      <label
        for="category"
        className="mb-1 block text-sm font-medium text-gray-300"
      >
        {name}
      </label>
      <select
       
        name={name}
        value={value}
        onChange={changeHandler}
        // required
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
  );
}
