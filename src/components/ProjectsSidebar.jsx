import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({ addProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-17 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={addProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          buttonType="button"
          buttonText="+ Add Project"
        />
      </div>
      <ul className="mt-4">
        {projects.map((project, i) => (
          <li key={i}>
            <Button
              className="w-full text-left px-2 py-2 rounded-md my-2 text-slate-400 hover:text-stone-200 hover:bg-stone-800"
              buttonType="button"
              buttonText={project.title}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
