import React, { forwardRef } from 'react'


function Input({title,placeholder,type,textArea},ref) {
    let flexCol = 'flex flex-col my-4'
    

  return (
    <p className={`${flexCol}`}>
    <label className='text-3xl py-1'>{title}</label>
    {textArea ?
    <textarea
      
      ref={ref}
      rows={3}
      type={type}
      className='bg-stone-300 rounded-sm p-1 border-b-2 border-stone-700 focus:outline-none'
      placeholder={placeholder}
    />:
    
    <input
    
      ref={ref}
      type={type}
      className='bg-stone-300 rounded-sm p-1 focus:outline-none'
      placeholder={placeholder}
    />}
  </p>
  )
}

export default forwardRef(Input)