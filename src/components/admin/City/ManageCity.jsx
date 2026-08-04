import Modal from "react-modal";
import { useState, useEffect } from "react";
import CloudinaryService from "../../../Services/CloudinaryService";
import CityService from "../../../Services/CityService"
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageCity() {

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
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    // List + Modal state
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        getAllCities();
    }, [])

    async function getAllCities() {
        setLoading(true)
        const data = await CityService.all();
        setCities(data);
        setLoading(false)
    }

    function openModal(city = null) {
        if (city) { // Edit mode
            setIsEditMode(true)
            setEditId(city.id)
            setName(city.name)
            setPreview(city.imageUrl) // purani image
            setImage(null)
        } else { // Add mode
            setIsEditMode(false)
            setEditId(null)
            setName("")
            setImage(null)
            setPreview("")
        }
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setName("")
        setImage(null)
        setPreview("")
        setEditId(null)
        setIsEditMode(false)
        getAllCities()
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file))
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name) {
            toast.error("City name is required");
            return;
        }

        try {
            setLoading(true);
            let imageUrl = preview;

            if (image) {
                imageUrl = await CloudinaryService.upload(image);
            }

            const payload = {
                name: name,
                imageUrl: imageUrl,
                createAt: new Date()
            };

            if (isEditMode) { // Update
                await CityService.update(editId, payload);
                toast.success("City Updated Successfully");
            } else { // Add
                await CityService.add(payload);
                toast.success("City Added Successfully");
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

    async function deleteCity(id) {
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
                await CityService.delete(id)
                Swal.fire("Deleted!", "City has been deleted.", "success");
                getAllCities()
                setLoading(false)
            }
        });
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: "1.5px" }}>City Management</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            Manage cities available across the application. Add, edit, or remove cities to
                            keep locations updated and help citizens find the right area quickly.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="px-4 py-2 rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-primary">Cities</h2>
                        </div>
                        <div className="col-md text-end">
                            <button className="btn btn-primary btn-sm" onClick={() => openModal()}>
                                + Add New City
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col">S.no </th>
                                        <th scope="col">Name </th>
                                        <th scope="col" className="text-center">Image</th>
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
                                    ) : cities.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5 text-muted">No cities found.</td>
                                        </tr>
                                    ) : (
                                        cities.map((city, index) => (
                                            <tr key={city.id}>
                                                <td>{index + 1}</td>
                                                <td>{city.name}</td>
                                                <td className="text-center">
                                                    <a href={city.imageUrl} target="_blank">
                                                        <img src={city.imageUrl} style={{ height: "80px", width: "80px", borderRadius: "50%", objectFit: "cover" }} alt={city.name} />
                                                    </a>
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-primary me-2" onClick={() => openModal(city)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteCity(city.id)}>
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


            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="City Modal">
                <div className="modal-header border-0 pb-0 mb-3">
                    <h4 className="modal-title fw-bold text-dark">
                        {isEditMode ? "Edit City" : "Add New City"}
                    </h4>
                </div>
                <form onSubmit={handleSubmit} className="px-2">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label fw-semibold text-dark">City Name</label>
                            <input
                                type="text"
                                className="form-control shadow-none border border-secondary"
                                placeholder="Enter City Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-12 mb-4">
                            <label className="form-label fw-semibold text-dark">City Image</label>
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