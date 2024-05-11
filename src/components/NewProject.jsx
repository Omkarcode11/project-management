import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ hideCP, addProject }) {
  let modal = useRef("")
  let title = useRef("");
  let description = useRef("");
  let date = useRef("");

  let inputs = [
    { title: "Title", placeholder: "Enter Title", type: "text", ref: title },
    {
      title: "Description",
      placeholder: "Enter Description",
      type: "text",
      textarea: true,
      ref: description,
    },
    { title: "Date", placeholder: "Select Date", type: "date", ref: date },
  ];

  function cancelHandler() {
    hideCP();
  }

  function submitHandler(e) {
    e.preventDefault();
    let id = Math.floor(Math.random()*100000)
    if (
      title.current.value.trim() == "" ||
      description.current.value.trim() == "" ||
      date.current.value.trim() == ""
    ) {
      // console.log(modal)
      modal.current.show()
      return 
      //show modal
    } else {
      let newProjectObj = {
        id:id,
        title: title.current.value.trim(),
        description: description.current.value.trim(),
        date: date.current.value.trim(),
        tasks:[]
      };

      // console.log(newProjectObj);
      addProject(newProjectObj);
    }
  }

  return (
    <div className='flex md:text-2xl items-start justify-start w-full px-8 overflow-y-scroll'>
      <form className='w-full' onSubmit={submitHandler}>
        <p className='text-end  flex justify-end gap-3 my-2'>
          <button
            onClick={cancelHandler}
            className='px-4 py-1 rounded-md text-stone-700'>
            Cancel
          </button>
          <button
            type='submit'
            className='bg-stone-800 px-4 py-1 rounded-md text-stone-100'>
            Save
          </button>
        </p>
        {inputs.map((ele) => (
          <Input
            title={ele.title}
            ref={ele.ref}
            textArea={ele.textarea}
            type={ele.type}
            placeholder={ele.placeholder}
          />
        ))}
      </form>
      <Modal ref={modal}/>
    </div>
  );
}

export default NewProject;
