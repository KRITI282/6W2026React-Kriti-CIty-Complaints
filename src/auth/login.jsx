import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../Services/UserService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      let payload = {
        email: email,
        password: password
      };
      let res = await UserService.login(payload);
      toast.success("Login Successful");
      setLoading(false);

      if (res.userType === "admin") {
        nav("/admin");
      } else {
        nav("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.code || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container py-5 mt-4 mb-4 border-bottom border-secondary">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Login</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Sign in to manage your city complaints and track updates.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-transparent border-secondary shadow p-4">
              <div className="card-body text-center">
                <h2 className="text-white fw-bold mb-4">Welcome Back</h2>
              <form onSubmit={submit}>
                <div className="mb-4 text-start">
                  <label className="form-label text-white fw-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label text-white fw-semibold">Password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white border-secondary"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    required
                  />
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-success w-100 py-2 fw-bold" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-secondary">
                    Don't have an account? <Link to="/register" className="text-success text-decoration-none fw-bold">Register here</Link>
                  </p>
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

export default Login;