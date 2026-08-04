import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { City } from "../Models/City";
import { db } from "../Firebase";
import { toast } from "react-toastify";

const dbPath = "cities"
class CityService {

    async add(data) {
        const newCity = new City()
        newCity.name = data.name
        newCity.imageUrl = data.imageUrl

        const docRef = await addDoc(collection(db, dbPath), {
            ...newCity
        })
        return newCity
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
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            return cities;
        } catch (error) {
            console.error("Error fetching cities: ", error);
            toast.error("Failed to fetch cities!");
            return [];
        }
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
