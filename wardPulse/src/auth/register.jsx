import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../services/UserService";

function Register() {
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

    return (

        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Register</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Contact</li>
                </ol>
            </div>

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
                                    <h1 className="text-primary">Create Your Account</h1>

                                </div>
                            </div>

                            <div className="col-lg-8 offset-2">
                                <form onSubmit={submit} className="">

                                    <div className="row">
                                        <div className="col-md">
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                required
                                                placeholder="Enter Your Name"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md">

                                            <input
                                                type="number"
                                                className="w-100 form-control border-0 py-3 mb-4"
                                                required
                                                placeholder="Enter Your Phone"
                                                value={contact}
                                                onChange={(e) => {
                                                    setContact(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <input
                                        type="email"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        required
                                        placeholder="Enter Your Email"
                                    />



                                    <input
                                        type="password"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        placeholder="Enter Your Password"
                                        required
                                    />
                                    <button
                                        className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                                        type="submit"
                                    >
                                        {
                                            loading ? " Saving .." : "Submit"
                                        }
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>


    )
}

export default Register
