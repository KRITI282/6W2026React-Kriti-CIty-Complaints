import { Link } from "react-router-dom"

export default function Services()
{
    return(
    <>
    
    

  {/* Page Title */}
  <div className="page-title">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Services</h1>
            <p className="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
           <Link to="contact" className="cta-btn">
              Available for Hire
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
          <li className="current">Services</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Services Section */}
  <section id="services" className="services section">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-xl-3 col-md-6 d-flex"
          
      
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-activity icon" />
            </div>
            <h4>
            <Link to="" className="stretched-link">
                Lorem Ipsum
              </Link>
            </h4>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
        
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles icon" />
            </div>
            <h4>
             <Link to="" className="stretched-link">
                Sed ut perspici
              </Link>
            </h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
         
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week icon" />
            </div>
            <h4>
             <Link to="" className="stretched-link">
                Magni Dolores
              </Link>
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
         >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast icon" />
            </div>
            <h4>
             <Link to="" className="stretched-link">
                Nemo Enim
              </Link>
            </h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
  {/* Pricing Section */}
  <section id="pricing" className="pricing section"></section>
</>

       

    )
}