import React from "react";
import Logo from "../../global-icons/Logo";
import Dashbord from "../../global-icons/Dashbord";
import Project from "../../global-icons/Project";
import Calendar from "../../global-icons/Calendar";
import Contact from "../../global-icons/Contact";
import Kanban from "../../global-icons/Kanban";
import Messages from "../../global-icons/Messages";
import Settings from "../../global-icons/Settings";
import MenuItems from './MenuItems';

export default function SideBar() {
  const dataForMenu = [
    {
      id: 1,
      icon: <Dashbord />,
      content: "Dashboard"
    },
    {
      id: 2,
      icon: <Project />,
      content: "Projects"
    },

    {
      id: 3,
      icon: <Contact />,
      content: "Contact"
    },
    {
      id: 4,
      icon: <Kanban />,
      content: "Canban"
    },
    {
      id: 5,
      icon: <Calendar />,
      content: "Calender"
    },
    {
      id: 6,
      icon: <Messages />,
      content: "Messages"
    },
    {
      id: 7,
      icon: <Settings />,
      content: "Settings"
    },
  ];

  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <span className="mx-auto h-10 text-center">
            <Logo />
          </span>
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4 text-white font-semibold">
          {
            dataForMenu.map((item)=> <MenuItems key={item.id} data={item}/>)
          }
        </ul>
      </nav>
    </aside>
  );
}
