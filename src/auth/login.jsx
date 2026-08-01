import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../Services/UserService";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let [loading, setLoading] = useState(false);
  const nav = useNavigate()

  async function submit(e) {
    try {
      e.preventDefault()
      setLoading(true)
      let payload = {
        email: email,
        password: password
      }
      let res = await UserService.login(payload)
      toast.success("Login Successful")
      setLoading(false)

      if (res.userType == "admin") {
        nav("/admin")
      }
      else {
        nav("/")
      }

    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error.code)

    }
    finally {
      setLoading(false)
    }


  }

  {
    return (
      <>


        {/* Page Title */}
        <div className="page-title" >
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Login</h1>
                  <p className="mb-0">
                    Sign in to your account and manage your city complaints with ease.
                    Access your dashboard, track updates, and stay connected with the
                    latest service requests.
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

            <form className="php-email-form"  onSubmit={submit}>
              <div className="row gy-4">
                <div className="col-md-6 offset-md-3">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        className="form-control"
                                                              placeholder="Enter Your Email" onChange={
                                            (e) => {
                                                setEmail(e.target.value)
                                            }
                                        }
                        required=""
                      />
                    </div>
                    <div className="col-md-12 my-4">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                         value={password} onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                        placeholder="Your Password"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit">Login</button>
                    </div>

                  </div>
                </div>

              </div>
            </form>
            {/* End Contact Form */}
          </div>
        </section>
        {/* /Contact Section */}
      </>




    )
  }
}


// Export for use in other files
export default Login