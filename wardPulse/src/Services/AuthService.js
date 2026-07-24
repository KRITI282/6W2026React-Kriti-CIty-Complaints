import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

class AuthService {

    setData(data) {
        localStorage.setItem("email", data.email)
        localStorage.setItem("uid", data.uid)
        localStorage.setItem("name", data.name)
        localStorage.setItem("userType", data.userType)

    }

    getUserType() {
        return localStorage.getItem("userType")
    }
    getId() {
        return localStorage.getItem("uid")
    }
    getEmail() {
        return localStorage.getItem("email")
    }


    logout() {
        localStorage.clear()
        sessionStorage.clear()
        signOut(auth)
    }




}



export default new AuthService()

