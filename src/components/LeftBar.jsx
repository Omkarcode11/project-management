import React from 'react'
import Button from './Button'

function LeftBar({showCP,hideCP,projectsTitle,selectProject}) {
  const titles = projectsTitle()
  // console.log(titles)

  // function displayProject(){
  //   if(projectSelected){
  //      hideCP()
  //   }

  // }


  return (
    <div className='bg-black h-full overflow-y-auto sm:w-1/5 w-auto rounded-tr-3xl text-white text-center p-4 py-12 '
  >
      <h1 className='text-2xl font-bold' >Your Projects</h1>

      <Button onClick={showCP}>
        Add Project
      </Button>
      <ul className='mt-16 px-4 text-lg text-stone-300 list-none text-start hover:cursor-pointer'>
         {titles.map((ele)=> <li key={ele[1]} onClick={()=>selectProject(ele[1])} className='py-2  hover:text-stone-50 hover:bg-stone-800 rounded-sm px-2'>{ele[0]}</li>)}
   
      </ul>

    </div>
  )
}

export default LeftBar