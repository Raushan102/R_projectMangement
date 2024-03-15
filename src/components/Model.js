import React from "react";
import { useRef, forwardRef,useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from  './Button'



let Model = forwardRef(function Model({ children,Title }, ref) {

  let model = useRef();

  useImperativeHandle(ref,()=>{
    return{
      Open(){
        model.current.showModal()
      }
    }
  })
  return createPortal(<dialog ref={model} className="p-5  m-auto gap-2 rounded-md   backdrop:bg-stone-900/90">
  {children}
  <form method="dialog" className="w-full flex justify-end  items-center mt-4 ">
     <Button content={Title}/>
  </form>
  </dialog>,document.getElementById('model'));
});

export default Model;
