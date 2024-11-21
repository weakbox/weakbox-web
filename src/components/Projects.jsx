import styles from "./Projects.module.css";
import featuredProjects from "../assets/featuredProjects.json";

function Project(props) {
 return (
    <div className={styles.featuredProjectCard}>
      <img className={styles.projectThumbnail} src={props.thumbnail} alt="Project thumbnail" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className={styles.projectButtonContainer}>
        <a className={styles.button} href={props.website} target="_blank"><i className="fa-solid fa-link"></i> Website</a>
        <a className={styles.button} href={props.github} target="_blank"><i className="fa-brands fa-github"></i> Source</a>
      </div>     
    </div>
  )
}

export default function FeaturedProjects() {
    const renderFeaturedProjects = () => {
        return featuredProjects.map(project => {
            return <Project
                key={project.id}
                name={project.name} 
                description={project.description} 
                thumbnail={project.thumbnail}
                website={project.website}
                github={project.github}
            />
        });
    };
    
    return (
        <div className={styles.featuredProjects}>
            <h2>I'm always working on new things. Here are some of my favorites:</h2>
            <div className={styles.featuredProjectsWrapper}>
                {renderFeaturedProjects()}
            </div>
        </div>
    );
}
