const initialState = {
  projectData: [],
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
      };
    }
    case "EDIT_PROJECT":
      return {
        projectData: projectState.projectData.map((project) => {
          if (project.id === action.payload.id) {
            return action.payload;
          } else return project;
        }),
      };

    case "REMOVE_PROJECT":
      return {
        projectData: projectState.projectData.filter(
          (project) => project.id !== action.payload.id
        ),
      };

    default:
      return projectState;
  }
}

export { projectReducer, initialState };
