import React from "react";

function Tasks({id, task, ind,clearTask }) {
    function clearHandler(){
      clearTask(ind,id)
    }
  return (
    <li className="flex items-center bg-stone-100 my-4 p-4 rounded-md justify-between px-8">
      <h4>{task}</h4>
      <button onClick={clearHandler} className="text-red-600 bg-red-300 py-2 px-4 rounded-md">Clear</button>
    </li>
  );
}

export default Tasks;
