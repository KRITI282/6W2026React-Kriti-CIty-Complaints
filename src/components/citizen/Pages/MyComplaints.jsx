import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ComplaintService from "../../../Services/ComplaintService";
import CategoryService from "../../../Services/CategoryService";
import CityService from "../../../Services/CityService";
import WardService from "../../../Services/WardService";
import AuthService from "../../../Services/AuthService";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function MyComplaints() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    if (!AuthService.getIsLogin()) {
      toast.error("Please login to view your complaints.");
      navigate("/login");
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const userId = AuthService.getId();

      const comps = await ComplaintService.all({ userId: userId });
      setComplaints(comps);

      const cats = await CategoryService.all();
      setCategories(cats);

      const cits = await CityService.all();
      setCities(cits);

      const wrds = await WardService.all();
      setWards(wrds);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load complaints");
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (id) => {
    const c = categories.find(cat => cat.id === id);
    return c ? c.name : "N/A";
  };

  const getCityName = (id) => {
    const c = cities.find(city => city.id === id);
    return c ? c.name : "N/A";
  };

  const getWardName = (id) => {
    const w = wards.find(ward => ward.id === id);
    return w ? w.name : "N/A";
  };

  return (
    <>
      {/* Page Title */}
      <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>My Complaints</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Track the status of your lodged complaints, view updates, and see admin remarks and resolution proofs.
            </p>
          </div>
        </div>
      </div>
      {/* End Page Title */}

      <div className="container mb-5">
        <div className="px-4 py-2 rounded">
          <div className="row mb-3">
            <div className="col-md">
              <h2 className="fw-bold text-white">Complaint History</h2>
            </div>
            <div className="col-md text-end">
              <Link to="/category" className="btn btn-outline-light btn-sm">
                + Lodge New Complaint
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                <thead className="text-white border-secondary">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-center">Complaint Image</th>
                    <th scope="col">Admin Remark</th>
                    <th scope="col" className="text-center">Proof</th>
                  </tr>
                </thead>
                <tbody className="border-secondary">
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="text-center py-5">
                        <PulseLoader color="#ffffff" loading={loading} cssOverride={override} size={20} />
                      </td>
                    </tr>
                  ) : complaints.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-5 text-muted">You have not lodged any complaints yet.</td>
                    </tr>
                  ) : (
                    complaints.map((comp, index) => (
                      <tr key={comp.id}>
                        <td>{index + 1}</td>
                        <td>
                          {(() => {
                            const d = new Date(comp.createdAt);
                            const day = String(d.getDate()).padStart(2, '0');
                            const month = String(d.getMonth() + 1).padStart(2, '0');
                            const year = String(d.getFullYear()).slice(-2);
                            return `${day}/${month}/${year}`;
                          })()}
                        </td>
                        <td>{comp.title}</td>
                        <td>{getCategoryName(comp.categoryId)}</td>
                        <td>
                          {getWardName(comp.wardId)}, {getCityName(comp.cityId)}
                        </td>
                        <td>
                          <span className={`badge ${comp.complaintStatus === 'Pending' ? 'bg-warning text-dark' : comp.complaintStatus === 'Resolved' ? 'bg-success' : 'bg-info'}`}>
                            {comp.complaintStatus}
                          </span>
                        </td>
                        <td className="text-center">
                          {comp.complaintImageUrl ? (
                            <a href={comp.complaintImageUrl} target="_blank" rel="noreferrer">
                              <img src={comp.complaintImageUrl} alt="Complaint" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />
                            </a>
                          ) : (
                            <span className="text-muted">-</span>
                          )}
                        </td>
                        <td>{comp.adminRemark || "-"}</td>
                        <td className="text-center">
                          {comp.resolutionProofUrl ? (
                            <a href={comp.resolutionProofUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-info">
                              View Proof
                            </a>
                          ) : (
                            <span className="text-muted">-</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
