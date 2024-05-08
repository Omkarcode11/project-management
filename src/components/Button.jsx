import React from 'react'
import { IoAddSharp } from 'react-icons/io5'


function Button({children,...props}) {
  return (
    <button {...props} className='flex gap-1 bg-stone-700 text-stone-400 hover:text-stone-100 p-4 rounded-lg items-center text-xl mt-12'>
    <IoAddSharp className='text-3xl'/>
    {children}
  </button>
  )
}

export default Button