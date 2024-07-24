import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireUser = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  const token = session?.userToken;
  const location = useLocation();

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
};

export default RequireUser;
