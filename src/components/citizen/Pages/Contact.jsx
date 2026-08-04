import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ContactService from "../../../Services/ContactService";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name,
        email,
        phone,
        subject,
        message
      };
      await ContactService.add(payload);
      toast.success("Thank you for reaching out! We will get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container py-5 mt-4 mb-4 border-bottom border-secondary">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Contact Us</h1>
            <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
              Have questions or need assistance? Reach out to the municipal support team.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

          <div className="row gy-5">
            <div className="col-md-4">
              <div className="card bg-transparent border-secondary text-center h-100 p-4 shadow-sm">
                <i className="bi bi-geo-alt text-success mb-3" style={{ fontSize: "2.5rem" }} />
                <h4 className="text-white">Location</h4>
                <p className="text-secondary mb-0">WardPulse HQ, City Center<br />New Delhi, India</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border-secondary text-center h-100 p-4 shadow-sm">
                <i className="bi bi-telephone text-success mb-3" style={{ fontSize: "2.5rem" }} />
                <h4 className="text-white">Call Us</h4>
                <p className="text-secondary mb-0">+91 98765 43210<br />Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border-secondary text-center h-100 p-4 shadow-sm">
                <i className="bi bi-envelope text-success mb-3" style={{ fontSize: "2.5rem" }} />
                <h4 className="text-white">Email</h4>
                <p className="text-secondary mb-0">support@wardpulse.com<br />contact@wardpulse.com</p>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-secondary shadow-lg mt-5 p-4 p-md-5">
            <h3 className="text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-4 text-start">
                  <label className="form-label text-white fw-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control bg-dark text-white border-secondary py-3"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label className="form-label text-white fw-semibold">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control bg-dark text-white border-secondary py-3"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label className="form-label text-white fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control bg-dark text-white border-secondary py-3"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="col-md-12 text-start">
                  <label className="form-label text-white fw-semibold">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="form-control bg-dark text-white border-secondary py-3"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12 text-start">
                  <label className="form-label text-white fw-semibold">Message</label>
                  <textarea
                    className="form-control bg-dark text-white border-secondary py-3"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <button type="submit" className="btn btn-success px-5 py-3 fw-bold" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}