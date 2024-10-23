const initialState = {
  projectData: [],
};

function projectReducer(projectState, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        projectData: [...projectState.projectData, action.payload],
      };
      break;
    case "EDIT_PROJECT":
      return {
        projectData: projectState.map((project) => {
          if (project.id === action.payload.id) {
            return action.payload;
          } else return project;
        }),
      };
      break;

    case "REMOVE_PROJECT":
      return {
        projectData: projectState.projectData.filter(
          (project) => project.id !== action.payload.id
        ),
      };
      break;
    default:
      return projectState;
  }
}

export { projectReducer, initialState };
