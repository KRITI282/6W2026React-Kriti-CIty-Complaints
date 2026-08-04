import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { Contact } from "../Models/Contact";
import { db } from "../Firebase";
import { toast } from "react-toastify";

const dbPath = "contacts"

class ContactService {

    async add(data) {
        const newContact = new Contact()
        newContact.name = data.name
        newContact.email = data.email
        newContact.phone = data.phone
        newContact.subject = data.subject
        newContact.message = data.message
        newContact.createdAt = new Date().toISOString()
        const docRef = await addDoc(collection(db, dbPath), {
            ...newContact
        })
        return newContact
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
            const contacts = [];
            querySnapshot.forEach((doc) => {
                contacts.push({ id: doc.id, ...doc.data() });
            });
         
            return contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } catch (error) {
            console.error("Error fetching contacts: ", error);
            toast.error("Failed to fetch contacts!");
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
        const contactRef = doc(db, dbPath, id);
        return await updateDoc(contactRef, payload);
    }

    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}

export default new ContactService()
