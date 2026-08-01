import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import UserService from "../../../Services/UserService"
// import Swal from 'sweetalert2'
// About page component
export default function ManageUser() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const [User, setUser] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    async function getAllUsers() {
        try {
            setLoading(true)
            let res = await UserService.all()
            setUser(res)
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
                    getAllUser()
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
                <h1 className="text-center text-white display-6">Manage User</h1>
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
                            <h3> Users List</h3>
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/User/add">
                                <button className="btn btn-sm btn-primary text-light">+Add Users</button>
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
                                                    <th scope="col">name</th>
                                                    <th scope="col"> email</th>
                                                    <th scope="col">phone</th>
                                                    <th scope="col">address </th>
                                                    <th scope="col"> profileImage</th>
                                                    <th scope="col">userType</th>
                                                    
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    User.map((User, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{User.name}</td>
                                                            <td>

                                                                <img src={User.image} alt="" style={{
                                                                    height: "100px",
                                                                    borderRadius: "50%"
                                                                }} />
                                                            </td>


                                                            <td>
                                                                <Link to={`/admin/User/edit/${User.id}`}>


                                                                    <button className="btn btn-sm btn-primary">
                                                                        Edit
                                                                    </button>
                                                                </Link>



                                                                &nbsp;
                                                                <button className="btn btn-sm btn-danger" onClick={
                                                                    () => {
                                                                        deleteUser(User.id)
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


