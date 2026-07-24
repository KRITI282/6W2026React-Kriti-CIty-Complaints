import React, { useEffect, useState } from "react";
import CategoryService from "../../../Services/CategoryService"
import WardService from "../../../Services/WardService";
import CityService from "../../../Services/CityService";

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

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white text-center py-3">
          <h2>Citizen Complaint Form</h2>
          <p className="mb-0">
            Please fill in the details below to register your complaint.
          </p>
        </div>

        <div className="card-body p-4">
          <form>
            {/* Complaint Information */}
            <h4 className="mb-3 text-primary">Complaint Information</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Complaint Category</label>
                <select className="form-select">
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>


            </div>

            <div className="mb-3">
              <label className="form-label">Complaint Description</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Describe your complaint..."
              ></textarea>
            </div>

            <div className="row">


              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Issue</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <hr />

            {/* Location */}
            <h4 className="mb-3 text-primary">Location Details</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Ward Number</label>
                <select className="form-select">
                  <option value="">Select Ward No</option>

                  {wards.map((ward) => (
                    <option key={ward.id} value={ward.id}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">City</label>

                <select className="form-select">
                  <option value="">Select City</option>

                  { Cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Area / Locality</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Area"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Street Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Street Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nearby Landmark"
                />
              </div>
            </div>

            <hr />

            {/* Upload */}
            <h4 className="mb-3 text-primary">Supporting Evidence</h4>

            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input type="file" className="form-control" />
            </div>

            <hr />

            {/* Citizen Details */}
            <h4 className="mb-3 text-primary">Citizen Details</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                />
              </div>
            </div>

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Keep my identity confidential.
              </label>
            </div>

            <div className="text-center">
              <button
                type="reset"
                className="btn btn-outline-secondary me-3 px-4"
              >
                Reset
              </button>

              <button
                type="submit"
                className="btn btn-primary px-4"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};



