import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../Services/UserService";

export default function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      let payload = {
        name: name,
        phone: contact,
        email: email,
        password: password
      };
      await UserService.register(payload);
      toast.success("Registered Successfully");
      setLoading(false);
      nav("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.code || error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container py-5 mt-4 mb-4 border-bottom border-secondary">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Register</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Create an account to report and track civic issues in your city.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="card bg-transparent border-secondary shadow p-4">
              <div className="card-body text-center">
                <h2 className="text-white fw-bold mb-4">Create Account</h2>
              <form onSubmit={submit}>
                <div className="row g-3 text-start">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Contact Number</label>
                    <input
                      type="number"
                      name="contact"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Your Contact"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-white fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control bg-dark text-white border-secondary"
                      name="password"
                      placeholder="Your Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="col-12 mt-4 text-center">
                    <button type="submit" className="btn btn-success w-100 py-2 fw-bold" disabled={loading}>
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>
                  <div className="col-12 mt-3 text-center">
                    <p className="text-secondary">
                      Already have an account? <Link to="/login" className="text-success text-decoration-none fw-bold">Login here</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
