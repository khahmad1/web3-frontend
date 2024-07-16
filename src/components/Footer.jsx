import { Link } from "react-router-dom";
import ".././style/Footer.css";
import "../index.css";
import twitter from "../assets/icons8-twitter-50.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer(){
    return (
        <footer className="footer">
            <div className="info">
                <div>
                    <h2>About us<div class="blue-bar"></div></h2>
                    <p style={{width: 60+"%"}}>Our Medical Bridge is dedicated to revolutionizing the way healthcare services are delivered across the nation. With a singular focus on ensuring every hospital and clinic .</p>
            </div>
            <div>
                <h2>Quick Links: <div class="blue-bar"></div></h2>
                <div className="quick-links">
                    <Link to="/about">About us</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div>
                <h2>Contact us!<div class="blue-bar"></div></h2>
                <div className="foot-links">
                <Link to="https://www.instagram.com/" ><InstagramIcon style={{width:30+"px",height:30+"px"}}/></Link>
                <Link to="https://www.x.com" ><XIcon style={{width:30+"px",height:30+"px"}}/></Link>
                <Link to="https://www.youtube.com" ><YouTubeIcon style={{width:30+"px",height:30+"px"}}/></Link>
                <Link to="https://www.whatsapp.com" ><WhatsAppIcon style={{width:30+"px",height:30+"px"}}/></Link> 
                </div>
            </div>
           </div>
           <div className="copyright">
                © 2024 All Rights Reserved
            </div> 
        </footer>
    )
}