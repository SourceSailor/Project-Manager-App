import React from "react";
import NewTask from "./NewTask";
import Button from "./Button";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <Button
                className="text-stone-700 hover:text-red-500"
                buttonText={"Delete"}
                buttonType={"button"}
                onClick={() => onDeleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
