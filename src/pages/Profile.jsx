import { redirect } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "../style/profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_SERVER } from "../constant";
export default function Profile(){
    return (
       <div className="profile">
            <h2 className="name">Facility name: user<div className="blue-bar"></div></h2>
            <div className="behind">
                <label><HomeIcon class="profile-icon"/> address: lebanon, beirut</label>
                <label><LocalPhoneIcon class="profile-icon"/>phone: 70550776</label>
                <label><EmailIcon class="profile-icon"/>Email: karimchamich@gmail.com</label> 
            </div>
            <div className="profile-picture">
                <img src={`${URL_SERVER}/storage/logos/KIjtAVGiuGiICaQ63o5zk2k2pc1kNzd2PHFYEETC.png`}/>
            </div>
       </div> 
    )
}