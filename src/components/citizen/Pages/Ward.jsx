import { Link, useParams } from "react-router-dom";
import WardService from "../../../Services/WardService";
import { useEffect, useState } from "react";
import CityService from "../../../Services/CityService";
import { PulseLoader } from "react-spinners";

export default function Ward() {
  let [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);
  const params = useParams();

  const override = {
    display: "block",
    margin: "0 auto",
  };
  useEffect(() => {
    getAllCities()
    getAllWards()
  }, [])
  async function getAllWards() {
    try {
      setLoading(true);
      let res = await WardService.allByCity(params.cityId);
      console.log("Wards:", res);
      setWards(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function getAllCities() {
    try {
      let res = await CityService.all();
      console.log("Cities:", res);
      setCities(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

      <>


        {/* Page Title */}
        <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Wards</h1>
              <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                Explore the city's wards below. Select a ward to register your complaints.
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
              ) : wards.length === 0 ? (
                <div className="col-12 text-center py-5 text-muted">
                  No wards found for this city.
                </div>
              ) : (
                wards.map((ward, index) => {
                  const cityObj = cities.find((c) => c.id === ward.cityId);
                  return (
                    <div className="col-md-3" key={ward.id || index}>
                      <div className="border rounded text-center p-3 mb-4 shadow-sm">
                        <div className="mb-3">
                          <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: "2rem" }}></i>
                        </div>
                        <h4 className="mt-3 text-white">{ward.name}</h4>
                        <h6 className="text-white mb-4">{cityObj ? cityObj.name : "Loading..."}</h6>
                        <Link
                          to={`/form/${params.categoryId}/${params.cityId}/${ward.id}`}
                          className="btn btn-primary rounded-pill px-4 mt-2"
                        >
                          Complaint
                        </Link>
                      </div>
                    </div>
                  );
                })
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