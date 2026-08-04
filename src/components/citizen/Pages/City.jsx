import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CityService from "../../../Services/CityService";
import { PulseLoader } from "react-spinners";

export default function City() {
  const { categoryId } = useParams();
  const [Cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
  };

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
        <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Cities</h1>
              <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                Discover the cities available on WardPulse. Browse featured cities, view their wards, and
                stay informed about local issues and community updates.
              </p>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container">

            <div className="row">
              {loading ? (
                <div className="col-12 text-center py-5">
                  <PulseLoader color="#ffffffff" loading={loading} cssOverride={override} size={20} />
                </div>
              ) : Cities.length === 0 ? (
                <div className="col-12 text-center py-5 text-muted">
                  No cities found.
                </div>
              ) : (
                Cities.map((city, index) => (
                  <div className="col-md-3" key={city.id || index}>
                    <div className="border rounded text-center p-3 mb-4 shadow-sm">
                      <img
                        src={city.imageUrl}
                        className="img-fluid rounded"
                        alt={city.name}
                        style={{ height: "150px", objectFit: "cover", width: "100%" }}
                      />
                      <h4 className="mt-3">{city.name}</h4>

                      <Link
                        to={`/Ward/${categoryId}/${city.id}`}
                        className="btn btn-primary rounded-pill px-4 mt-2"
                      >
                        View Ward
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* End Contact Form */}
          </div>
        </section>
        {/* /Contact Section */}
      </>






    </>
  )
}