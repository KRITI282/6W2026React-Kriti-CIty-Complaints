import React from "react";
import {
  FaArrowRight,
  FaTrash,
  FaRoad,
  FaLightbulb,
  FaTint,
  FaWater,
  FaBroom,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins',sans-serif;
      }

      body{
        background:#050505;
        color:white;
      }

      .hero{
        min-height:100vh;
        display:flex;
        align-items:center;
        background:
        linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.85)),
       url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnomHTvxNPMikPZuFI_fkj9OY1AuIYsJSTFp9lQuVqgw&s=10");
        background-size:cover;
        background-position:center;
      }

      .hero h1{
        font-size:65px;
        font-weight:700;
      }

      .hero span{
        color:#22c55e;
      }

      .hero p{
        margin-top:20px;
        color:#d4d4d4;
        font-size:18px;
        line-height:1.8;
      }

      .btn-green{
        background:#22c55e;
        color:white;
        border:none;
        padding:15px 35px;
        border-radius:10px;
        transition:.3s;
        font-weight:600;
      }

      .btn-green:hover{
        background:#16a34a;
        transform:translateY(-5px);
      }

      .btn-outline-green{
        border:2px solid #22c55e;
        color:white;
        padding:15px 35px;
        border-radius:10px;
        margin-left:15px;
        transition:.3s;
        background:transparent;
      }

      .btn-outline-green:hover{
        background:#22c55e;
      }

      .section{
        padding:90px 0;
      }

      .section-title{
        text-align:center;
        margin-bottom:60px;
      }

      .section-title h2{
        font-size:45px;
        font-weight:700;
      }

      .section-title span{
        color:#22c55e;
      }

      .section-title p{
        color:#bfbfbf;
        max-width:700px;
        margin:auto;
        margin-top:15px;
      }

      .category-card{
        background:#111;
        border-radius:15px;
        padding:35px;
        text-align:center;
        transition:.4s;
        border:1px solid rgba(255,255,255,.08);
        height:100%;
      }

      .category-card:hover{
        transform:translateY(-10px);
        border-color:#22c55e;
        box-shadow:0 15px 30px rgba(34,197,94,.25);
      }

      .category-icon{
        font-size:55px;
        color:#22c55e;
        margin-bottom:20px;
      }

      .category-card h4{
        margin-bottom:15px;
      }

      .category-card p{
        color:#c7c7c7;
      }

      @media(max-width:768px){

        .hero{
          text-align:center;
        }

        .hero h1{
          font-size:40px;
        }

        .btn-outline-green{
          margin-left:0;
          margin-top:15px;
        }

      }

      `}</style>

      {/* HERO */}

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span
                style={{
                  background: "#113d2d",
                  padding: "8px 18px",
                  borderRadius: "30px",
                  color: "#22c55e",
                }}
              >
                Smart Municipal Complaint System
              </span>

              <h1 className="mt-4">
                Your Voice,
                <br />
                <span>Your Ward.</span>
                <br />
                Better City.
              </h1>

              <p>
                WardPulse helps citizens report municipal issues like garbage,
                potholes, drainage, water leakage and streetlight failures.
                Track complaints in real time and contribute to a cleaner,
                smarter city.
              </p>

              <div className="mt-5">

                <button className="btn-green">
                  <Link to='/form'>
                  Report Complaint
                  </Link>
                </button>

                <button className="btn-outline-green">
                  Track Complaint
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Complaint <span>Categories</span>
            </h2>

            <p>
              Easily report various civic issues in your locality. Choose the
              appropriate category and help your municipality respond faster.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="category-card">

                <FaTrash className="category-icon" />

                <h4>Garbage Collection</h4>

                <p>
                  Report overflowing bins, waste collection delays and illegal
                  dumping.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="category-card">

                <FaRoad className="category-icon" />

                <h4>Road Damage</h4>

                <p>
                  Report potholes, broken roads and damaged footpaths for quick
                  repair.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="category-card">

                <FaLightbulb className="category-icon" />

                <h4>Street Lights</h4>

                <p>
                  Notify authorities about non-functional or damaged street
                  lights.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="category-card">

                <FaTint className="category-icon" />

                <h4>Water Leakage</h4>

                <p>
                  Report leaking pipelines and water wastage in your area.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="category-card">

                <FaWater className="category-icon" />

                <h4>Drainage Issues</h4>

                <p>
                  Report blocked drains, sewage overflow and flooding problems.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="category-card">

                <FaBroom className="category-icon" />

                <h4>Sanitation</h4>

                <p>
                  Help improve public hygiene by reporting sanitation-related
                  issues.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
   
  <>
    {/* ================= HERO SECTION ================= */}

   
     <section className="how-section">

      <div className="container">

        <div className="section-title">

          <h2>
            How <span>WardPulse</span> Works
          </h2>

          <p>
            Reporting civic issues has never been easier. Follow these simple
            steps to submit and track your complaint.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Register</h4>
              <p>Create your account securely.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Submit Complaint</h4>
              <p>Select category, ward and upload complaint details.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Admin Review</h4>
              <p>Municipal officials verify and assign your complaint.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Resolved</h4>
              <p>Track the complaint until it is successfully resolved.</p>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* ================= STATISTICS ================= */}

    <section className="stats-section">

      <div className="container">

        <div className="section-title">

          <h2>
            WardPulse <span>Statistics</span>
          </h2>

          <p>
            Building transparent, responsive, and citizen-friendly municipal
            services.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-card">
              <h1>1200+</h1>
              <h5>Total Complaints</h5>
              <p>Complaints registered successfully.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card">
              <h1>980+</h1>
              <h5>Resolved</h5>
              <p>Issues resolved by municipal staff.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card">
              <h1>32</h1>
              <h5>Municipal Wards</h5>
              <p>Serving wards across the city.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card">
              <h1>95%</h1>
              <h5>Citizen Satisfaction</h5>
              <p>Positive feedback from users.</p>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* ================= WHY CHOOSE WARDPULSE ================= */}

<section className="why-section">

  <div className="container">

    <div className="section-title">

      <h2>
        Why Choose <span>WardPulse?</span>
      </h2>

      <p>
        WardPulse simplifies communication between citizens and municipal
        authorities by making complaint reporting transparent, efficient,
        and easy to use.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            ⚡
          </div>

          <h4>Quick Complaint Registration</h4>

          <p>
            Submit complaints in just a few clicks without lengthy paperwork.
          </p>

        </div>

      </div>

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            📍
          </div>

          <h4>Ward-wise Tracking</h4>

          <p>
            Easily monitor complaints based on wards for faster resolution.
          </p>

        </div>

      </div>

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            📢
          </div>

          <h4>Real-Time Updates</h4>

          <p>
            Receive status notifications whenever your complaint progresses.
          </p>

        </div>

      </div>

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            🔒
          </div>

          <h4>Secure Platform</h4>

          <p>
            Your personal information and complaint details remain protected.
          </p>

        </div>

      </div>

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            🏛️
          </div>

          <h4>Transparent Governance</h4>

          <p>
            Citizens can monitor complaint progress from submission to completion.
          </p>

        </div>

      </div>

      <div className="col-lg-4 col-md-6">

        <div className="feature-card">

          <div className="feature-icon">
            🌍
          </div>

          <h4>Smart City Initiative</h4>

          <p>
            Helping municipalities build cleaner, safer, and smarter communities.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= MUNICIPAL SERVICES ================= */}

<section className="services-section">

  <div className="container">

    <div className="section-title">

      <h2>
        Municipal <span>Services</span>
      </h2>

      <p>
        Explore the key civic services supported through WardPulse.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🗑️ Garbage Collection</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🚧 Road Maintenance</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>💡 Street Lighting</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>💧 Water Supply</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🚰 Drainage System</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🌳 Public Parks</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🚦 Traffic Signals</h4>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="service-card">
          <h4>🏢 Municipal Office</h4>
        </div>
      </div>

    </div>

  </div>

</section>{/* ================= LATEST ANNOUNCEMENTS ================= */}

<section className="announcement-section">

  <div className="container">

    <div className="section-title">

      <h2>
        Latest <span>Announcements</span>
      </h2>

      <p>
        Stay informed about municipal updates, maintenance schedules,
        and important public notices.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-4">

        <div className="announcement-card">

          <span className="announcement-date">
            15 July 2026
          </span>

          <h4>Water Supply Maintenance</h4>

          <p>
            Water supply will remain unavailable from 9:00 AM to 2:00 PM
            due to scheduled maintenance.
          </p>

         
        </div>

      </div>

      <div className="col-lg-4">

        <div className="announcement-card">

          <span className="announcement-date">
            18 July 2026
          </span>

          <h4>Road Repair Work</h4>

          <p>
            Road repair work will begin in Ward 12 from Monday.
            Please use alternate routes.
          </p>

          

        </div>

      </div>

      <div className="col-lg-4">

        <div className="announcement-card">

          <span className="announcement-date">
            20 July 2026
          </span>

          <h4>Clean City Campaign</h4>

          <p>
            Join the city-wide cleanliness drive and help build
            a cleaner environment.
          </p>

          

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= TESTIMONIALS ================= */}

<section className="testimonial-section">

  <div className="container">

    <div className="section-title">

      <h2>
        Citizen <span>Testimonials</span>
      </h2>

      <p>
        Hear what citizens say about WardPulse.
      </p>

    </div>

    <div className="row g-4">

      <div className="col-lg-4">

        <div className="testimonial-card">

          <h5>⭐⭐⭐⭐⭐</h5>

          <p>
            "Reporting a garbage issue was quick and easy.
            My complaint was resolved within two days."
          </p>

          <h6>- Rahul Sharma</h6>

        </div>

      </div>

      <div className="col-lg-4">

        <div className="testimonial-card">

          <h5>⭐⭐⭐⭐⭐</h5>

          <p>
            "The complaint tracking feature keeps me informed
            throughout the entire process."
          </p>

          <h6>- Priya Singh</h6>

        </div>

      </div>

      <div className="col-lg-4">

        <div className="testimonial-card">

          <h5>⭐⭐⭐⭐⭐</h5>

          <p>
            "A very useful platform that improves communication
            between citizens and municipal authorities."
          </p>

          <h6>- Aman Verma</h6>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CALL TO ACTION ================= */}







  </>
);
    </>
  );
}