import { redirect } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from "react";
import axios from "axios";
export default function Profile(){
    const [info,setInfo] = useState([]);
    const token = localStorage.getItem
    useEffect(async () =>{
            const {data} = await axios.get("http://127.0.0.1:8000/api/");
    },[])
    // if(!localStorage.getItem('session')){
    //     return redirect("/sign-up")
    // }
    // return (
    //    <div>
    //         <h2>Facility name: {props.name}<div className="blue-bar"></div></h2>
    //         <div className="behind">
    //             <label><HomeIcon/> address: {props.address}</label>
    //             <label><LocalPhoneIcon/>phone: {props.phone}</label>
    //             <label><EmailIcon/>Email: {props.email}</label> 
    //         </div>
    //    </div> 
    // )
}