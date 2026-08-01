import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { User } from "../Models/User"
import AuthService from "./AuthService"
import { auth, db } from "../Firebase"
const dbPath = "users"



class UserService {


    async register(data) {
        let userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const newUser = new  User()
        newUser.name = data.name
        newUser.contact = data.contact
        newUser.email = data.email
        newUser.uid = userCredential.user.uid
        const docRef = await setDoc(doc(db, dbPath, userCredential.user.uid), {
            ...newUser
        })
        return newUser
    }



    async login(data) {
        let userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        const docRef = doc(db, dbPath, userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let user = docSnap.data()
            let authData = {
                name  : user.name,
                email  : user.email,
                uid  : user.uid,
                userType  : user.userType
            }
            AuthService.setData(authData)
            return user
        } else {
            toast.error("No such document!");
            console.log("No such document!");
            return false
        }
    }
}



export default new UserService()

