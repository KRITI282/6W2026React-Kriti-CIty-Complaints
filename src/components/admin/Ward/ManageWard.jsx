import Modal from "react-modal";
import { useState, useEffect } from "react";
import WardService from "../../../Services/WardService";
import CityService from "../../../Services/CityService";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageWard() {

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
            width: "40%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    // Form state
    const [name, setName] = useState("");
    const [cityId, setCityId] = useState("");

    // List + Modal state
    const [wards, setWards] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        getAllWards();
        getAllCities();
    }, [])

    async function getAllWards() {
        setLoading(true)
        const data = await WardService.all();
        setWards(data);
        setLoading(false)
    }

    async function getAllCities() {
        const data = await CityService.all();
        setCities(data);
    }

    function openModal(ward = null) {
        if (ward) { // Edit mode
            setIsEditMode(true)
            setEditId(ward.id)
            setName(ward.name)
            setCityId(ward.cityId)
        } else { // Add mode
            setIsEditMode(false)
            setEditId(null)
            setName("")
            setCityId("")
        }
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setName("")
        setCityId("")
        setEditId(null)
        setIsEditMode(false)
        getAllWards()
    }


    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || !cityId) {
            toast.error("Both Ward name and City are required");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                name: name,
                cityId: cityId,
                createAt: new Date()
            };

            if (isEditMode) { // Update
                await WardService.update(editId, payload);
                toast.success("Ward Updated Successfully");
            } else { // Add
                await WardService.add(payload);
                toast.success("Ward Added Successfully");
            }

            closeModal();
        }
        catch (error) {
            toast.error(error.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    async function deleteWard(id) {
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
                await WardService.delete(id)
                Swal.fire("Deleted!", "Ward has been deleted.", "success");
                getAllWards()
                setLoading(false)
            }
        });
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: "1.5px" }}>Ward Management</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            Manage wards across different cities. Add, edit, or remove wards to
                            accurately map the geographic divisions for complaint reporting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="px-4 py-2 rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-primary">Wards</h2>
                        </div>
                        <div className="col-md text-end">
                            <button className="btn btn-primary btn-sm" onClick={() => openModal()}>
                                + Add New Ward
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col">S.no </th>
                                        <th scope="col">Ward Name </th>
                                        <th scope="col">City</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5">
                                                <PulseLoader color="#ffffff" loading={loading} cssOverride={override} size={20} />
                                            </td>
                                        </tr>
                                    ) : wards.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5 text-muted">No wards found.</td>
                                        </tr>
                                    ) : (
                                        wards.map((ward, index) => (
                                            <tr key={ward.id}>
                                                <td>{index + 1}</td>
                                                <td>{ward.name}</td>
                                                <td>
                                                    {cities.find(c => c.id === ward.cityId)?.name || "Unknown"}
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-primary me-2" onClick={() => openModal(ward)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteWard(ward.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Ward Modal">
                <div className="modal-header border-0 pb-0 mb-3">
                    <h4 className="modal-title fw-bold text-dark">
                        {isEditMode ? "Edit Ward" : "Add New Ward"}
                    </h4>
                </div>
                <form onSubmit={handleSubmit} className="px-2">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label fw-semibold text-dark">City</label>
                            <select
                                className="form-control shadow-none border border-secondary"
                                value={cityId}
                                onChange={(e) => setCityId(e.target.value)}
                                required
                            >
                                <option value="" disabled>Choose City</option>
                                {cities.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 mb-4">
                            <label className="form-label fw-semibold text-dark">Ward Name</label>
                            <input
                                type="text"
                                className="form-control shadow-none border border-secondary"
                                placeholder="Enter Ward Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row justify-content-end mt-2 pt-3 border-top">
                        <div className="col-auto">
                            <button className="btn btn-outline-dark px-4" type="button" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-dark px-4" type="submit" disabled={loading}>
                                {loading ? "Saving..." : isEditMode ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}
