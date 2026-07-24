import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import CityService from "../../../services/CityService"
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import { toast } from "react-toastify";
import CloudinaryService from "../../../services/CloudinaryService";
import WardService from "../../../services/WardService";
// About page component
export default function ManageWard() {

    const modalStyling = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: "50%",
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
    const [cities, setCities] = useState([])
    const [wards, setWards] = useState([])
    const [name, setName] = useState("")
    const [cityId, setCityId] = useState("")

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        getAllCities()
        getAllWards()
    }

    useEffect(() => {
        getAllCities()
        getAllWards()
    }, [])

    async function getAllCities() {
        try {
            let res = await CityService.all();
            console.log("Cities:", res);
            setCities(res);
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllWards() {
        try {
            let res = await WardService.all();
            console.log("Wards:", res);
            setWards(res);
        } catch (error) {
            console.log(error);
        }
    }


   async function deleteWard(id) {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
    });

    if (!result.isConfirmed) return;

    try {
        setLoading(true);

        await WardService.delete(id);

        await getAllWards();

        Swal.fire("Deleted!", "Ward deleted successfully.", "success");
    toast.success("deleted successfully ")
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}


    async function submit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            let payload = {
                name: name,
                cityId: cityId,
            }


            await WardService.add(payload)
            setLoading(false)
            toast.success("Ward Added Successfully")
            setName("")

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

            {/* Single Page Header End */}
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md">
                            <h3>  Wards List</h3>
                        </div>
                        <div className="col-md text-end">

                            <button className="btn btn-sm btn-primary text-light" onClick={openModal}>+Add Ward</button>


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
                                                    <th scope="col">City</th>
     <th scope="col">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    wards.map((ward, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{ward.name}</td>
                                                            <td>


                                                                {
                                                                    cities.find(c => c.id === ward.cityId)?.name
                                                                }
                                                                {/* {product.categoryId} */}


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
                        <h3>Add New Ward</h3>
                    </div>
                    <div className="col-md text-end">
                        <button className="btn btn-lg btn-primary text-light" onClick={closeModal}>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                </div>
                <hr />

                <form className="" onSubmit={submit}>

                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="w-100 form-control border-0 py-3 mb-4"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}

                            />
                        </div>
                        <div className="col-md-6">


                            <select
                                type="text"
                                className="w-100 form-control border-0 py-3 mb-4"
                                placeholder="City Id"
                                value={cityId}
                                onChange={(e) => {
                                    setCityId(e.target.value)
                                }}

                            >

                                <option selected value={''}>Choose City</option>
                                {
                                    cities.map((c) => (
                                        <option value={c.id}>{c.name}</option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>




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
