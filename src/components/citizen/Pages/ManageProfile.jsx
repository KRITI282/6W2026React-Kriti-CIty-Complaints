import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import UserService from "../../../Services/UserService";
import AuthService from "../../../Services/AuthService";
import CloudinaryService from "../../../Services/CloudinaryService";

export default function ManageProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        try {
            setLoading(true);
            const id = AuthService.getId();
            if (!id) {
                toast.error("Please login to view profile.");
                return;
            }
            const res = await UserService.single(id);
            if (res) {
                setName(res.name || "");
                setEmail(res.email || "");
                setPhone(res.phone || "");
                setAddress(res.address || "");
                setPreview(res.profileImage || "");
            } else {
                toast.error("Failed to load profile details.");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            toast.dismiss();
            setSaving(true);
            let imageUrl = "";
            if (image) {
                imageUrl = await CloudinaryService.upload(image);
            }

            let payLoad = {
                name: name,
                phone: phone,
                address: address,
            };
            if (imageUrl || preview) {
                payLoad.profileImage = imageUrl || preview;
            }

            const id = AuthService.getId();
            await UserService.update(id, payLoad);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Error updating profile.");
        } finally {
            setSaving(false);
        }
    };

    const override = {
        display: "block",
        margin: "0 auto",
    };

    if (loading) {
        return (
            <div className="container-fluid py-5 text-center mt-5">
                <PulseLoader color="#000000" loading={loading} cssOverride={override} size={20} />
            </div>
        );
    }

    return (
        <>
            <div className="container py-5 mb-4 border-bottom border-secondary mt-4">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="fw-bold text-uppercase mb-3 text-white" style={{ letterSpacing: "1.5px" }}>My Profile</h1>
                        <p className="mb-0 text-secondary fs-5" style={{ lineHeight: "1.6" }}>
                            Manage your personal details and profile picture. Keep your information updated to ensure smooth communication regarding your complaints.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-4 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="p-5 rounded border border-secondary" style={{ backgroundColor: "transparent" }}>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-12 text-center mb-3">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Profile"
                                                className="rounded-circle border border-secondary"
                                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <div
                                                className="rounded-circle border border-secondary d-flex align-items-center justify-content-center mx-auto"
                                                style={{ width: "150px", height: "150px", backgroundColor: "#f8f9fa" }}
                                            >
                                                <i className="bi bi-person text-secondary" style={{ fontSize: "4rem" }}></i>
                                            </div>
                                        )}


                                    </div>
                                    <div className="col-12 col-md-12">

                                        <label className="form-label fw-semibold text-white text-start w-100">Profile Image</label>
                                        <input
                                            type="file"
                                            className="form-control shadow-none border border-secondary bg-transparent text-white"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                        />

                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold text-white">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control shadow-none border border-secondary bg-transparent text-white"
                                            style={{ height: "50px" }}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold text-white">Phone</label>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control shadow-none border border-secondary bg-transparent text-white"
                                            style={{ height: "50px" }}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <label className="form-label fw-semibold text-white">Email (Read Only)</label>
                                        <input
                                            type="email"
                                            value={email}
                                            className="form-control shadow-none border border-secondary bg-transparent text-white"
                                            style={{ height: "50px" }}
                                            readOnly
                                        />
                                    </div>

                                    <div className="col-12 col-md-12">
                                        <label className="form-label fw-semibold text-white">Address</label>
                                        <textarea
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="form-control shadow-none border border-secondary bg-transparent text-white"
                                            rows={4}
                                        ></textarea>
                                    </div>
                                    <div className="col-12 mt-4 text-end border-top border-secondary pt-4">
                                        <button
                                            className="btn btn-outline-light px-5 py-2"
                                            type="submit"
                                            disabled={saving}
                                        >
                                            {saving ? "Saving..." : "Update Profile"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
