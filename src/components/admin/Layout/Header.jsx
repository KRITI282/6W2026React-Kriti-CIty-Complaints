
import { Link } from "react-router-dom";

export default function Header() {
  return (


    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link
            to="index"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}

            <h1 className="sitename">WardPulse</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/admin" className="active">
                  dashboard
                  <br />
                </Link>

              </li>
              <li>
                <Link to="/admin/categories">category</Link>
              </li>
              <li >
                <Link to="/admin/wards">
                  <span>wards</span>{" "}
                </Link>
              </li>
              <li >
                <Link to="/admin/city">
                  <span>city</span>{" "}
                </Link>

              </li>
              <li>
                <Link to="/admin/complaints">complaints</Link>

              </li>
              <li>
                <Link to="/admin/users">users</Link>

              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <div className="header-social-links">
            <Link to="#" className="twitter">
              <i className="bi bi-twitter-x" />
            </Link>

            <Link to="#" className="facebook">
              <i className="bi bi-facebook" />
            </Link>

            <Link to="#" className="instagram">
              <i className="bi bi-instagram" />
            </Link>

            <Link to="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </Link>

          </div>
        </div>
      </header>




    </>
  )
}
