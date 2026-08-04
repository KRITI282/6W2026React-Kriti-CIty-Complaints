import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CategoryService from "../../../Services/CategoryService";
import WardService from "../../../Services/WardService";
import CityService from "../../../Services/CityService";
import ComplaintService from "../../../Services/ComplaintService";
import AuthService from "../../../Services/AuthService";
import CloudinaryService from "../../../Services/CloudinaryService";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

export default function Form() {
  const { categoryId, cityId, wardId } = useParams();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [cityName, setCityName] = useState("");
  const [wardName, setWardName] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const category = await CategoryService.single(categoryId);
      if (category) setCategoryName(category.name);

      const city = await CityService.single(cityId);
      if (city) setCityName(city.name);

      const ward = await WardService.single(wardId);
      if (ward) setWardName(ward.name);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load details");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!AuthService.getIsLogin()) {
      toast.error("Please login to submit a complaint.");
      navigate("/login");
      return;
    }

    try {
      setSaving(true);
      let imageUrl = "";
      if (image) {
        imageUrl = await CloudinaryService.upload(image);
      } else {
        toast.error("Please provide an image for the complaint.");
        setSaving(false);
        return;
      }

      let payload = {
        userId: AuthService.getId(),
        categoryId: categoryId,
        cityId: cityId,
        wardId: wardId,
        title: title,
        description: description,
        complaintImageUrl: imageUrl,
      };

      await ComplaintService.add(payload);
      toast.success("Complaint submitted successfully!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit complaint");
    } finally {
      setSaving(false);
    }
  };

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      {/* Page Title */}
      <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Lodge Complaint</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Please provide the details of your complaint below. Attach a clear photo so authorities can take prompt action.
            </p>
          </div>
        </div>
      </div>
      {/* End Page Title */}

      <section id="contact" className="contact section mb-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <PulseLoader color="#000000" loading={loading} cssOverride={override} size={20} />
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form onSubmit={handleSubmit} className="p-4 border border-secondary rounded shadow-sm bg-transparent">
                  <div className="row gy-4">

                    <div className="col-md-4">
                      <label className="form-label text-white fw-bold">Category</label>
                      <input type="text" className="form-control shadow-none border border-secondary bg-transparent text-secondary" value={categoryName} readOnly />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label text-white fw-bold">City</label>
                      <input type="text" className="form-control shadow-none border border-secondary bg-transparent text-secondary" value={cityName} readOnly />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label text-white fw-bold">Ward</label>
                      <input type="text" className="form-control shadow-none border border-secondary bg-transparent text-secondary" value={wardName} readOnly />
                    </div>

                    <div className="col-md-12 mt-4">
                      <label className="form-label text-white fw-bold">Complaint Title</label>
                      <input
                        type="text"
                        className="form-control shadow-none border border-secondary bg-transparent text-white"
                        placeholder="e.g. Broken street light near main road"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="form-label text-white fw-bold">Description</label>
                      <textarea
                        className="form-control shadow-none border border-secondary bg-transparent text-white"
                        rows={5}
                        placeholder="Provide detailed information about the issue..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="form-label text-white fw-bold">Upload Evidence (Photo)</label>
                      <input
                        type="file"
                        className="form-control shadow-none border border-secondary bg-transparent text-white"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                      />
                    </div>

                    <div className="col-md-12 text-center mt-4 border-top border-secondary pt-4">
                      <button type="submit" className="btn btn-outline-light px-5 py-2" disabled={saving}>
                        {saving ? "Submitting..." : "Submit Complaint"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
