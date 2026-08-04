import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { Ward } from "../Models/Ward"
import { db } from "../Firebase"
import { toast } from "react-toastify"
const dbPath = "wards"

class WardService {
    async add(data) {
        const newWard = new Ward()
        newWard.name = data.name
        newWard.cityId = data.cityId
        const docRef = await addDoc(collection(db, dbPath), {
            ...newWard
        })
        return newWard
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
            const wards = [];
            querySnapshot.forEach((doc) => {
                wards.push({ id: doc.id, ...doc.data() });
            });
            return wards;
        } catch (error) {
            console.error("Error fetching wards: ", error);
            toast.error("Failed to fetch wards!");
            return [];
        }
    }

    async allByCity(cityId) {
        const q = query(collection(db, dbPath), where("cityId", "==", cityId));
        const querySnapshot = await getDocs(q);
        var wards = []
        querySnapshot.forEach((doc) => {
            wards.push({ id: doc.id, ...doc.data() })
        });
        return wards;
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
        const WardRef = doc(db, dbPath, id);
        return await updateDoc(WardRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}
export default new WardService();