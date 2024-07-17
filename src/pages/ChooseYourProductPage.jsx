import React from "react";
import AllProducts from "../components/AllProducts";
import TitleContentAssets from "../components/TitleContentAssets";
import image3 from"../assets/medicine.png"
export default function ChooseYourProductPage() {
  return (
    <div className="mx-16 flex flex-col gap-10">
      <TitleContentAssets bgPrimary className={"my-5 "}  image={image3} title={"Customize Your Order"} />  
      <AllProducts />
    </div>
  );
}
