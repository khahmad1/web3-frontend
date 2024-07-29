import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAdmin = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  const token = session?.userToken;
  const is_admin = session?.user.is_admin == true;
  console.log(is_admin ,token)
  const location = useLocation();

  if (token && is_admin) {
    return <Outlet />;
  } else {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
};

export default RequireAdmin;
