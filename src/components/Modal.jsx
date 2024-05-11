import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({},ref) {
   let modelRef = useRef("")

   
   useImperativeHandle(ref,()=>(
    {show}
   ))
   function show(){
    modelRef.current.showModal()
   }

  return createPortal((
    <dialog className='fixed top-1/5 left-1/5 bg-stone-100 p-4 rounded-md' ref={modelRef}>
        <h2>Some Values are missing
        </h2>
        <p>
            check the title,date or description
        </p>
        <form method='dialog' className='text-end mr-4 mt-4'>
            <button className='text-stone-50  bg-stone-800 rounded-md px-3 py-1'>Okay</button>
        </form>
    </dialog>
  ),document.getElementById('modal'))
})

export default Modal