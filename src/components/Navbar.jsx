import { Link } from "react-router-dom";
// import logo from "../assets/medical-logo-design-933561217.jpeg";

export default function Navbar(){  
   return( <nav className="nav">
                {/* <img className="logo" src={logo}/> */}
           <div className="link">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/about">About</Link>
                <Link className="btn" to="/products">Products</Link>
                <Link className="btn" to="/signup">Sign Up</Link>
           </div>
    </nav>
    )
}