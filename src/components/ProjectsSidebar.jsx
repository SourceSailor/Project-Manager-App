import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  addProject,
  projects,
  selectProject,
  selectProjectId,
}) => {
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
        {projects.map((project, i) => {
          let cssClasses =
            "w-full text-left px-2 py-2 rounded-md my-2  hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={i}>
              <Button
                className={cssClasses}
                buttonText={project.title}
                onClick={() => selectProject(project.id)}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
