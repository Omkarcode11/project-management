
import './App.css'
import LeftBar from './components/LeftBar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'

function App() {


  return (
   <div className='flex'>
    <LeftBar/>
    {/* <NewProject/> */}
    <NoProjectSelected/>
   </div>
  )
}

export default App
