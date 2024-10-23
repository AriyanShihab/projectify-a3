const initialState = {
  projectData: [],
};
// wirte a common function for reverseing data based on category
function reverceCategory(data, category) {
  let reverceCategory = [...data]
    .filter((pr) => pr.category === category)
    .reverse();
  console.log(reverceCategory, "rev cat");
  let prevStateWithoutCategory = data.filter((pr) => pr.category !== category);

  let nextData = [...reverceCategory, ...prevStateWithoutCategory];
  return nextData;
}

function projectReducer(projectState, action) {
  switch (action.type) {
    case "ADD_PROJECT": {
      // plan is to Sorting project data by date, with the newest on top.

      const sortedProjectData = [
        ...projectState.projectData,
        action.payload,
      ].sort((a, b) => new Date(b.date) - new Date(a.date));
      // reverceCategory(projectState.projectData, "todo") // scan:: this give expected output

      return {
        projectData: sortedProjectData,
      };
    }
    case "EDIT_PROJECT":
      // reverceCategory(projectState.projectData, "done") // scan:: this give expected output
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
    case "REVERSE_TODO": {
      let nextState = reverceCategory(projectState.projectData, "todo");

      return {
        ...projectState,
        projectData: nextState,
      };
    }
    // case "REVERSE_PROGRESS": {
    //   return reverceCategory(projectState.projectData, " inProgress");
    // }
    // case "REVERSE_DONE": {
    //   return reverceCategory(projectState.projectData, "done");
    // }
    // case "REVERSE_REVISED": {
    //   return reverceCategory(projectState.projectData, "revised");
    // }

    default:
      return projectState;
  }
}

export { projectReducer, initialState };
