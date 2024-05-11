import { useState } from "react";
import "./App.css";
import LeftBar from "./components/LeftBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showProject, setShowProject] = useState({
    id:0,
    title: "",
    description: "",
    date: "",
    tasks:[],
    select: false,
  });
  const [projects, setProjects] = useState([
    {
      id:1,
      title: "React1",
      description: "Learn React js for get place",
      date: "15/6/24",
      tasks:['task1',"task2","task3"]
    },
    {
      id:2,
      title: "React2",
      description: "Learn React js for get place",
      date: "15/6/24",
      tasks:['task1',"task2","task3"]
    },
    { 
      id:3,
      title: "React3",
      description: "Learn React js for get place",
      date: "15/6/24",
      tasks:['task1',"task2","task3"]
    },
  ]);
   

  let projectSelected = showCreateProject;
  function showCP() {
    setShowProject(prev=>({...prev,select:false}))
    setShowCreateProject(true);
  }

  function hideCP() {
    setShowCreateProject(false);
  }

  function getAllProjectList() {
    let titles = [];
    for (let project of projects) {
      titles.push([project.title,project.id]);
    }
    return titles;
  }

  function selectProject(ind) {
    console.log(ind)
    if(ind==undefined){
      ind = projects.length-1
      // console.log(projects)
    }
    if (showCreateProject) {
      hideCP();
    }
    setShowProject(prev=>({...projects.find(ele=>ele.id==ind),select:true}
    ))
    console.log(showProject)
  }

  function addProject(project){
    setProjects(prev=>([...prev,project]))
    setShowProject(prev=>({...project,select:true}))
  }

  function deleteProject(ind){
    setProjects(prev=>prev.filter((ele)=>ind!=ele.id))
    showCP()
  }

  function clearTask(ind,id){
    console.log(ind,id)
    setShowProject((prev)=>(
      {...prev,tasks:prev.tasks.filter((ele,i)=>i!=ind)}))
      setProjects(prev=>{
        let update = [...prev]
        let ind = update.findIndex(ele=>ele.id==id)
        update[ind].tasks.splice(ind,1)
        return update
      })
    

  }

  function addTask(task,id){
    console.log(task)
    setShowProject((prev)=>({...prev,tasks:[...prev.tasks,task]}))
    setProjects(prev=>{
      let update = [...prev]
      let ind = update.findIndex(ele=>ele.id==id)
      update[ind].tasks.push(task)
      return update
    })
  }


  return (
    <div className='flex pt-12 h-screen overflow-auto scrollbar-none'>
      <LeftBar
        showCP={showCP}
        hideCP={hideCP}
        projectsTitle={getAllProjectList}
        projectSelected={projectSelected}
        selectProject = {selectProject}
      />
      {showProject.select?
       <Project
       id={showProject.id}
       title={showProject.title}
       desc={showProject.description}
       date={showProject.date}
       tasks={showProject.tasks}
       deleteProject={deleteProject}
       clearTask={clearTask}
       addTask={addTask}
     />: 
      (showCreateProject) ? (
        <NewProject hideCP={hideCP} addProject={addProject} 
          />
      ) : (
        <NoProjectSelected show={showCP} />
      )
      
       
      }
    </div>
  );
}

export default App;
