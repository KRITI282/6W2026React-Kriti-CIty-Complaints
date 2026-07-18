import { Link } from "react-router-dom";

export default function CitizenHeader() {
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
                  <Link to="/" className="active">
                    Home
                    <br />
                  </Link>

                </li>
                <li>
                  <Link to="about">About</Link>

                </li>
                <li>
                  <Link to="login">Login</Link>

                </li>
                  <li>
                  <Link to="register">Register</Link>

                </li>
                <li className="dropdown">
                  <Link to="gallery">
                    <span>Gallery</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>

                  <ul>
                    <li>
                      <Link to="gallery">Nature</Link>

                    </li>
                    <li>
                      <Link to="gallery">People</Link>

                    </li>
                    <li>
                      <Link to="gallery">Architecture</Link>

                    </li>
                    <li>
                      <Link to="gallery">Animals</Link>

                    </li>
                    <li>
                      <Link to="gallery">Sports</Link>

                    </li>
                    <li>
                      <Link to="gallery">Travel</Link>

                    </li>
                    <li className="dropdown">
                      <Link to="#">
                        <span>Deep Dropdown</span>{" "}
                        <i className="bi bi-chevron-down toggle-dropdown" />
                      </Link>

                      <ul>
                        <li>
                          <Link to="#">Deep Dropdown 1</Link>

                        </li>
                        <li>
                          <Link to="#">Deep Dropdown 2</Link>

                        </li>
                        <li>
                          <Link to="#">Deep Dropdown 3</Link>

                        </li>
                        <li>
                          <Link to="#">Deep Dropdown 4</Link>

                        </li>
                        <li>
                          <Link to="#">Deep Dropdown 5</Link>

                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="services">Services</Link>

                </li>
                <li>
                  <Link to="contact">Contact</Link>

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
