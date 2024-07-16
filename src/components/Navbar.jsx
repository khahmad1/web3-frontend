import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./button";
import ".././style/Navbar.css";
export default function Navbar(){  
   return( <nav className="nav-header">
                <img className="nav-logo" src={logo}/>
           <div className="nav-links">
               <Link to="/" className="nav-link">Home<span classname="underbar"></span></Link>
               <Link to="/contact-us" className="nav-link">Contact Us <span classname="underbar"></span></Link>
               <Link to="/about" className="nav-link">About us <span classname="underbar"></span></Link>
               <Button link="/sign-in" text="Sign In"/>
               <Button link="/sign-up" text="Sign Up"/>
               </div>
    </nav>
    )
}