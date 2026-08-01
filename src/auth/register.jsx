import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

 export default function Register() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let [loading, setLoading] = useState(false);
  const nav = useNavigate()

  async function submit(e) {
    try {
      e.preventDefault()
      setLoading(true)
      let payload = {
        name: name,
        contact: contact,
        email: email,
        password: password

      }
      let res = await UserService.register(payload)
      toast.success("Register Successfully")
      setLoading(false)
      nav("/login")
    }
    catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error)

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
                  <h1>Register</h1>
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

                {/* End Info Item */}

                {/* End Info Item */}

                {/* End Info Item */}
              </div>
            </div>
            <form
              onSubmit={submit}
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
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    name="contact"
                    className="form-control"
                    placeholder="Your Contact"
                    required=""
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value)
                    }}
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    required=""
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">
                    {
                      loading ? " Saving .." : "Register"
                    }
                  </button>
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

