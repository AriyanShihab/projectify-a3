import React, { useReducer, useState } from "react";
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

  const rawData = project.projectData.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const [backupSearch, setBackupSearch] = useState(rawData);
  const [sortedData, setSortedData] = useState(rawData);
  const [searchTerms, setSearchTerms] = useState("");

  function performSearch(searchQuery) {
    setSearchTerms(searchQuery);
   
    if (searchQuery.length > 0) {
      
      let nextState = sortedData.filter((item) => {
        console.log(item.projectName, searchQuery);
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
            <Todo data={sortedData} />
            <OnProgres data={sortedData} />
            <Done data={sortedData} />
            <Revised data={sortedData} />
          </div>
        </main>
      </ProjectContext.Provider>
    </div>
  );
}
