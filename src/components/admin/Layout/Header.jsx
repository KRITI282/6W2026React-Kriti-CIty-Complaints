
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../../Services/AuthService";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    navigate("/");
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link
            to="/admin"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">WardPulse Admin</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/admin" end>dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/admin/complaints">complaints</NavLink>
              </li>
              <li>
                <NavLink to="/admin/categories">category</NavLink>
              </li>
              <li>
                <NavLink to="/admin/city">city</NavLink>
              </li>
              <li>
                <NavLink to="/admin/wards">wards</NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">contacts</NavLink>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <div className="header-social-links">
            <Link onClick={handleLogout} className="logout-btn text-decoration-none">
              <i className="bi bi-box-arrow-right" /> Logout
            </Link>
          </div>
        </div>
      </header>




    </>
  )
}
