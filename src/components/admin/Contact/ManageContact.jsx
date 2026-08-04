import { useState, useEffect } from "react";
import ContactService from "../../../Services/ContactService";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageContact() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllContacts();
    }, []);

    async function getAllContacts() {
        setLoading(true);
        const data = await ContactService.all();
        setContacts(data);
        setLoading(false);
    }

    async function deleteContact(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this message!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#41d630",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                try {
                    await ContactService.delete(id);
                    Swal.fire("Deleted!", "Message has been deleted.", "success");
                    getAllContacts();
                } catch (error) {
                    toast.error("Failed to delete message.");
                } finally {
                    setLoading(false);
                }
            }
        });
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: "1.5px" }}>Contact Messages</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            View and manage messages sent by citizens through the contact form.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="px-4 py-2 rounded">
                    <div className="row mb-3">
                        <div className="col-md">
                            <h2 className="fw-bold text-primary">Messages</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table table-border text-white align-middle" style={{ "--bs-table-bg": "transparent", "--bs-table-color": "white", background: "transparent" }}>
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Sender</th>
                                        <th scope="col">Contact Info</th>
                                        <th scope="col">Subject & Message</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="5" className="text-center py-5">
                                                <PulseLoader color="#ffffff" loading={loading} size={20} />
                                            </td>
                                        </tr>
                                    ) : contacts.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center py-5 text-muted">No messages found.</td>
                                        </tr>
                                    ) : (
                                        contacts.map((el) => (
                                            <tr key={el.id}>
                                                <td>{new Date(el.createdAt).toLocaleDateString()}</td>
                                                <td>{el.name}</td>
                                                <td>
                                                    <div className="d-flex flex-column">
                                                        <span className="text-primary">{el.email}</span>
                                                        <span className="text-light small">{el.phone}</span>
                                                    </div>
                                                </td>
                                                <td style={{ maxWidth: "300px" }}>
                                                    <div className="fw-bold mb-1">{el.subject}</div>
                                                    <p className="text-light small mb-0 text-truncate" title={el.message}>
                                                        {el.message}
                                                    </p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteContact(el.id)}>
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
        </>
    );
}
