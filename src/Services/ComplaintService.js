import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { Complaint } from "../Models/Complaint";
import { db } from "../Firebase";
import { toast } from "react-toastify";

const dbPath = "complaints"
class ComplaintService {

    async add(data) {
        const newComplaint = new Complaint()
        newComplaint.userId = data.userId
        newComplaint.cityId = data.cityId
        newComplaint.wardId = data.wardId
        newComplaint.categoryId = data.categoryId
        newComplaint.title = data.title
        newComplaint.description = data.description
        newComplaint.complaintImageUrl = data.complaintImageUrl
        newComplaint.resolutionProofUrl = ""
        newComplaint.adminRemark = ""
        newComplaint.complaintStatus = "Pending"

        const docRef = await addDoc(collection(db, dbPath), {
            ...newComplaint
        })
        return newComplaint
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
            const complaints = [];
            querySnapshot.forEach((doc) => {
                complaints.push({ id: doc.id, ...doc.data() });
            });
            return complaints;
        } catch (error) {
            console.error("Error fetching complaints: ", error);
            toast.error("Failed to fetch complaints!");
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
        const complaintRef = doc(db, dbPath, id);
        return await updateDoc(complaintRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}

export default new ComplaintService()
