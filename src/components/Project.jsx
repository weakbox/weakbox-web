import './Project.scss'

function Project(props) {
 return (
    <div className="project-container">
      <h2>{props.name}</h2>
      <img className="project-thumbnail" src={props.thumbnail} alt="Project thumbnail" />
      <p>{props.description}</p>
      <div className="project-button-container">
        <a href={props.website} target="_blank"><button><i className="fa-solid fa-link"></i> Website</button></a>
        <a href={props.github} target="_blank"><button><i className="fa-brands fa-github"></i> Source</button></a>
      </div>     
    </div>
  )
}

export default Project
