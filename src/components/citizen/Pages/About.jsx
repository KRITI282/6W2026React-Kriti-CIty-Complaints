import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Title Banner */}
      <div className="container py-5 mt-4 border-bottom border-secondary">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>About WardPulse</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Connecting Citizens with Municipal Services for a cleaner, smarter, and more responsive city.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5 my-3">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5 text-center text-lg-start">
            <img src="/assets/img/main.jpg" alt="About WardPulse" className="img-fluid rounded shadow-lg border border-secondary" style={{ maxHeight: "400px", objectFit: "cover" }} />
          </div>
          <div className="col-lg-7 px-lg-5">
            <h2 className="fw-bold text-white mb-4">
              Empowering Citizens Through <span className="text-success">Smart Civic Services.</span>
            </h2>
            <p className="text-secondary fs-5 mb-4" style={{ lineHeight: "1.8" }}>
              WardPulse is a digital civic engagement platform designed to simplify communication between citizens and municipal authorities. 
              Report civic issues, track complaint status, and contribute to building a cleaner, safer, and smarter community—all in one centralized portal.
            </p>
            
            <div className="row mt-5">
              <div className="col-md-6 mb-4">
                <div className="card bg-transparent border-secondary h-100 p-4 shadow-sm text-center">
                  <i className="bi bi-bullseye text-success mb-3" style={{ fontSize: "2rem" }}></i>
                  <h4 className="text-white">Our Mission</h4>
                  <p className="text-secondary mb-0">To empower citizens by providing a transparent and efficient platform for reporting civic issues and helping municipalities deliver faster services.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card bg-transparent border-secondary h-100 p-4 shadow-sm text-center">
                  <i className="bi bi-eye text-success mb-3" style={{ fontSize: "2rem" }}></i>
                  <h4 className="text-white">Our Vision</h4>
                  <p className="text-secondary mb-0">To build smart, connected cities where every citizen's voice contributes to better governance and improved quality of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5 pt-4 text-center">
          <div className="col-lg-8">
            <h3 className="text-white mb-4">Ready to make a difference in your ward?</h3>
            <Link to="/category" className="btn btn-success px-5 py-3 fw-bold fs-5 shadow-lg" style={{ borderRadius: "30px" }}>
              Register Your Complaint Now <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
