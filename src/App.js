import { Route, Routes } from "react-router";
import CustomerLayout from "./layouts/customerLayout";
import AboutUsPAge from "./pages/AboutUsPage";
import ContactUsPAge from "./pages/ContactUsPage";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import AdminLayout from "./layouts/adminLayout";
import NotFound from "./pages/notFound";
import SignIn from "./pages/signInPage";
import SignUp from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
function App() {
  return (
    <div className="">
      <Routes>
        {/* <Route path="/dashboard" element={<LoginAdmin />}> */}
        <Route path="/dashboard" element={<AdminLayout />}>
          {/* <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<AdminTable />} />
            <Route path="category" element={<CategoryTable />} />
            <Route path="facility" element={<FacilityTable />} />
            <Route path="medicine" element={<MedicineTable />} />
            <Route path="message" element={<MessageTable />} />
            <Route path="order" element={<OrderTable />} /> */}
        </Route>
        {/* </Route> */}
        <Route path="/" element={<CustomerLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact-us" element={<ContactUsPAge />} />
          <Route path="/all-product" element={<AllProducts />} />
          <Route path="/about" element={<AboutUsPAge />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000} // Duration to display each notification in milliseconds (e.g., 3000 = 3 seconds)
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
