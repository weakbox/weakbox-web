import './Project.scss'

function Project(props) {
 return (
    <div className="project-container" style={{backgroundImage: `url(${props.thumbnail})`}}>
      <div className="project-body-container">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="project-button-container">
          <a href={props.website} target="_blank"><button><i className="fa-solid fa-link"></i> Website</button></a>
          <a href={props.github} target="_blank"><button><i className="fa-brands fa-github"></i> Source</button></a>
        </div>
      </div>
    </div>
  )
}

export default Project
