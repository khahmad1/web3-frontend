import React, { useEffect, useState } from "react";
import "../style/allProduct.css";
import MedicineCard from "../components/medecineCard";
import axios from "axios";
export default function AllProducts() {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [categoryId, setCategoryID] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (categoryId == null) {
          response = await axios.get(`http://192.168.20.98:5000/api/medicine`);
          console.log(response.data);

          setMedicine(response.data);
          setLoading(false);
        } else {
          response = await axios.get(
            `http://192.168.20.98:5000/api/medicine/category/${categoryId}`
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
  }, [categoryId]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;

        response = await axios.get(`http://192.168.20.98:5000/api/category`);
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
    <div className="AllProductContainer">
      <div className="categories">
        {categories?.map((item) => (
          <button
            onClick={() => setCategoryID(item?.id)}
            className=""
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="products">
        {medicine?.map((item, index) => (
          <MedicineCard
            key={index}
            name={item.name}
            price={item.price}
            type={item?.type.type}
            quantity={item.quantity}
            company={item?.company.name}
            country={item?.company.country}
            image={`http://192.168.20.98:5000/${item.image}`}
            expiration_date={item.expiration_date}
          />
        ))}
      </div>
    </div>
  );
}
