import Modal from "react-modal";
import { useState, useEffect } from "react";
import CloudinaryService from "../../../Services/CloudinaryService";
import ComplaintService from "../../../Services/ComplaintService";
import CategoryService from "../../../Services/CategoryService";
import CityService from "../../../Services/CityService";
import WardService from "../../../Services/WardService";
import UserService from "../../../Services/UserService";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageComplaint() {

    const customStyles = {
        overlay: {
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.6)"
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            width: "50%",
            maxHeight: "90vh",
            overflowY: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    // Modal Form state
    const [complaintStatus, setComplaintStatus] = useState("Pending");
    const [adminRemark, setAdminRemark] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    // Readonly details state for modal
    const [activeComplaint, setActiveComplaint] = useState(null);

    // List + Modal state
    const [complaints, setComplaints] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [wards, setWards] = useState([]);
    const [users, setUsers] = useState([]);
    
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setLoading(true);
            
            const comps = await ComplaintService.all();
            setComplaints(comps);
            
            const cats = await CategoryService.all();
            setCategories(cats);
            
            const cits = await CityService.all();
            setCities(cits);
            
            const wrds = await WardService.all();
            setWards(wrds);
            
            const usrs = await UserService.all();
            setUsers(usrs);

        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    }

    const getCategoryName = (id) => categories.find(c => c.id === id)?.name || "N/A";
    const getCityName = (id) => cities.find(c => c.id === id)?.name || "N/A";
    const getWardName = (id) => wards.find(w => w.id === id)?.name || "N/A";
    const getUserName = (id) => users.find(u => u.id === id)?.name || "N/A";

    function openModal(complaint) {
        setActiveComplaint(complaint);
        setComplaintStatus(complaint.complaintStatus || "Pending");
        setAdminRemark(complaint.adminRemark || "");
        setPreview(complaint.resolutionProofUrl || "");
        setImage(null);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setActiveComplaint(null);
        setComplaintStatus("Pending");
        setAdminRemark("");
        setImage(null);
        setPreview("");
        fetchData();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setSaving(true);
            let imageUrl = preview;

            if (image) {
                imageUrl = await CloudinaryService.upload(image);
            }

            const payload = {
                complaintStatus: complaintStatus,
                adminRemark: adminRemark,
                resolutionProofUrl: imageUrl
            };

            await ComplaintService.update(activeComplaint.id, payload);
            toast.success("Complaint Updated Successfully");
            closeModal();
        }
        catch (error) {
            toast.error(error.message || "Something went wrong");
        }
        finally {
            setSaving(false);
        }
    }

    async function deleteComplaint(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#41d630",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                await ComplaintService.delete(id)
                Swal.fire("Deleted!", "Complaint has been deleted.", "success");
                fetchData()
            }
        });
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>Complaint Management</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            Review citizen complaints, update their statuses, provide remarks, and upload resolution proofs to ensure timely action and transparency.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="px-4 py-2 rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-white">All Complaints</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                                <thead className="text-white border-secondary">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Complaint Details</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Evidence</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="border-secondary">
                                    {loading ? (
                                        <tr>
                                            <td colSpan="6" className="text-center py-5">
                                                <PulseLoader color="#ffffff" loading={loading} cssOverride={override} size={20} />
                                            </td>
                                        </tr>
                                    ) : complaints.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="text-center py-5 text-muted">No complaints found.</td>
                                        </tr>
                                    ) : (
                                        complaints.map((comp, index) => {
                                            const d = new Date(comp.createdAt);
                                            const day = String(d.getDate()).padStart(2, '0');
                                            const month = String(d.getMonth() + 1).padStart(2, '0');
                                            const year = String(d.getFullYear()).slice(-2);
                                            const formattedDate = `${day}/${month}/${year}`;

                                            return (
                                                <tr key={comp.id}>
                                                    <td>{formattedDate}</td>
                                                    <td>{getUserName(comp.userId)}</td>
                                                    <td>
                                                        <strong>{comp.title}</strong><br/>
                                                        <small className="text-warning">{getCategoryName(comp.categoryId)}</small><br/>
                                                        <small>{comp.description}</small>
                                                    </td>
                                                    <td>{getWardName(comp.wardId)}<br/><small>{getCityName(comp.cityId)}</small></td>
                                                    <td>
                                                        {comp.complaintImageUrl ? (
                                                            <a href={comp.complaintImageUrl} target="_blank" rel="noreferrer">
                                                                <img src={comp.complaintImageUrl} alt="Evidence" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                                                            </a>
                                                        ) : "-"}
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${comp.complaintStatus === 'Pending' ? 'bg-warning text-dark' : comp.complaintStatus === 'Resolved' ? 'bg-success' : 'bg-info'}`}>
                                                            {comp.complaintStatus}
                                                        </span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-outline-light me-2" onClick={() => openModal(comp)}>
                                                            Update
                                                        </button>
                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteComplaint(comp.id)}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Complaint Modal">
                <div className="modal-header border-0 pb-0 mb-3">
                    <h4 className="modal-title fw-bold text-dark">
                        Update Complaint
                    </h4>
                </div>
                {activeComplaint && (
                    <form onSubmit={handleSubmit} className="px-2 mt-3">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className="form-label fw-semibold text-dark">Status</label>
                                <select 
                                    className="form-control shadow-none border border-secondary"
                                    value={complaintStatus}
                                    onChange={(e) => setComplaintStatus(e.target.value)}
                                    required
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>

                            <div className="col-md-12 mb-3">
                                <label className="form-label fw-semibold text-dark">Admin Remark</label>
                                <textarea
                                    className="form-control shadow-none border border-secondary"
                                    placeholder="Enter your remark or feedback..."
                                    value={adminRemark}
                                    onChange={(e) => setAdminRemark(e.target.value)}
                                    rows="3"
                                    required
                                />
                            </div>

                            <div className="col-md-12 mb-4">
                                <label className="form-label fw-semibold text-dark">Resolution Proof (Optional Image)</label>
                                <input
                                    type="file"
                                    className="form-control shadow-none border border-secondary"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                {preview && (
                                    <div className="mt-3 text-center">
                                        <img src={preview} alt="preview" className="rounded border border-secondary" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="row justify-content-end mt-2 pt-3 border-top">
                            <div className="col-auto">
                                <button className="btn btn-outline-dark px-4" type="button" onClick={closeModal}>
                                    Cancel
                                </button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-dark px-4" type="submit" disabled={saving}>
                                    {saving ? "Saving..." : "Update Complaint"}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Modal>
        </>
    );
}
