import React from 'react'

export default function TextArea({name, value, changeHandler}) {
  return (
    <div className="mb-4">
      <label
        for="description"
        className="mb-1 block text-sm font-medium text-gray-300"
      >
        {name}
      </label>
      <textarea
        
        name="description"
        value={value}
        onChange={changeHandler}
        
        rows="3"
        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
    </div>
  );
}
