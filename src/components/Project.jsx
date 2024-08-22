import './Project.scss'

function Project(props) {
 return (
    <div className="project-container">
      <img className="project-image" src={props.thumbnail} alt={props.name + " Thumbnail"} />
      <div className="project-body-container">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="project-button-container">
          <a href={props.website} target="_blank"><button><i class="fa-solid fa-link"></i> Website</button></a>
          <a href={props.github} target="_blank"><button><i class="fa-brands fa-github"></i> Source</button></a>
        </div>
      </div>
    </div>
  )
}

export default Project
