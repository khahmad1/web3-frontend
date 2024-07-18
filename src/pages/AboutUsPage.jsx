import TitleContentAssets from "../components/TitleContentAssets";
import image from "../assets/Hero1.png"
import image2 from "../assets/Hero2.png"
import image3 from "../assets/Hero3.png"
export default function AboutUsPAge() {
  return( <div className=""> 
  <TitleContentAssets bgPrimary image={image2} title={"Welcome To MedBridge"} text={` Medical Bridge is empowering the Medical management and he is dedicated to revolutionizing The way healthcare services are delivered across the nation It is the bridge between the facilities and the companies of medicine.. With a singular focus on ensuring every hospital and clinic has uninterrupted access to vital medical supplies, we strive to elevate the quality of care provided to patients`}/>
  <TitleContentAssets reverse  image={image} title={"Our Vision"} text={`Our vision is to establish a comprehensive and efficient system that streamlines the procurement, distribution, and management of medical supplies throughout Lebanon. By leveraging advanced technologies and robust logistics, we empower healthcare facilities to focus on what matters most – saving lives and improving patient outcomes.`}/>
  <TitleContentAssets bgPrimary image={image3} title={"Our Goals"} text={` Through our Medical Supply Management System, we aim to address the longstanding challenges faced by healthcare providers, including stock shortages, delayed deliveries, and inefficient inventory management. By establishing a centralized platform, we facilitate seamless communication between suppliers and healthcare facilities, enabling timely replenishment of essential medical resources.`}/>
  </div>);
}
