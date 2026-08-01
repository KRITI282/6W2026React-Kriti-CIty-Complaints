import React, { useEffect, useState } from "react";
import CategoryService from "../../../Services/CategoryService"
import WardService from "../../../Services/WardService";
import CityService from "../../../Services/CityService";
import { data, Link } from "react-router-dom";

export default function Form() {

  const [categories, setCategories] = useState([]);
  const [wards, setWards] = useState([])
  const [Cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.all();
        setCategories(data);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    const fetchWards = async () => {
      try {
        const data = await WardService.all();
        setWards(data);

      } catch (error) {
        console.error("Error fetching Wards:", error);
      }

    }
    const fetchCities = async () => {
      try {
        const data = await CityService.all();
        setCities(data);

      } catch (error) {
        console.error("Error fetching Cities:", error);
      }

    }
    fetchCategories();
    fetchWards();
    fetchCities();
  }, []);
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,

    }));
  };
  return (
    <>


      {/* Page Title */}
      <div className="page-title" >
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Citizen Complaint Form</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                  quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                  dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                  quaerat ipsum dolorem.
                </p>
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
          <div className="info-wrap" >
            <div className="row gy-5">
              <div className="col-lg-4">

              </div>
              {/* End Info Item */}

            </div>
          </div>
          <form

            className="php-email-form"

          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-6">
              <select
    className="form-control"
    name="categoryId"
    value={data.categoryId}
    onChange={handleChange}
>
    <option value="">Select Category</option>

    {categories.map((c) => (
        <option key={c.id} value={c.id}>
            {c.name}
        </option>
    ))}
</select>
</div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </section>
      {/* /Contact Section */}
    </>
  )
};



