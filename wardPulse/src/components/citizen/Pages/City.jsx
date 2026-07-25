import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CityService from "../../../Services/CityService";

export default function City() {

  const [Cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCities();
  }, [])

  async function getAllCities() {
    setLoading(true)
    const data = await CityService.all();
    setCities(data);
    setLoading(false)
  }

  return (


    <>
      <>


        {/* Page Title */}
        <div className="page-title" >
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Cities</h1>
                  <h3 className="mb-0">
                    Discover the cities available on WardPulse . Browse featured cities, view their wards, and
                    stay informed about local issues and community updates.
                  </h3>
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
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container">

            <div className="row">
              {
                Cities.map((city, index) => (
                  <div className="col-md-3">
                    <div className="border rounded text-center p-3">
                      <img
                        src={city.imageUrl}
                        className="img-fluid rounded"
                        alt=""
                      />
                      <h4 className="mt-3">{city.name}</h4>

                      <Link
                        to={`/ward/${city.id}`}
                        className="btn btn-primary rounded-pill px-4 mt-2"
                      >
                        View Ward
                      </Link>

                    </div>
                  </div>
                ))
              }
            </div>
            {/* End Contact Form */}
          </div>
        </section>
        {/* /Contact Section */}
      </>






    </>
  )
}