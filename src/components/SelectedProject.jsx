import React from "react";
import Button from "./Button";
import Tasks from "./Tasks";

const SelectedProject = ({
  tasks,
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button
            className="text-stone-600 hover:text-stone-950"
            buttonText={"Delete"}
            buttonType={"button"}
            onClick={onDelete}
          />
        </div>
        <p className="mb-4 text-stone-400">{project.description}</p>
        <p className="whitespace-pre-wrap text-stone-600">{formattedDate}</p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
