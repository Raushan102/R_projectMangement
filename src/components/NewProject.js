import React from "react";
import { useRef } from "react";
import Input from "./Input";


function NewProject({Add}) {

  let titleRef=useRef()
  let descriptionRef=useRef()
  let dateRef=useRef()
  function onSaveHandler()
  {
    let Title_User_Data=titleRef.current.value;
    let description_User_Data=descriptionRef.current.value;
    let data_User_Data=dateRef.current.value;

    if(Title_User_Data==='' ||description_User_Data==='' ||data_User_Data==='')
    {
      console.log('error');
    }
    else{

      let UserData={
        Title:Title_User_Data,
        Description:description_User_Data,
        date:data_User_Data
      }
      Add(UserData)
    }



  }




  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950">cancel</button></li>
        <li><button className= "px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md" onClick={onSaveHandler}>save</button></li>
      </menu>

      <div>
      <Input type='text' label="Title"  ref={titleRef}/>
      <Input type='text' label='Description' textArea ref={descriptionRef} />
      <Input type='date' label='Due Date'  ref={dateRef} />
    
      </div>
    </div>
  );
}

export default NewProject;
