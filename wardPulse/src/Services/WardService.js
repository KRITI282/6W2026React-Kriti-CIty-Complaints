import { addDoc, collection } from "firebase/firestore"
import { Ward } from "../Models/Ward"
import { db } from "../Firebase"
const dbPath="wards"

class WardService 
{
    async add(data) {
        // console.log(data);
        const newWard = new Ward()
        newWard.name = data.name
        newWard.cityId = data.cityId
        const docRef = await addDoc(collection(db, dbPath), {
            ...newWard
        })
        return newWard
    }
}
export default new WardService