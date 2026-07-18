import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import ComplaintService from "../../../services/ComplaintService";

export default function AddComplaint() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [loading, setLoading] = useState(false);
    const [UserId, setUserId] = useState("");
    const [CityId, setCityId] = useState("");
    const [WardId, setWardId] = useState("");
    const [CategoryId, setCategoryId] = useState("");
    const [Title, setTitle] = useState("");
    const [ComplaintImage, setComplaintImage] = useState("");
    const [ResolutionProof, setResolutionProof] = useState("");
    const [ComplaintStatus, setComplaintStatus] = useState("");
    const [AdminRemark, setAdminRemark] = useState("");//Pending/In Progress/Resolved/Rejected

    const nav = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            setLoading(true);

            const payload = {
                UserId: UserId,
                CityId: CityId,
                WardId: WardId,
                CategoryId: CategoryId,
                Title: Title,
                ComplaintImage: ComplaintImage,
                ResolutionProof: ResolutionProof,
                ComplaintStatus: ComplaintStatus,
                AdminRemark: AdminRemark

            };

            await ComplaintService.add(payload);
            toast.success("Complaint Added Successfully");
            setName("");
            setImage("");
            nav("/admin/complaints");
        } catch (error) {
            console.log(error);
            toast.error(error.message || "Failed to add Complaint");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Add New Complaint</h1>
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

                                        <h5 className="text-danger">UserId</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder="Enter Title"
                                            value={name}
                                            onChange={(e) => setUserId(e.target.value)}
                                        />
                                        <h5 className="text-danger">CityId</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""
                                            value={1234}
                                            onChange={(e) => setCityId(e.target.value)}
                                        />
                                        <h5 className="text-danger">WardId</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""
                                            value={1234}
                                            onChange={(e) => setWardId(e.target.value)}
                                        />
                                        <h5 className="text-danger">CategoryId</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""
                                            value={1234}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                        />
                                        <h5 className="text-danger">Title</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""
                                            value={1234}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <h5 className="text-danger">ComplaintImage</h5>
                                        <input
                                            type="file"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""

                                            onChange={(e) => setComplaintImage(e.target.files[0])}
                                        />
                                        <h5 className="text-danger">ResolutionProof</h5>
                                        <input
                                            type="file"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder=""

                                            onChange={(e) => setResolutionProof(e.target.files[0])}
                                        />
                                        <h5 className="text-danger">ComplaintStatus</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder="Enter complaint status"
                                            value={ComplaintStatus}
                                            onChange={(e) => setComplaintStatus(e.target.value)}

                                        />
                                        <h5 className="text-danger">AdminRemark</h5>
                                        <input
                                            type="text"
                                            className="w-100 form-control border-0 py-3 mb-4"
                                            placeholder="Enter admin remark"
                                            value={AdminRemark}
                                            onChange={(e) => setAdminRemark(e.target.value)}
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
