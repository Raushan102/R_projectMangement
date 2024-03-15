import React from 'react'
import Button from './Button';

function SelectedProject({Data}) {

    console.log(Data);
    let FormatedDate=new Date(Data.date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
  return (
    <div className="w-[35rem]  flex-col ">
      <div className="flex items-center justify-between ">
        <h1 className='text-stone-900 font-extrabold text-xl '>{Data.Title}</h1>
        <button className='mx-2 text-[0.9rem]'>Delete</button>
      </div>
      <p className="text-stone-900/90 text-xs">{FormatedDate}</p>
      <p className="py-6 border-b-2 border-stone-950 whitespace-pre-wrap">{Data.Description}</p>
      <h2 className="">Task</h2>
    </div>
  );
}

export default SelectedProject
