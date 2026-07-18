import Modal from "react-modal";
import { useState, useEffect } from "react";
import CloudinaryService from "../../../Services/CloudinaryService";
import CategoryService from "../../../Services/CategoryService"
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

Modal.setAppElement('#root');

export default function ManageCategory(){

    const customStyles = {
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
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null); 

    useEffect(() => {
        getAllcategories();
    }, [])

    async function getAllcategories() {
        setLoading(true)
        const data = await CategoryService.all();
        setCategories(data);
        setLoading(false)
    }

    
    function openModal(category = null) {
        if (category) { // Edit mode
            setIsEditMode(true)
            setEditId(category.id)
            setName(category.name)
            setPreview(category.imageUrl) // purani image
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
        getAllcategories()
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
            toast.error("Category name is required");
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
                await CategoryService.update(editId, payload);
                toast.success("Category Updated Successfully");
            } else { // Add
                await CategoryService
                
                .add(payload);
                toast.success("Category Added Successfully");
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

    async function deleteCategory(id) {
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
                await CategoryService.delete(id)
                Swal.fire("Deleted!", "Category has been deleted.", "success");
                getAllcategories()
                setLoading(false)
            }
        });
    }

    return (
        <>
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Manage Category</h1>
                           
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-4">
                <div className="px-4 py-2 bg-light rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-primary">Categories</h2>
                        </div>
                        <div className="col-md text-end">
                            <button className="btn btn-primary btn-sm" onClick={() => openModal()}>
                                + Add New Category
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {loading? <div className="text-center py-4">
                                <PulseLoader color="#4172F5" loading={loading} cssOverride={override} size={40} />
                            </div> :
                                <table className="table table-bordered align-middle">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">S.no </th>
                                            <th scope="col">Name </th>
                                            <th scope="col" className="text-center">Image</th>
                                            <th scope="col" className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map((category, index) => (
                                            <tr key={category.id}>
                                                <td>{index + 1}</td>
                                                <td>{category.name}</td>
                                                <td className="text-center">
                                                    <a href={category.imageUrl} target="_blank">
                                                        <img src={category.imageUrl} style={{ height: "80px", width: "80px", borderRadius: "50%", objectFit: "cover" }} alt={category.name} />
                                                    </a>
                                                </td>
                                                <td className="text-center">
                                                   
                                                    <button className="btn btn-sm btn-primary me-2" onClick={() => openModal(category)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteCategory(category.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>

          
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Category Modal">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md">
                            <h3>{isEditMode? "Edit Category" : "Add New Category"}</h3> {/* Title change */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 my-2">
                            <label className="form-label">Category Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-12 my-2">
                            <label className="form-label">Category Image</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                            {preview && <img src={preview} alt="preview" className="mt-2 rounded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
                        </div>
                    </div>

                    <div className="row mt-3 justify-content-end">
                        <div className="col-auto">
                            <button className="btn btn-primary btn-sm" type="submit" disabled={loading}>
                                {loading? "Saving..." : isEditMode? "Update" : "Submit"} {/* Button text change */}
                            </button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger btn-sm" type="button" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}