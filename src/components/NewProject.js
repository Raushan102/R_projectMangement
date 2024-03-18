import React from "react";
import { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

function NewProject({ Add,cancel }) {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let dateRef = useRef();
  let model = useRef();
  function onSaveHandler() {
    let Title_User_Data = titleRef.current.value;
    let description_User_Data = descriptionRef.current.value;
    let data_User_Data = dateRef.current.value;

    if (
      Title_User_Data.trim() === "" ||
      description_User_Data.trim() === "" ||
      data_User_Data.trim() === ""
    ) {
      model.current.Open();
      return;
    } 
    
      let UserData = {
        Title: Title_User_Data,
        Description: description_User_Data,
        date: data_User_Data,
      };
      Add(UserData);
    
  }

  return (
    <>
      <Model ref={model} Title="Okay">
        <h2 className=" border-l text-stone-900 text-xl my-1 font-black">Invalid input</h2>
        <p className="text-stone-600 my-1">Oops...looks like you forgot to enter a value.</p>
        <p className="text-stone-600 my-1">please make sure you provide a valid value for every input field </p>
      </Model>
      <div className="w-[35rem] mx-2 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={cancel}>
              cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
              onClick={onSaveHandler}
            >
              save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input
            type="text"
            label="Description"
            textArea
            ref={descriptionRef}
          />
          <Input type="date" label="Due Date" ref={dateRef} />
        </div>
      </div>
    </>
  );
}

export default NewProject;
