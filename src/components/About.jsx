import styles from "./About.module.css";
import headerImage from "../assets/me.jpg";

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.textWrapper}>
                <h1>Hi out there! It's me, <span className={styles.highlight}>Connor McLeod</span>.</h1>
                <p>I'm a Computer Engineer based in <i className="fa-brands fa-canadian-maple-leaf"></i> Halifax, Nova Scotia.</p>
                <div className={styles.buttonWrapper}>
                    <a className={styles.button} href="https://github.com/weakbox" target="_blank"><i className="fa-brands fa-github"></i> GitHub</a>
                    <a className={styles.button} href="https://linkedin.com/in/weakbox/" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    <a className={styles.button} href="mailto:hello@weakbox.com" target="_blank"><i className="fa-solid fa-envelope"></i> Email</a>
                </div>
            </div>
            <img src={headerImage} alt="A picture of me and my friends in the back of a truck" />
        </div>
    );
}
