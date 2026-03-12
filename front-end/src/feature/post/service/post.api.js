import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/posts",
  withCredentials: true,
});

export async function getfeed() {
  try {
    const response = await api.get("/feed");
    return response.data; // return only data
  } catch (error) {
    throw error;
  }
}
export async function postCreation(imageFile, caption){
  try{
    const formData = new FormData(); //This just creates an empty FormData object — like an empty container ready to hold data.
    formData.append('image',imageFile)
    formData.append('caption',caption)//You then add data to it using .append():
    const response = await api.post('/',formData);
    return response.data
  }catch(error){
    throw error;
  }
}