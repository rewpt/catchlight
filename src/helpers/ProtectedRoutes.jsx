import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {
  const token = localStorage.getItem("userToken");
  return token ? <Outlet /> : <Navigate to="/register" />;
}
