import { Link } from "react-router-dom";
import CategoryService from "../../../Services/CategoryService";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function Category() {
  const [categories, setCategories] = useState([]);

  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllcategories();
  }, [])

  async function getAllcategories() {
    setLoading(true)
    const data = await CategoryService.all();
    setCategories(data);
    setLoading(false)
  }
  return (
    <>
      {/* Page Title */}
      <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
        <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
                <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Categories</h1>
                <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                    Your voice matters. Browse the available complaint categories and submit issues related to sanitation, roads, street lighting, water supply, drainage, public safety, and more. Together, we can build a cleaner, safer, and better community.
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
            ) : categories.length === 0 ? (
                <div className="col-12 text-center py-5 text-muted">
                    No categories found.
                </div>
            ) : (
              categories.map((category, index) => (
                <div className="col-md-3" key={category.id || index}>
                  <div className="border rounded text-center p-3 mb-4 shadow-sm">
                    <img
                      src={category.imageUrl}
                      className="img-fluid rounded"
                      alt={category.name}
                      style={{ height: "150px", objectFit: "cover", width: "100%" }}
                    />
                    <h4 className="mt-3">{category.name}</h4>

                    <Link
                      to={`/City/${category.id}`}
                      className="btn btn-primary rounded-pill px-4 mt-2"
                    >
                      View City
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
  )
}