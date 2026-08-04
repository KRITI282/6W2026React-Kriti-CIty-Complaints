import { Link } from "react-router-dom";

export default function Footer() {
  return (


    <>
      <footer id="footer" className="footer  bg-transparent border-top border-secondary">
        <div className="container">
          <div className="copyright text-center text-white">
            <p className="mb-1">
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">WardPulse Admin Panel</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>

          <div className="credits text-center text-secondary mt-2">
            Designed by <span className="text-white fw-bold">Kriti</span>
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <Link
        to="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
    </>





  )
}