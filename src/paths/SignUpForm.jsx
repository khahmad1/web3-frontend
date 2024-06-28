import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
export default function SignUpForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [date,setDate] = useState("");
    return(
        <main>
        <Navbar/> 
            <form className="signup" onSubmit={handleSubmit}>
            <h2><span className="required"> *</span> indicates required</h2>
            <div className="form-ele">
                <label className="input-label" to="name">Name<span className="required">*</span>:</label>
                <input type="text" onChange={handleName} id="name" name="name" placeholder="Name" required/>
                <span>{formErrors["name"]}</span>
            </div>
            <div>
                <label className="input-label" to="email">Email<span className="required">*</span>: </label>
                <input type="email" name="email" id="email" placeholder="Email" required/>
            </div>
            <div>
                <label className="input-label" to="password">Password<span className="required">*</span>: </label>
                <input type="password" name="password" id="email" placeholder="Password" required/>
            </div>
            <div>
                <label className="input-label" to="date">Birthday <span className="required">*</span>: </label>
                <input type="date" name="date"/>
            </div>
            <div>
                <input className="btn" type="submit" value="Sign up"/> &nbsp;
                <input className="btn" type="reset" value="Clear"/>
            </div>
            <div>
                Already have an account? <Link className="btn" to="/login">Log in here</Link>
            </div>
        </form>
        <Footer/>
        </main>

    )
}