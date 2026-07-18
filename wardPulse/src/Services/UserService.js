import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase";
import { User } from "../Models/User";
const dbPath = "users"

class UserService {
    async add(data) {
        // console.log(data);
        const newUser = new User()
        newUser.name = data.name
        newUser.email = data.email
        newUser.phone = data.phone
        newUser.address = data.address
        newUser.profileImage = data.profileImage
        newUser.userType = data.userType
        
        const docRef = await addDoc(collection(db, dbPath), {
            ...newUser
        })
        return newUser
    }
}
export default new UserService