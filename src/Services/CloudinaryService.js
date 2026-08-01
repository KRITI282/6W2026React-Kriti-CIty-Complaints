import axios from "axios"
const cloudName = "dzzlrvdsy"
const upload_preset = "images"
const folder = "6w2026"
const upload_url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`


class CloudinaryService {

    async upload(file) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", upload_preset)
        formData.append("folder", folder)
        const result = await axios.post(upload_url,formData)
        return result.data.secure_url
    }

}



export default new CloudinaryService()

