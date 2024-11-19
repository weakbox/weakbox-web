import './App.scss'
import Project from './components/Project'
import projects from './assets/projects.json'
import About from './components/About';
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
      <p className="lazy">Hi! Thanks for checking out my portfolio! Note that this site isn't quite done yet, so check back soon!</p>
      <div className="project-grid">
        {renderProjectList()}
      </div>
    </>
  )
}

export default App;
