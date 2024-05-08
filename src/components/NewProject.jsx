import React from "react";
import Input from "./Input";

function NewProject() {
    let inputs = [
        {title:"Title",placeholder:"Enter Title",type:'text'},
        {title:"Description",placeholder:"Enter Description",type:'text',textarea:true},
        {title:"Date",placeholder:"Select Date",type:'date'},
    ]
    
  return (
    <div className='mt-20  flex md:text-2xl items-start justify-start w-full px-8'>
      <form className="w-full">
        <p className="text-end  flex justify-end gap-3 my-2">
          <button className= "px-4 py-1 rounded-md text-stone-700">Cancel</button>
          <button className="bg-stone-800 px-4 py-1 rounded-md text-stone-100">Save</button>
        </p>
          {inputs.map((ele)=>
         <Input title={ele.title} textArea={ele.textarea} type={ele.type} placeholder={ele.placeholder}/>
        )}
        
      </form>
    </div>
  );
}

export default NewProject;
