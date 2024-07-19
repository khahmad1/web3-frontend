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
import ChooseYourProductPage from "./pages/ChooseYourProductPage";
import Admin from "./dashboardComponent/Admin";

import Facility from "./dashboardComponent/Facility";
import Medicine from "./dashboardComponent/Medicine";
import Message from "./dashboardComponent/Message";
import Order from "./dashboardComponent/Order";
import "./index.css";
import Category from "./dashboardComponent/Category";
import Dashboard from "./dashboardComponent/Dashboard";
import Type from "./dashboardComponent/Type";
import Company from "./dashboardComponent/Company";
import { AppProvider } from "./context";
import Orders from "./pages/Orders";
function App() {
  return (
    <div className="">
      <AppProvider>
        <Routes>
          {/* <Route path="/dashboard" element={<LoginAdmin />}> */}
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<Admin />} />
            <Route path="category" element={<Category />} />
            <Route path="type" element={<Type />} />
            <Route path="company" element={<Company />} />
            <Route path="facility" element={<Facility />} />
            <Route path="medicine" element={<Medicine />} />
            <Route path="message" element={<Message />} />
            <Route path="order" element={<Order />} />
          </Route>
          {/* </Route> */}
          <Route path="/" element={<CustomerLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact-us" element={<ContactUsPAge />} />
            <Route
              path="/choose-your-product"
              element={<ChooseYourProductPage />}
            />
            <Route path="/about" element={<AboutUsPAge />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
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
