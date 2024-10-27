import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProjectContext } from "../../context/index";
import InputText from "../forms-inputs/InputText";
import Options from "../forms-inputs/Options";
import TextArea from "../forms-inputs/TextArea";
import CloseButton from "../forms-inputs/CloseButton";
import SubmitButton from "../forms-inputs/SubmitButton";

export default function AddTaskModal({ editData, onClose }) {
  const { dispatch } = useContext(ProjectContext);
  const [isFormValid, setIsFormValid] = useState(true);
  let formValidation = true;

  const [task, setTask] = useState(
    editData || {
      projectName: "",
      description: "",
      date: "",
      category: "",
    }
  );

  // handlers
  function handleInputChane(event) {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const feilds = Object.keys(task);
    let emptyFeild = [];
    feilds.forEach((feild) => {
      if (task[feild] === "" || task[feild] === " ") {
        formValidation = false;
        setIsFormValid(false);
        emptyFeild.push(feild);
      }
    });
    if (!formValidation) {
      toast.warn(
        `${
          emptyFeild.length > 1
            ? "there are some empty feilds, please fill those up !"
            : `${emptyFeild[0]} is epmty, please fill it up`
        } `,
        {
          theme: "dark",
          position: "bottom-center",
        }
      );
      return false;
    }

    if (editData) {
      dispatch({
        type: "EDIT_PROJECT",
        payload: {
          ...task,
        },
      });
      onClose();

      return toast.warn("Project Edited successfully", {
        position: "bottom-center",
        theme: "dark",
      });
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: {
          ...task,
          id: crypto.randomUUID(),
        },
      });
      setIsFormValid(true);
      onClose();

      return toast.success("Project added successfully", {
        position: "bottom-center",
        theme: "dark",
      });
    }
  }

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm p-4 text-white absolute top-0 left-0 z-10">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6 border border-opacity-20 border-green-400 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {editData ? "Edit" : "Create"} Task
          </h2>

          <form onSubmit={handleSubmit}>
            <InputText
              value={task.projectName}
              changeHandler={handleInputChane}
              name={"projectName"}
              type={"text"}
            />

            <TextArea
              name={"description"}
              value={task.description}
              changeHandler={handleInputChane}
            />
            <InputText
              value={task.date}
              changeHandler={handleInputChane}
              name={"date"}
              type={"date"}
            />

            <Options
              name={"category"}
              value={task.category}
              changeHandler={handleInputChane}
            />

            <div className="flex justify-end space-x-3">
              <CloseButton onClose={onClose}/>
              <SubmitButton editData={editData}/>
            </div>
          </form>
          {!isFormValid && (
            <p className="text-rose-500  text-[18px] text-center mt-3">
              you must fill every feild to submit form
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
