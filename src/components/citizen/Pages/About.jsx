import { Link } from "react-router-dom";

export default function About() {
  return (


    <>
      {/* Page Title */}
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About WardPulse</h1>
                <h2>Connecting Citizens with Municipal Services</h2>
                <p className="mb-0">
                  WardPulse is a smart municipal complaint management platform designed to simplify the way citizens report and track civic issues. Whether it's potholes, garbage collection, water leakage, damaged roads, or faulty streetlights, WardPulse enables residents to submit complaints quickly and monitor their progress in real time.
                  <br />

                </p>
                <span>

                  🎯 Our Mission
                  <br />
                  To empower citizens by providing a transparent and efficient platform for reporting civic issues while helping municipalities deliver faster and more effective public services.
                </span>
                <span>

                  👁️ Our Vision
                  <br />
                  To build smart, connected cities where every citizen's voice contributes to better governance and improved quality of life.
                </span>
                <Link to="/form" className="cta-btn">
                  register your complaint
                  <br />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}


      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" >
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 content">
              <h2>
                Empowering Citizens Through Smart Civic Services.
              </h2>
              <h5 className="fst-italic py-3">
                WardPulse is a digital civic engagement platform designed to simplify communication between citizens and municipal authorities. Report civic issues, track complaint status, receive important announcements, and contribute to building a cleaner, safer, and smarter community—all in one place.
              </h5>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Platform:</strong> <span>WardPulse</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Coverage:</strong> <span>Ward Wise Services</span>
                    </li>

                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Easy Access:</strong>{" "}
                      <span>24/7</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Cities covered:</strong>{" "}
                      <span>Multiple</span>
                    </li>

                  </ul>
                </div>
              </div>
              <p className="py-3">
                WardPulse enables residents to report issues such as damaged roads, water supply problems, sanitation concerns, drainage blockages, streetlight failures, and waste management issues. Complaints are categorized and routed to the appropriate municipal department, ensuring a streamlined and transparent resolution process.
              </p>
              <p className="m-0">
                The platform also keeps citizens informed through municipal announcements, service updates, and public notices. With a secure and user-friendly interface, WardPulse promotes transparency, accountability, and active citizen participation while helping local authorities manage civic services more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title">
          <h2>Testimonials</h2>
          <p>What they are saying</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                 
                  <div className="col md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="/assets/img/testimonials/testimonials-3.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Kriti</h5>
                        <p className="card-text">
                          "Being able to upload photos with my complaint helped explain the issue clearly. The tracking feature gives confidence that the complaint has been received."
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="/assets/img/testimonials/testimonials-3.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Kriti</h5>
                        <p className="card-text">
                          "Being able to upload photos with my complaint helped explain the issue clearly. The tracking feature gives confidence that the complaint has been received."
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="/assets/img/testimonials/testimonials-3.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Kriti</h5>
                        <p className="card-text">
"I liked receiving updates on my complaint status. The process feels transparent and keeps citizens informed every step of the way."
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore eram
                    velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="/assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint
                    quorum nulla quem veniam duis minim tempor labore quem eram duis
                    noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="/assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore illum
                    veniam.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                    veniam tempor noster veniam enim culpa labore duis sunt culpa
                    nulla illum cillum fugiat legam esse veniam culpa fore nisi
                    cillum quid.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>

      {/* /Testimonials Section */}

    </>
  )
}
