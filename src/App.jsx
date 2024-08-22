import './App.scss'
import Project from './components/Project'
import projects from './assets/projects.json'

const renderProjectList = () => 
  projects.map(project => 
    <Project
      key={project.id}
      name={project.name} 
      description={project.description} 
      thumbnail={project.thumbnail}
      website={project.website}
      github={project.github}
    />
  );

function App() {
  return (
    <>
      <h1>weakbox.com</h1>
      <h3>Alpha 1.0</h3>
      {renderProjectList()}
    </>
  )
}

export default App
