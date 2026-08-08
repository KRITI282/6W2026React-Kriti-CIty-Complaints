import { useState, useEffect } from "react";
import UserService from "../../../Services/UserService";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageUser() {

    const override = {
        display: "block",
        margin: "0 auto",
    };

    // List state
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, [])

    async function getAllUsers() {
        setLoading(true)
        try {
         
            const data = await UserService.all({ userType: 'user' });
            setUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    async function handleStatusChange(id, currentStatus) {
        const newStatus = !currentStatus;
        const actionText = newStatus ? "Unblock" : "Block";

        Swal.fire({
            title: `Are you sure?`,
            text: `Do you want to ${actionText} this user?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: newStatus ? "#41d630" : "#d33",
            cancelButtonColor: "#6c757d",
            confirmButtonText: `Yes, ${actionText}!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                try {
                    await UserService.update(id, { status: newStatus });
                    toast.success(`User has been ${actionText.toLowerCase()}ed successfully.`);
                    getAllUsers();
                } catch (error) {
                    console.log(error);
                    toast.error("Failed to update status");
                    setLoading(false)
                }
            }
        });
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>User Management</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            View and manage all registered citizens. You can monitor their details and block or unblock their access to the platform.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="px-4 py-2 rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-white">Registered Users</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                                <thead className="text-white border-secondary">
                                    <tr>
                                        <th scope="col">S.no</th>
                                        <th scope="col" className="text-center">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email & Phone</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="border-secondary">
                                    {loading ? (
                                        <tr>
                                            <td colSpan="7" className="text-center py-5">
                                                <PulseLoader color="#ffffff" loading={loading} cssOverride={override} size={20} />
                                            </td>
                                        </tr>
                                    ) : users.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="text-center py-5 text-muted">No users found.</td>
                                        </tr>
                                    ) : (
                                        users.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td className="text-center">
                                                    {user.profileImage ? (
                                                        <a href={user.profileImage} target="_blank" rel="noreferrer">
                                                            <img src={user.profileImage} style={{ height: "50px", width: "50px", borderRadius: "50%", objectFit: "cover" }} alt={user.name} />
                                                        </a>
                                                    ) : (
                                                        <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ height: "50px", width: "50px" }}>
                                                            <i className="bi bi-person text-white fs-4"></i>
                                                        </div>
                                                    )}
                                                </td>
                                                <td><strong>{user.name}</strong></td>
                                                <td>
                                                    {user.email}<br />
                                                    <small className="text-secondary">{user.phone}</small>
                                                </td>
                                                <td>{user.address}</td>
                                                <td>
                                                    <span className={`badge ${user.status ? 'bg-success' : 'bg-danger'}`}>
                                                        {user.status ? "Active" : "Blocked"}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    {user.status ? (
                                                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleStatusChange(user.id, user.status)}>
                                                            Block
                                                        </button>
                                                    ) : (
                                                        <button className="btn btn-sm btn-success" onClick={() => handleStatusChange(user.id, user.status)}>
                                                            Unblock
                                                        </button>
                                                    )}
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
        </>
    );
}
