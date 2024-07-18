import { redirect } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "../style/profile.css";
import { useState, useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import  Button  from "../components/button.jsx";
export default function Profile(){
    const [data,setData] = useState({}); 
    // useEffect(()=>{
    //     const session = localStorage.getItem("session");        
    //     setData(
    //         session.user);
    // },[]);
    
    return (
        <div className="profile">
            <h1>Facility Name: {data.user} <div class="blue-bar"></div></h1>
            <div className="behind">
                <label><HomeIcon className="profile-icon"/>Address: <span className="data">{data.address}</span></label>
                <label> <EmailIcon className="profile-icon"/>Email: <span className="data">{data.email}</span></label>
                <label><LocalPhoneIcon className="profile-icon"/>Phone: <span className="data">{data.phone}</span> </label>
            </div>
            
            <div className="container">
            <div className="profile-vertical">
            <div className="profile-picture">
                <img src={data.logo} alt="logo"/>
            </div>
                <h2>Requested Order</h2>
                <span>{data.orders}</span>
                <div className="buttons"><Button link="/choose-your-product" text="Get your order now"/>
                <Button link="/logout" text={<LogoutIcon/>}/>
                </div>
            </div>
            
                <table> 
                    <tr>
                        <th>Facility</th>
                        <th>Date</th>
                        <th>Medicine</th>
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                </table>
                </div>
                </div>
            )
}