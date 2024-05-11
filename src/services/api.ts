import axios, { AxiosInstance } from "axios";
const myId = "client_id=_WWa1HF55UmSelE5fk8CKreEnNP0hpyz0IMlvSGKod8";

export const api:AxiosInstance = axios.create({ baseURL: 'https://api.unsplash.com' });

export const requestPhotosByQuery = async <T> (query: string, page: number): Promise<T> => {
    const {data}= await api.get(`/search/photos?page=${page}&orientation=landscape&per_page=${9}&query=${query}&${myId}`)
    return data
}