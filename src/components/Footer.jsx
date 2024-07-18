import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../style/Footer.css'

function Footer() {
  const session = localStorage.getItem("session");

  return (
    <footer className="footer">
      <section className="row">
        <div className="column">
          <h4 className="connect">About Us</h4>
          <p className="pra">
            Our Medical Bridge is dedicated to revolutionizing the way
            healthcare services are delivered across the nation. With a singular
            focus on ensuring every hospital and clinic .
          </p>
        </div>

        <div className="column">
          <h4 className="connect">Quick Links</h4>
          <ul className="ul">
            <li>
              {session ? (
                <Link to="/profile">
                  <i className="fa fa-angle-right"></i> Profile
                </Link>
              ) : (
                <Link to="/signIn">
                  <i className="fa fa-angle-right"></i> Sign In
                </Link>
              )}
            </li>

            <li>
              <Link to="/order">
                <i className="fa fa-angle-right"></i> Order
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fa fa-angle-right"></i> Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4 className="connect">Connect with Us</h4>
          <List className="social-icons">
            <ListItem>
              <Link to="https://www.facebook.com/">
               <FacebookIcon/>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://www.instagram.com/">
            <InstagramIcon/>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://twitter.com/">
             <XIcon/>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://web.whatsapp.com/">
              <WhatsAppIcon/>
              </Link>
            </ListItem>
          </List>
        </div>
      </section>
      <section className="copyright">
        <p>© 2024 All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
