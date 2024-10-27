import React from 'react'

export default function InputText({value, changeHandler, name, type}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-300"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e)=>changeHandler(e)}
        // required
        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 border-opacity-50 focus:outline-none focus:ring-1 focus:ring-green-500"
      />
    </div>
  );
}
