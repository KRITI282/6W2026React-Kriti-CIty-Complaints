import { Link, useParams } from "react-router-dom";
import WardService from "../../../services/WardService";
import { useEffect, useState } from "react";
import City from "./City";
import CityService from "../../../Services/CityService";

export default function Ward() {
  let [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([])
  const [wards, setWards] = useState([])
  const params = useParams()
  useEffect(() => {
    getAllCities()
    getAllWards()
  }, [])
  async function getAllWards() {
    try {
      let res = await WardService.allByCity(params.cityId);
      console.log("Wards:", res);
      setWards(res);
    } catch (error) {
      console.log(error);
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
        <div className="page-title" >
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Wards</h1>
                  <h3 className="mb-0">
                    Explore the city's wards below. Select a ward to register your
                    complaints.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/dashboard">Home</Link>
                </li>
                <li className="current">Ward</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container">

            <div className="row">

              {wards.map((ward, index) => (
                <div className="col-md-3">
                  <div className="border rounded text-center p-3">
                    <h4 className="mt-3">{ward.name}</h4>
                    <h4 className="mt-3">{
                      cities.find((c) => c.id == ward.cityId).name
                    }</h4>
                    <Link
                      to="/form"
                      className="btn btn-primary rounded-pill px-4 mt-2"
                    >
                      Complaint
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