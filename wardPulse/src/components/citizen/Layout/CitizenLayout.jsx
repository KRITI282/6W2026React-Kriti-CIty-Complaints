import { Outlet } from "react-router-dom";
import CitizenFooter from "./CitizenFooter";
import CitizenHeader from "./CitizenHeader";

export default function CitizenLayout()
{
    return(
    <>
    <CitizenHeader/>
    <Outlet/>
    <CitizenFooter/>
    </>

    )
}