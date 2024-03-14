import React from "react";
import { forwardRef } from "react";
let classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 ";
let Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold text-stone-500 uppercase">
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input {...props} className={classes} ref={ref} />
      )}
    </p>
  );
});

export default Input;
