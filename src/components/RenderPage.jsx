import React, { useReducer } from "react";
import SideBar from "./sidebar/SideBar";
import Search from "./search-box/Search";
import Title from "./title/Title";
import Todo from "../components/category/todo/Todo";
import OnProgres from "./category/on-progress/OnProgres";
import Done from "./category/done/Done";
import Revised from "./category/revised/Revised";
import { projectReducer, initialState } from "../reducer/project-reducer";
import { ProjectContext } from "../context/index";

export default function RenderPage() {
  const [project, dispatch] = useReducer(projectReducer, initialState);

  function filterData() {
    const allTodo = project.projectData.filter((pr) => pr.category === "todo");
    const allInProgress = project.projectData.filter(
      (pr) => pr.category === "inProgress"
    );
    const allDone = project.projectData.filter((pr) => pr.category === "done");
    const allRevised = project.projectData.filter(
      (pr) => pr.category === "revised"
    );

    return {
      allTodo,
      allInProgress,
      allDone,
      allRevised,
    };
  }

  return (
    <div className="flex h-screen relative">
      <ProjectContext.Provider value={{ project, dispatch }}>
        <SideBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Search />
          <div className="mx-auto max-w-7xl p-6 ">
            <Title />
          </div>
          <div className=" mx-1 flex  px-2">
            <Todo data={filterData().allTodo} />
            <OnProgres data={filterData().allInProgress} />
            <Done data={filterData().allDone} />
            <Revised data={filterData().allRevised} />
          </div>
        </main>
      </ProjectContext.Provider>
    </div>
  );
}
