import { Link } from "react-router-dom";
import CategoryService from "../../../Services/CategoryService";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);
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
      <div className="page-title" >
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Category</h1>
                <h3 className="mb-0">
                  Your voice matters. Browse the available complaint categories and submit issues related to sanitation, roads, street lighting, water supply, drainage, public safety, and more. Together, we can build a cleaner, safer, and better community.
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
              <li className="current">
                <Link to='/category'>Category</Link>
                </li>
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
              categories.map((category, index) => (
                <div className="col-md-3">
                  <div className="border rounded text-center p-3">
                    <img
                      src={category.imageUrl}
                      className="img-fluid rounded"
                      alt=""
                    />
                    <h4 className="mt-3">{category.name}</h4>

                    <Link
                      to="/city"
                      className="btn btn-primary rounded-pill px-4 mt-2"
                    >
                      View City
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
  )
}