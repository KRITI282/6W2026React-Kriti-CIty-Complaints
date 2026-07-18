import { Link } from "react-router-dom";

export default function Home()
{
    return(
    
<>
 <main className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-6 text-center"

                >
                  <h2>
                    <span></span>
                    <span className="underlight">Municipal Complaint Management</span> 
                    <span>Your Voice. Your Ward. Your Change.</span>
                  </h2>
                  <p>
                    WardPulse is a digital platform that enables citizens to report civic 
                    issues such as potholes, garbage, water leakage, streetlight failures, and sanitation problems. Track your complaints in real time and help build a cleaner, safer, and smarter city.
                  </p>
                  <Link to="contact" className="btn-get-started">
                  🟢 Report Complaint
                    <br />
                  </Link>

                </div>
              </div>
            </div>
          </section>
          {/* /Hero Section */}
        </main>
  <section id="gallery" className="gallery section">
    <div className="container-fluid" >
      <div className="row gy-4 justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala1.jpg"
                title="Gallery 1"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala3.jpg"
                title="Gallery 3"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala4.jpg"
                title="Gallery 4"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala5.jpg"
                title="Gallery 5"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="/assets/img/gallery/kapurthala6.jpg"
                title="Gallery 6"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala7.jpg"
                title="Gallery 7"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/kapurthala8.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             <Link
                to ="assets/img/gallery/kapurthala8.jpg"
                title="Gallery 8"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </Link>
             <Link to ="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
      </div>
    </div>
  </section>
  {/* /Gallery Section */}
</>

       

    )
}