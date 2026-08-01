import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import CategoryService from "../../../Services/CategoryService"
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import { toast } from "react-toastify";
import CloudinaryService from "../../../Services/CloudinaryService";
// About page component
export default function AddCategory() {

    const modalStyling = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: "40%",
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };



    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    let [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        getAllCategories()
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    async function getAllCategories() {
        try {
            setLoading(true)
            let res = await CategoryService.all()
            setCategories(res)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }



    async function deleteCategory(id) {
        try {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    setLoading(true)
                    let res = await CategoryService.delete(id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    getAllCategories()
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }



    async function submit(e) {
        e.preventDefault()
        try {
            setLoading(true)

            if (image) {
                var imageUrl = await CloudinaryService.upload(image)
            }
            
            let payload = {
                name: name,
                description: description,
                image: imageUrl
            }


            await CategoryService.add(payload)
            setLoading(false)
            toast.success("Category Added Successfully")
            setName("")
            setDescription("")
            closeModal()
            // console.log(res);
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error(error)

        }
        finally {
            setLoading(false)
        }
    }


    return (
        // Fragment wrapper
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Manage Categories</h1>
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
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md">
                            <h3>  Categories List</h3>
                        </div>
                        <div className="col-md text-end">

                            <button className="btn btn-sm btn-primary text-light" onClick={openModal}>+Add Category</button>


                        </div>
                    </div>
                    <div className="p-5 bg-light rounded">


                        <div className="row g-4">
                            <div className="col-12">

                                {

                                    loading ? <div >
                                        <PacmanLoader
                                            color="#89C407"
                                            loading={loading}
                                            cssOverride={override}
                                            size={40}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div> :
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">image</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    categories.map((category, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{category.name}</td>
                                                            <td>

                                                                <img src={category.image} alt="" style={{
                                                                    height: "100px",
                                                                    borderRadius: "50%"
                                                                }} />
                                                            </td>
                                                            <td>{category.description}</td>

                                                            <td>
                                                                <Link to={`/admin/category/edit/${category.id}`}>


                                                                    <button className="btn btn-sm btn-primary">
                                                                        Edit
                                                                    </button>
                                                                </Link>



                                                                &nbsp;
                                                                <button className="btn btn-sm btn-danger" onClick={
                                                                    () => {
                                                                        deleteCategory(category.id)
                                                                    }
                                                                }>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    ))
                                                }


                                            </tbody>
                                        </table>



                                }


                            </div>



                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}



            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyling}
            >

                <div className="row">
                    <div className="col-md">
                        <h3>Add New Category</h3>
                    </div>
                    <div className="col-md text-end">
                        <button className="btn btn-lg btn-primary text-light" onClick={closeModal}>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                </div>
                <hr />

                <form className="" onSubmit={submit}>
                    <input
                        type="text"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}

                    />
                    <input
                        type="file"
                        className="w-100 form-control border-0 py-3 mb-4"
                        placeholder="Enter Name"

                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}


                    />
                    <textarea
                        className="w-100 form-control border-0 mb-4"
                        rows={5}
                        cols={10}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}

                    />

                    <div className="row">
                        <div className="col-md">


                            {

                                loading ? <button
                                    className=" btn f border-secondary py-3 bg-white text-primary "
                                    type="button" disabled
                                >
                                    Savinng ..
                                </button> : <button
                                    className=" btn f border-secondary py-3 bg-white text-primary "
                                    type="submit"
                                >
                                    Submit
                                </button>


                            }







                            <button
                                className=" btn mx-2 border-danger py-3 bg-white text-primary "
                                type="button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>

            </Modal>

        </>


    )
}


