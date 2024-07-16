import React, { useEffect, useState} from "react";
import "../style/card.css";
import { Button } from "@mui/material";
import axios from "axios";
import imgExample from "../assets/medicine.png"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./loader"
// import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./button";


function MedicineCard(props) {
  const [medicine, setMedicine] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);




//   const handleAddToCart = (_id, quantity) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [_id]: (prevCart[_id] || 0) + 1,
//     }));
//     toast.success("Successfully Added!", {
//       icon: "👏",
//     });
//   };




//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         let response;
//        
//           response = await axios.get(`${process.env.REACT_APP_URL}medicine`);
//        
//         setMedicine(response.data.response);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching medicine data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [props.categoryId]);



  return (
    <div>
      {/* <h1 className="title" style={{ fontSize: "1.4em" }}>
        {props.title}
        title
      </h1> */}

      <main className="medicine">
        {/* {loading ? (
          <Loader />
        ) : ( */}
          {/* displayedMedicine.map((item) => ( */}
            <div className="card" >
              <figure>
                <img
                  src={imgExample}
                  alt={"image"}
                />
              </figure>
              <section className="details">
                <div className="min-details">
                  <h1 className="cart-name">
                 name
                    <span>company</span>
                  </h1>
                  <h1 className="price">30$</h1>
                </div>

                <div className="options">
                  <h4>Expiration Date: test</h4>
                  <h4>Origin Country: test</h4>
                  <h4>Type: test</h4>
                  <h4>Quantity: test</h4>
                </div>
                 <ButtonComponent text={"Add To cart"}/>
              </section>
            </div>
          {/* )) */}
        {/* )} */}
      </main>
      {/* <div className="pagination">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div> */}
    </div>
  );
}

export default MedicineCard;
