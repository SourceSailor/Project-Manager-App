import React from "react";
import { useState } from "react";
import Button from "./Button";

const NewTask = ({ onAddTask }) => {
  const [eneterdTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleAddTask() {
    onAddTask(eneterdTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={eneterdTask}
      />

      <Button
        className="text-stone-700 hover:text-stone-950"
        buttonText={"Add Task"}
        buttonType={"button"}
        onClick={handleAddTask}
      />
    </div>
  );
};

export default NewTask;
