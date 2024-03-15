import React from "react";
import Button from "./Button";

function selected_sideBar({ Data }) {

    let FormatedDate=new Date(Data.date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
  return (
    <div className="w-2/3  flex-col ">
      <div className="flex items-center justify-around ">
        <h1 className='text-stone-900 font-bold text-xl'>{Data.title}</h1>
        <Button>Delete</Button>
      </div>
      <p className="text-stone-900/90">{FormatedDate}</p>
      <p className="py-6 border-b-2 border-stone-950">{Data.Description}</p>
      <h2 className="">Task</h2>
    </div>
  );
}

export default selected_sideBar;
 