import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComplaintService from "../../Services/ComplaintService";
import UserService from "../../Services/UserService";
import { PulseLoader } from "react-spinners";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalComplaints: 0,
    pendingComplaints: 0,
    resolvedComplaints: 0,
  });
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      setLoading(true);
      const users = await UserService.all({ userType: 'user' });
      const complaints = await ComplaintService.all();

      const pending = complaints.filter(c => c.complaintStatus === 'Pending').length;
      const resolved = complaints.filter(c => c.complaintStatus === 'Resolved').length;

      setStats({
        totalUsers: users.length,
        totalComplaints: complaints.length,
        pendingComplaints: pending,
        resolvedComplaints: resolved
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Admin Dashboard</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Welcome to the control center. Monitor overall system statistics and navigate to specific management modules.
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        {loading ? (
          <div className="text-center py-5">
            <PulseLoader color="#ffffff" loading={loading} cssOverride={override} size={20} />
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="card bg-transparent border-secondary text-center h-100 shadow-sm p-4">
                <i className="bi bi-people text-white mb-3" style={{ fontSize: "3rem" }}></i>
                <h2 className="fw-bold text-white display-5">{stats.totalUsers}</h2>
                <p className="text-secondary mb-0 fs-5">Total Citizens</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-secondary text-center h-100 shadow-sm p-4">
                <i className="bi bi-file-earmark-text text-white mb-3" style={{ fontSize: "3rem" }}></i>
                <h2 className="fw-bold text-white display-5">{stats.totalComplaints}</h2>
                <p className="text-secondary mb-0 fs-5">Total Complaints</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-secondary text-center h-100 shadow-sm p-4">
                <i className="bi bi-clock-history text-warning mb-3" style={{ fontSize: "3rem" }}></i>
                <h2 className="fw-bold text-warning display-5">{stats.pendingComplaints}</h2>
                <p className="text-secondary mb-0 fs-5">Pending</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-secondary text-center h-100 shadow-sm p-4">
                <i className="bi bi-check-circle text-success mb-3" style={{ fontSize: "3rem" }}></i>
                <h2 className="fw-bold text-success display-5">{stats.resolvedComplaints}</h2>
                <p className="text-secondary mb-0 fs-5">Resolved</p>
              </div>
            </div>

            <div className="col-12 mt-5 text-center">
              <hr className="border-secondary mb-5" />
              <h3 className="text-white mb-4">Quick Links</h3>
              <Link to="/admin/complaints" className="btn btn-outline-light mx-2 px-4 py-2 mb-2">
                <i className="bi bi-gear me-2"></i>Manage Complaints
              </Link>
              <Link to="/admin/users" className="btn btn-outline-light mx-2 px-4 py-2 mb-2">
                <i className="bi bi-person-gear me-2"></i>Manage Users
              </Link>
              <Link to="/admin/categories" className="btn btn-outline-light mx-2 px-4 py-2 mb-2">
                <i className="bi bi-tags me-2"></i>Manage Categories
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
