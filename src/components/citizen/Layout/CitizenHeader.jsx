import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import AuthService from "../../../Services/AuthService";
import { toast } from "react-toastify";

export default function CitizenHeader() {

  const navigate = useNavigate();
  let isLogin = AuthService.getIsLogin();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await AuthService.logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message || error.code || "Failed to logout!");
    } finally {
      navigate("/login");
    }
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <img src="/assets/img/ChatGPT Image Jul 25, 2026, 10_27_12 PM.png" alt="logo" />
            <h1 className="sitename">WardPulse</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/category">Complaint Categories</NavLink>
              </li>

              {!isLogin && (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              {isLogin && (
                <>
                  <li>
                    <NavLink to="/my-complaints">My Complaints</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                </>
              )}

              <li>
                <ThemeButton />
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>

          <div className="header-social-links">
            {isLogin && (
              <Link onClick={handleLogout} className="logout-btn text-decoration-none">
                <i className="bi bi-box-arrow-right" /> Logout
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
