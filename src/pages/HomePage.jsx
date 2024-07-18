import { Card } from "@mui/material";
import {Link} from "react-router-dom";
import MedicineCard from "../components/medecineCard";
import Button from "../components/button";
import "../style/HomePage.css";
export default function HomePage(){
    return(
    <div>
        
        <article className="section">
            <h2 className="title">
            Med Bridge: Empowering Medical Management
            with Seamless Efficiency
            </h2>
            <p className="paragraph">
            Medical Bridge is empowering the Medical management and he is
            dedicated to revolutionizing The way healthcare services are
            delivered across the nation It is the bridge between the facilities
            and the companies of medicine.
            </p>
            <Button link="/about" text="Learn more"/>
            <MedicineCard/>
        </article>
    </div>
    )
}