import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import CityService from "../../../services/CityService"
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'
// About page component
export default function ManageCity() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    const [Cities, setCities] = useState([])

    useEffect(() => {
        getAllCities()
    }, [])

    async function getAllCities() {
        try {
            setLoading(true)
            let res = await CityService.all()
            setCities(res)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }
    async function deleteCity(id) {
        try {
            setLoading(true)
            let res = await CityService.delete(id)
            getAllCities()
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)

        }


    }



    async function deleteCity(id) {
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
                    let res = await CityService.delete(id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    getAllCities()
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
                <h1 className="text-center text-white display-6">Manage Cities</h1>
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
                            <h3> Cities List</h3>
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/City/add">
                                <button className="btn btn-sm btn-primary text-light">+Add City</button>
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
                                                    Cities.map((City, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{City.name}</td>
                                                            <td>

                                                                <img src={City.image} alt="" style={{
                                                                    height:"100px",
                                                                    borderRadius :"50%"
                                                                }} />
                                                            </td>
                                                            

                                                            <td>
                                                                <Link to={`/admin/City/edit/${City.id}`}>


                                                                    <button className="btn btn-sm btn-primary">
                                                                        Edit
                                                                    </button>
                                                                </Link>



                                                                &nbsp;
                                                                <button className="btn btn-sm btn-danger" onClick={
                                                                    ()=>{
                                                                       deleteCity(City.id) 
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


