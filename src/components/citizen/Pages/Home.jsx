import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTrash,
  FaRoad,
  FaLightbulb,
  FaTint,
  FaWater,
  FaBroom,
} from "react-icons/fa";
import AuthService from "../../../Services/AuthService";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.getIsLogin()) {
      const userType = AuthService.getUserType();
      if (userType === "admin") {
        navigate("/admin");
      }
    }
  }, [navigate]);

  return (
    <div className="home-wrapper text-white bg-dark">
      <style>{`
        .home-wrapper {
          background-color: #050505 !important;
          min-height: 100vh;
        }

        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnomHTvxNPMikPZuFI_fkj9OY1AuIYsJSTFp9lQuVqgw&s=10");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding-top: 80px; /* Account for navbar */
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .text-theme-green {
          color: #22c55e !important;
        }

        .bg-theme-green {
          background-color: #22c55e !important;
        }

        .btn-theme-green {
          background: #22c55e;
          color: white;
          border: 2px solid #22c55e;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-theme-green:hover {
          background: #16a34a;
          border-color: #16a34a;
          transform: translateY(-2px);
          color: white;
        }

        .btn-outline-theme {
          border: 2px solid #22c55e;
          color: white;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
          background: transparent;
        }

        .btn-outline-theme:hover {
          background: #22c55e;
          color: white;
        }

        .home-section {
          padding: 80px 0;
        }

        .section-header {
          margin-bottom: 50px;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .custom-card {
          background: #111;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .custom-card:hover {
          transform: translateY(-10px);
          border-color: #22c55e;
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.15);
        }

        .card-icon {
          font-size: 3rem;
          color: #22c55e;
          margin-bottom: 20px;
        }

        .step-circle {
          width: 60px;
          height: 60px;
          background: #113d2d;
          color: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 20px;
          border: 2px solid #22c55e;
        }

        .stats-box {
          text-align: center;
          padding: 30px 20px;
          background: linear-gradient(145deg, #111, #1a1a1a);
          border-radius: 12px;
          border-bottom: 3px solid #22c55e;
        }

        .stats-box h2 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
        }

        .announcement-card {
          background: #111;
          border-left: 4px solid #22c55e;
          padding: 25px;
          border-radius: 0 12px 12px 0;
          height: 100%;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge rounded-pill bg-dark border border-success text-theme-green px-3 py-2 mb-4 fs-6">
                Smart Municipal Complaint System
              </span>
              <h1 className="hero-title mb-4">
                Your Voice,<br />
                <span className="text-theme-green">Your Ward.</span><br />
                Better City.
              </h1>
              <p className="lead text-secondary mb-5" style={{ maxWidth: "600px" }}>
                WardPulse helps citizens report municipal issues like garbage, potholes, drainage, water leakage, and streetlight failures. Track complaints in real-time and contribute to a cleaner, smarter city.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link to="/category" className="btn-theme-green text-decoration-none text-center">
                  Report Complaint
                </Link>
                <Link to="/my-complaints" className="btn-outline-theme text-decoration-none text-center">
                  Track Complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="home-section bg-dark">
        <div className="container">
          <div className="section-header">
            <h2>Complaint <span className="text-theme-green">Categories</span></h2>
            <p className="text-secondary mt-3">Easily report various civic issues in your locality to help your municipality respond faster.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaTrash className="card-icon" />
                <h4 className="fw-bold mb-3">Garbage Collection</h4>
                <p className="text-secondary mb-0">Report overflowing bins, waste collection delays, and illegal dumping.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaRoad className="card-icon" />
                <h4 className="fw-bold mb-3">Road Damage</h4>
                <p className="text-secondary mb-0">Report potholes, broken roads, and damaged footpaths for quick repair.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaLightbulb className="card-icon" />
                <h4 className="fw-bold mb-3">Street Lights</h4>
                <p className="text-secondary mb-0">Notify authorities about non-functional or damaged street lights.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaTint className="card-icon" />
                <h4 className="fw-bold mb-3">Water Leakage</h4>
                <p className="text-secondary mb-0">Report leaking pipelines and water wastage in your area.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaWater className="card-icon" />
                <h4 className="fw-bold mb-3">Drainage Issues</h4>
                <p className="text-secondary mb-0">Report blocked drains, sewage overflow, and flooding problems.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="custom-card">
                <FaBroom className="card-icon" />
                <h4 className="fw-bold mb-3">Sanitation</h4>
                <p className="text-secondary mb-0">Help improve public hygiene by reporting sanitation-related issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="home-section" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container">
          <div className="section-header">
            <h2>How <span className="text-theme-green">WardPulse</span> Works</h2>
            <p className="text-secondary mt-3">Follow these simple steps to submit and track your complaint.</p>
          </div>
          <div className="row g-4 text-center">
            <div className="col-lg-3 col-md-6">
              <div className="step-circle">1</div>
              <h4 className="fw-bold mb-2">Register</h4>
              <p className="text-secondary">Create your account securely.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="step-circle">2</div>
              <h4 className="fw-bold mb-2">Submit</h4>
              <p className="text-secondary">Select category, ward, and details.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="step-circle">3</div>
              <h4 className="fw-bold mb-2">Review</h4>
              <p className="text-secondary">Officials verify and assign the task.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="step-circle">4</div>
              <h4 className="fw-bold mb-2">Resolve</h4>
              <p className="text-secondary">Track the complaint until resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="home-section bg-dark">
        <div className="container">
          <div className="section-header">
            <h2>WardPulse <span className="text-theme-green">Statistics</span></h2>
            <p className="text-secondary mt-3">Building transparent, responsive, and citizen-friendly municipal services.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-box">
                <h2>1200+</h2>
                <h5 className="text-theme-green mt-2">Complaints</h5>
                <p className="text-secondary mb-0 small">Registered successfully</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-box">
                <h2>980+</h2>
                <h5 className="text-theme-green mt-2">Resolved</h5>
                <p className="text-secondary mb-0 small">Fixed by municipal staff</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-box">
                <h2>32</h2>
                <h5 className="text-theme-green mt-2">Wards</h5>
                <p className="text-secondary mb-0 small">Serving across the city</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-box">
                <h2>95%</h2>
                <h5 className="text-theme-green mt-2">Satisfaction</h5>
                <p className="text-secondary mb-0 small">Positive feedback from users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ANNOUNCEMENTS SECTION */}
      <section className="home-section" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container">
          <div className="section-header">
            <h2>Latest <span className="text-theme-green">Announcements</span></h2>
            <p className="text-secondary mt-3">Stay informed about municipal updates and maintenance schedules.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="announcement-card">
                <span className="badge bg-secondary mb-3">15 July 2026</span>
                <h5 className="fw-bold">Water Supply Maintenance</h5>
                <p className="text-secondary mb-0">Water supply will remain unavailable from 9:00 AM to 2:00 PM due to scheduled maintenance.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="announcement-card">
                <span className="badge bg-secondary mb-3">18 July 2026</span>
                <h5 className="fw-bold">Road Repair Work</h5>
                <p className="text-secondary mb-0">Road repair work will begin in Ward 12 from Monday. Please use alternate routes.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="announcement-card">
                <span className="badge bg-secondary mb-3">20 July 2026</span>
                <h5 className="fw-bold">Clean City Campaign</h5>
                <p className="text-secondary mb-0">Join the city-wide cleanliness drive and help build a cleaner environment together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}