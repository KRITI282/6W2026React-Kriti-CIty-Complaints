import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { City } from "../Models/City";
import { db } from "../Firebase";
const dbPath = "cities"
import { toast } from "react-toastify";

class CityService {
    async add(data) {
        // console.log(data);
        const newCity = new City()
        newCity.name = data.name
        newCity. imageUrl = data.imageUrl
 
        const docRef = await addDoc(collection(db, dbPath), {
            ...newCity
        })
        return newCity
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, dbPath));
        var categories = []
        querySnapshot.forEach((doc) => {
            categories.push({ id: doc.id, ...doc.data() })
        });
        return categories;
    }


    async single(id) {
        const docRef = doc(db, dbPath, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }

        } else {
            toast.error("No such document!");
            console.log("No such document!");
            return false
        }
    }

    async update(id, payload) {
        const CityRef = doc(db, dbPath, id);
        return await updateDoc(CityRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}



export default new CityService()

