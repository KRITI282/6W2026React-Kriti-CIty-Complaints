import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import ComplaintService from "../../../services/ComplaintService"
import CategoryService from "../../../services/CategoryService";
// import Swal from 'sweetalert2'
// About page component
export default function ManageComplaint() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const [Complaint, setComplaint] = useState([])

    useEffect(() => {
        getAllComplaints()
    }, [])

    async function getAllComplaints() {
        try {
            setLoading(true)
            let res = await ComplaintService.all()
            setComplaint(res)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }async function deleteCategory(id) {
        try {
            setLoading(true)
            let res = await CategoryService.delete(id)
            getAllCategories()
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
                    getAllComplaint()
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




    return (
        // Fragment wrapper
        <>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Manage Complaint</h1>
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
                            <h3> Complaints List</h3>
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/Complaint/add">
                                <button className="btn btn-sm btn-primary text-light">+Add Complaints</button>
                            </Link>

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
                                                    <th scope="col">UserId</th>
                                                    <th scope="col">cityId</th>
                                                    <th scope="col">categoryId</th>
                                                    <th scope="col">title</th>
                                                    <th scope="col"> description</th>
                                                    <th scope="col">complaintImageUrl</th>
                                                    <th scope="col">  resolutionProofUrl</th>
                                                    <th scope="col"> complaintStatus</th>
                                                    <th scope="col">adminRemark</th>

                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Complaint.map((Complaint, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{Complaint.name}</td>
                                                            <td>

                                                                <img src={Complaint.image} alt="" style={{
                                                                    height: "100px",
                                                                    borderRadius: "50%"
                                                                }} />
                                                            </td>


                                                            <td>
                                                                <Link to={`/admin/Complaint/edit/${Complaint.id}`}>


                                                                    <button className="btn btn-sm btn-primary">
                                                                        Edit
                                                                    </button>
                                                                </Link>



                                                                &nbsp;
                                                                <button className="btn btn-sm btn-danger" onClick={
                                                                    () => {
                                                                        deleteComplaint(Complaint.id)
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
        </>


    )
}


