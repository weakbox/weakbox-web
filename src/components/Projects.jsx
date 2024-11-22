import styles from "./Projects.module.css";

import projects from "../assets/projects.json";
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
            {props.github && (
                <a className={styles.button} href={props.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i> Source
                </a>
            )}
        </div>     
    </div>
  )
}

// These two components are so similar they can absolutely be refactored:
export function Projects() {
    const renderProjects = () => {
        return projects.map(project => {
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
                <h2>Additional Projects</h2>
                <p>Some of the larger team-based projects from my time at Dalhousie, as well as self-guided web developement work:</p>
            </div>
            <div className={styles.featuredProjectsWrapper}>
                {renderProjects()}
            </div>
        </div>
    );
}

export function FeaturedProjects() {
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
