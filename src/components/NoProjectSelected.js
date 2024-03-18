import React from "react";
import Button from "./Button";
import No_SelectedProjected_image from "../assets/no-projects.png";

function NoProjectSelected({changeProjectHandler}) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={No_SelectedProjected_image}
        alt="no_projected"
        className="w-16 h-16 object-contain mx-auto "
      />
      <h2 className="text-xl font-bold text-stone-500 my-4 ">
        No project Selected
      </h2>
      <p className="text-stone-400 mb-4 ">
        select a project or get started with a new one{" "}
      </p>
      <p className="mt-8">
        <Button content="Create new project" onClick={changeProjectHandler} />
      </p>
    </div>
  );
}

export default NoProjectSelected;
