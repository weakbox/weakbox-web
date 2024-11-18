import "./Navbar.scss";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="container-links">
                <h1>weakbox</h1>
                <a href="https://github.com/weakbox" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/weakbox/" target="_blank">LinkedIn</a>
                <a href="mailto:hello@weakbox.com">Email</a>
            </div>
            <div className="hire">
                <h2><a href="mailto:hello@weakbox.com?subject=Hiring">Hire Me!</a></h2>
            </div>
        </nav>
    );
}
