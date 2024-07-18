import React, { useEffect, useState } from "react";
import "../style/allProduct.css";
import MedicineCard from "./medecineCard";
import axios from "axios";
import { URL_SERVER, assets } from "../constant";
import ButtonComponent from "./button";
import Loader from "./loader";

export default function AllProducts(props) {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [categoryObject, setCategoryObject] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (categoryObject == null) {
          response = await axios.get(`${URL_SERVER}medicine`);
          console.log(response.data);

          setMedicine(response.data);
          setLoading(false);
        } else {
          response = await axios.get(
            `${URL_SERVER}medicine/category/${categoryObject.id}`
          );
          console.log(response.data);

          setMedicine(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching medicine data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryObject]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;

        response = await axios.get(`${URL_SERVER}category`);
        console.log(response.data);

        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching medicine data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="AllProductContainer my-5">
      <p className="text-4xl font-semibold">Get Your Products </p>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-10 ">
          {!props.useCategory && (
            <div className="flex flex-row ">
              <div className="flex  gap-10 flex-1  items-center ">
                {categories?.map((item) => (
                  <ButtonComponent
                    onClick={() => setCategoryObject(item)}
                    className="mx-5"
                    key={item.id}
                    text={item.name}
                  />
                ))}
              </div>
              <div className="font-semibold text-xl items-center">
                {" "}
                Sort BY : {categoryObject ? categoryObject.name : "Default"}
              </div>
            </div>
          )}
          <div className="grid grid-cols-5 gap-10 place-items-center">
            {!props.useCategory
              ? medicine?.map((item, index) => (
                  <MedicineCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    type={item?.type.type}
                    quantity={item.quantity}
                    company={item?.company.name}
                    country={item?.company.country}
                    image={`${assets}${item.image}`}
                    expiration_date={item.expiration_date}
                  />
                ))
              : medicine
                  .slice(0, 10)
                  ?.map((item, index) => (
                    <MedicineCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      type={item?.type.type}
                      quantity={item.quantity}
                      company={item?.company.name}
                      country={item?.company.country}
                      image={`${assets}${item.image}`}
                      expiration_date={item.expiration_date}
                    />
                  ))}
          </div>
        </div>
      )}
     {props.useCategory && <div className="flex flex-row justify-center"> <ButtonComponent width={250} link={"/choose-your-product"} text={"Check More Product"}/></div>}
    </div>
  );
}
