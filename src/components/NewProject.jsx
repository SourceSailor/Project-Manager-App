import React from "react";
import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

const NewProject = () => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            className="text-stone-800 hover:text-stone-950"
            buttonType="button"
            buttonText="Cancel"
          />
        </li>
        <li>
          <Button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            buttonType="button"
            buttonText="Save"
            onClick={handleSave}
          />
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" id="Title" input />
        <Input
          ref={description}
          label="Description"
          id="Description"
          textarea
        />
        <Input ref={dueDate} label="Due Date" id="Due Date" input />
      </div>
    </div>
  );
};

export default NewProject;
