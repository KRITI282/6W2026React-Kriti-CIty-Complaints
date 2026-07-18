import { Link } from "react-router-dom";

export default function Footer()
{
    return(
   
    
    <>
  <footer id="footer" className="footer">
    <div className="container">
      <div className="copyright text-center ">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">PhotoFolio</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
      <div className="social-links d-flex justify-content-center">
       <Link to ="">
          <i className="bi bi-twitter-x" />
        </Link>
       <Link to ="">
          <i className="bi bi-facebook" />
        </Link>
       <Link to ="">
          <i className="bi bi-instagram" />
        </Link>
       <Link to ="">
          <i className="bi bi-linkedin" />
        </Link>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by<Link to ="https://bootstrapmade.com/">BootstrapMade</Link>{" "}
        Distributed by<Link to ="https://themewagon.com">ThemeWagon</Link>
      </div>
    </div>
  </footer>
  {/* Scroll Top */}
  <Link
    to ="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </Link>
</>

    
    
        

    )
}