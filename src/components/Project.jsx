import React, { useRef } from "react";
import Tasks from "./Tasks";

function Project({
  title,
  desc,
  date,
  id,
  deleteProject,
  tasks,
  clearTask,
  addTask,
}) {
  let newDate = new Date(date);
  let task = useRef("");


  function delHandler() {
    deleteProject(id);
  }
  function addTaskHandler() {
    if (task.current.value.trim().length > 2) {
      addTask(task.current.value,id);
      task.current.value = "";
    }
  }

  function clickEnter(e) {
    if (e.key === "Enter") {
      addTaskHandler();
    }
  }
  function clickDelete(e) {
    if (e.key === "Delete") {
      delHandler();
    }
  }

  return (
    <div className='px-8 pt-12 w-full flex flex-col gap-3'>
      <div className='flex justify-between  w-full'>
        <h1 className='text-3xl font-semibold '>{title}</h1>
        <button
          onClick={delHandler}
          className='px-4 bg-red-200 text-red-600 rounded-lg'>
          Delete
        </button>
      </div>
      <div>{newDate.toLocaleDateString()}</div>
      <div>{desc}</div>
      <hr />
      <h1 className='text-2xl'>Tasks</h1>
      <div className='flex gap-8'>
        <input
          className='bg-stone-200 px-4 py-1 rounded-md focus:outline-none border-b-2 border-stone-500'
          ref={task}
          type='text'
          placeholder='type task'
          onKeyDown={(e) => clickEnter(e)}
        />
        <button
          onClick={addTaskHandler}
          className='bg-green-200 text-green-600 py-1 px-4 rounded-md'>
          Add
        </button>
      </div>

      <ul className='overflow-x-auto' >
        {tasks?.length
          ? tasks.map((ele, ind) => (
              <Tasks id={id} clearTask={clearTask} task={ele} ind={ind} />
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Project;
