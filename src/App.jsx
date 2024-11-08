import './App.scss'
import Project from './components/Project'
import projects from './assets/projects.json'

import Navbar from './components/Navbar';

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
      <Navbar/>
      <p className="lazy">Website currently under construction! Check back soon!</p>
    </>
  )
}

export default App;
