const initialState = {
  projectData: [],
  searchBackup: [],
};

function projectReducer(projectState, action) {
  switch (action.type) {
    case "ADD_PROJECT": {
      const sortedProjectData = [
        ...projectState.projectData,
        action.payload,
      ].sort((a, b) => new Date(b.date) - new Date(a.date));

      return {
        projectData: sortedProjectData,
        searchBackup: sortedProjectData,
      };
    }
    case "EDIT_PROJECT": {
      let nextState = projectState.projectData.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        } else return project;
      });
      return {
        projectData: nextState,
        searchBackup: nextState,
      };
    }

    case "REMOVE_PROJECT": {
      let nextState = projectState.projectData.filter(
        (project) => project.id !== action.payload.id
      );
      return {
        projectData: nextState,
        searchBackup: nextState,
      };
    }
    case "SEARCH": {
      let searchQuery = action.searchQuery;
      console.log(searchQuery, "search query we got");

      if (searchQuery.length > 0) {
        let nextProjects = [...projectState.searchBackup].filter((project) =>
          project?.projectName?.toLowerCase().includes(searchQuery)
        );
        return {
          ...projectState,
          projectData: nextProjects,
        };
      } else {
        return {
          ...projectState,
          projectData: projectState.searchBackup,
        };
      }
    }

    default:
      return projectState;
  }
}

export { projectReducer, initialState };
