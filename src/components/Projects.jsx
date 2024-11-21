import styles from "./Projects.module.css";
import featuredProjects from "../assets/featuredProjects.json";

function Project(props) {
 return (
    <div className={styles.featuredProjectCard}>
        <img className={styles.projectThumbnail} src={props.thumbnail} alt={`${props.name} project thumbnail`} />
        <div className={styles.textWrapper}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        <div className={styles.projectButtonContainer}>
            {props.website && (
                <a className={styles.button} href={props.website} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-link"></i> Website
                </a>
            )}
            <a className={styles.button} href={props.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> Source
            </a>
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
            <div className={styles.textWrapper}>
                <h2>Featured Projects</h2>
                <p>I've made a bunch of stuff, but here are some of my favorites:</p>
            </div>
            <div className={styles.featuredProjectsWrapper}>
                {renderFeaturedProjects()}
            </div>
        </div>
    );
}
