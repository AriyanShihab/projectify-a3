import React, { useReducer, useState } from "react";
import Todo from "../components/category/todo/Todo";
import { ProjectContext } from "../context/index";
import { initialState, projectReducer } from "../reducer/project-reducer";
import Done from "./category/done/Done";
import OnProgres from "./category/on-progress/OnProgres";
import Revised from "./category/revised/Revised";
import Search from "./search-box/Search";
import SideBar from "./sidebar/SideBar";
import Title from "./title/Title";

export default function RenderPage() {
  const [project, dispatch] = useReducer(projectReducer, initialState);
  const rawData = project.projectData;
  // motive of the state is hold orinal data before any search start and replace sorted data when search became empty after search fro something
  const [backupSearch, setBackupSearch] = useState(rawData);
  const [sortedData, setSortedData] = useState(rawData);
  const [searchTerms, setSearchTerms] = useState("");

  function performSearch(searchQuery) {
    setSearchTerms(searchQuery);

    if (searchQuery.length > 0) {
      let nextState = sortedData.filter((item) => {
        return item.projectName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });

      setSortedData(nextState);
    } else {
      setSortedData(backupSearch);
    }
  }

  return (
    <div className="flex h-screen relative">
      <ProjectContext.Provider value={{ project, dispatch }}>
        <SideBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Search
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            onInputChange={performSearch}
          />
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
      </ProjectContext.Provider>
    </div>
  );
}
