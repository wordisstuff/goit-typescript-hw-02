import axios from "axios";
const myId = "client_id=_WWa1HF55UmSelE5fk8CKreEnNP0hpyz0IMlvSGKod8";
// const myId = "/?wordisstuff"

export const api = axios.create({ baseURL: 'https://api.unsplash.com' });

// export const requestProducts = async () => {
//     const  {data}  = await api.get(`/photos?${myId}`)
//     console.log(data)
//     return data
// }

export const requestPhotosByQuery = async (query = "", page = 1) => {
    const {data}= await api.get(`/search/photos?page=${page}&orientation=landscape&per_page=${9}&query=${query}&${myId}`)
    return data
}