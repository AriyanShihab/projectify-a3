import React from "react";
import SideBar from "./sidebar/SideBar";
import Search from "./search-box/Search";
import Title from "./title/Title";
import Todo from "../components/category/todo/Todo";
import OnProgres from "./category/on-progress/OnProgres";
import Done from "./category/done/Done";
import Revised from "./category/revised/Revised";

export default function RenderPage() {
  return (
    <div className="flex h-screen relative">
      <SideBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Search />
        <div className="mx-auto max-w-7xl p-6 ">
          <Title />
        </div>
        <div className=" mx-1 flex  px-2">
          <Todo />
          <OnProgres />
          <Done />
          <Revised />
        </div>
      </main>
    </div>
  );
}
