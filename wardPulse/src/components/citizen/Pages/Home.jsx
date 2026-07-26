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
    </>
  );
}