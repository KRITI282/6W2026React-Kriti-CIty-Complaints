import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Category } from "../models/Category";
import { db } from "../Firebase";
const dbPath = "categories"
import { toast } from "react-toastify";

class CategoryService {
    async add(data) {
        // console.log(data);
        const newCategory = new Category()
        newCategory.name = data.name
        newCategory.imageUrl = data.imageUrl
 
        const docRef = await addDoc(collection(db, dbPath), {
            ...newCategory
        })
        return newCategory
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
        const categoryRef = doc(db, dbPath, id);
        return await updateDoc(categoryRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}



export default new CategoryService()

