import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="footer">
            <div>
                <h2>Quick Links: </h2>
                <div className="quick-links">
                    <Link to="/about">About us</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div>
                    <h2>About us</h2>
                    <p>blah blah blah</p>
            </div>
        </footer>
    )
}