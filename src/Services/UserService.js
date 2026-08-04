import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
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
        newUser.phone = data.phone
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


     async all(payload) {
            try {
                let q = collection(db, dbPath);
                if (payload) {
                    for (let key in payload) {
                        let value = payload[key];
                        if (value) {
                            q = query(q, where(key, "==", value));
                        }
                    }
                }
                const querySnapshot = await getDocs(q);
                const users = [];
                querySnapshot.forEach((doc) => {
                    users.push({ id: doc.id, ...doc.data() });
                });
                return users;
            } catch (error) {
                console.error("Error fetching users: ", error);
                toast.error("Failed to fetch users!");
                return [];
            }
        }
    async single(id) {
        const docRef = doc(db, dbPath, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            return false
        }
    }

    async update(id, payload) {
        const UserRef = doc(db, dbPath, id);
        return await updateDoc(UserRef, payload);
    }
}


export default new UserService()

