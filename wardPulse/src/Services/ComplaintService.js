import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase";
import { Complaint } from "../Models/Complaint";
const dbPath="complaints"

class ComplaintService {
    async add(data) {
        // console.log(data);
        const newComplaint = new Complaint()
        newComplaint.userId = data.userId
        newComplaint.cityId = data.cityId
        newComplaint.wardId = data.wardId
        newComplaint.categoryId = data.categoryId
        newComplaint.title = data.title
        newComplaint.description = data.description
        newComplaint.resolutionProofUrl = data.resolutionProofUrl
        newComplaint.complaintStatus = data.complaintStatus
        newComplaint.adminRemark = data.adminRemark

        const docRef = await addDoc(collection(db, dbPath), {
            ...newComplaint
        })
        return newComplaint
    }
}
export default new ComplaintService
