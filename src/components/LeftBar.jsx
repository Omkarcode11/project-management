import React from 'react'
import Button from './Button'

function LeftBar() {
  return (
    <div className='bg-black h-screen lg:w-80 md:w-1/3 mt-12 rounded-tr-3xl text-white text-center p-12'
  >
      <h1 className='text-2xl font-bold' >Your Projects</h1>

      <Button>
       
        Add Project
      </Button>
      <ul className='mt-16 px-4 text-xl list-none text-start'>
        <li className='py-2'>Project 1</li>
        <li className='py-2'>Project 1</li>
        <li className='py-2' >Project 1</li>
        <li className='py-2'>Project 1</li>
        <li className='py-2'>Project 1</li>
      </ul>

    </div>
  )
}

export default LeftBar