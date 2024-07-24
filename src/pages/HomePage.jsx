import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import MedicineCard from "../components/medecineCard";
import image2 from "../assets/Hero2.png";
import AllProducts from "../components/AllProducts";
import TitleContentAssets from "../components/TitleContentAssets";
export default function HomePage(props) {
  return (
    <div className="mx-16">
      <TitleContentAssets
        className="!px-0"
        image={image2}
        button={"Get An order"}
        title={
          "Med Bridge: Empowering Medical Management with Seamless Efficiency"
        }
        text={`Medical Bridge is empowering the Medical management and he is
              dedicated to revolutionizing The way healthcare services are
              delivered across the nation It is the bridge between the facilities
              and the companies of medicine.`}
              
      />
      <AllProducts useCategory />
    </div>
  );
}
