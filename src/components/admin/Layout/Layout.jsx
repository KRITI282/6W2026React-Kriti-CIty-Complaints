import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthService from "../../../Services/AuthService";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout() {

  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.getUserType() !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}