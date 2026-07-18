import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import CategoryService from "../../../services/CategoryService"
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'
// About page component
export default function ManageCategory() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

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
                            <h3> Categories List</h3>
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/category/add">
                                <button className="btn btn-sm btn-primary text-light">+Add Category</button>
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
                                                    <th scope="col">Name</th>
                                                    <th scope="col">image</th>
                                                   
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

                                                                <img src={category.imageUrl} alt="" style={{
                                                                    height:"100px",
                                                                    borderRadius :"50%"
                                                                }} />
                                                            </td>
                                                            

                                                            <td>
                                                                <Link to={`/admin/category/edit/${category.id}`}>


                                                                    <button className="btn btn-sm btn-primary">
                                                                        Edit
                                                                    </button>
                                                                </Link>



                                                                &nbsp;
                                                                <button className="btn btn-sm btn-danger" onClick={
                                                                    ()=>{
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
        </>


    )
}


