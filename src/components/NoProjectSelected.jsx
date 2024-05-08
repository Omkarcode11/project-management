import React from 'react'
import Button from './Button'

function NoProjectSelected() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen' >
        <img src='/src/assets/no-project.png' className='h-28 object-contain'/>
        <h1 className='text-4xl font-bold my-4'>No Project Selected</h1>
        <p>Select a new Project or create a new One</p>
        <p>
           <Button>Create a new Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected