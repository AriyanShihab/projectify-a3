import React from "react";

export default function MenuItems({ data }) {
  return (
    <li className="my-3">
      <a className="flex items-center">
        {data.icon}
        {data.content}
      </a>
    </li>
  );
}
