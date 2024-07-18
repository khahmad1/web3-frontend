import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import MedicineCard from "../components/medecineCard";

import AllProducts from "../components/AllProducts";
export default function HomePage(props) {
  return (
    <div className="mx-16">
      <AllProducts useCategory />
    </div>
  );
}
