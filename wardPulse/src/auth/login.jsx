import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../services/UserService";

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

    return (

        <>

            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Login</h1>
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
                                    <h1 className="text-primary">Login</h1>

                                </div>
                            </div>

                            <div className="col-lg-6 offset-3">

                                <form onSubmit={submit} className="">

                                    <input
                                        type="email"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        value={email}
                                        required
                                        placeholder="Enter Your Email" onChange={
                                            (e) => {
                                                setEmail(e.target.value)
                                            }
                                        }
                                    />
                                    <input
                                        type="password"
                                        className="w-100 form-control border-0 py-3 mb-4"
                                        value={password} onChange={(e) => {
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
                                            loading ? "Loading .." : "Sign In"
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

// Export for use in other files
export default Login