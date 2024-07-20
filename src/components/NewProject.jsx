import React from "react";
import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

const NewProject = ({ onAdd, cancelProject }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const updatedTitle = title.current.value;
    const updatedDescription = description.current.value;
    const updatedDueDate = dueDate.current.value;

    if (
      updatedTitle.length === 0 ||
      updatedDescription.length === 0 ||
      updatedDueDate.length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: updatedTitle,
      description: updatedDescription,
      dueDate: updatedDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-800 mt-4">Invalid Input</h2>
        <p className="text-stone-500 mb-4">Try again...</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button
              className="text-stone-800 hover:text-stone-950"
              buttonType="button"
              buttonText="Cancel"
              onClick={cancelProject}
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
          <Input type="text" ref={title} label="Title" id="Title" input />
          <Input
            ref={description}
            label="Description"
            id="Description"
            textarea
          />
          <Input
            type="date"
            ref={dueDate}
            label="Due Date"
            id="Due-Date"
            input
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
