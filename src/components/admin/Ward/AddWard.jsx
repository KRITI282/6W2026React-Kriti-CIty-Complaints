import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import WardService from "../../../Services/WardService";

export default function AddWard() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const nav = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            setLoading(true);

            const payload = {
                name,
                image: image || "",
            };

            await WardService.add(payload);
            toast.success("Ward Added Successfully");
            setName("");
            setImage("");
            nav("/admin/Categories");
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Failed to add Ward");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Add New Ward</h1>
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
            {/* Single Page Header End */}
            {/* Contact Start */}

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-lg-6 offset-3">
                                {loading ? (
                                    <div>
                                        <PacmanLoader
                                            color="#89C407"
                                            loading={loading}
                                            cssOverride={override}
                                            size={40}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div>
                                ) : (
                                    <form onSubmit={submit} className="">
                                         <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder="Enter Name"
                                            value={1234}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                       
                                        <button
                                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    );
}
