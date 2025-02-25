import axios from "axios";

// API URL
const API = axios.create({
    baseURL: "https://fakestoreapi.com/",
    withCredentials: true,
});

// Get products
export const getProducts = async () => {
    return await API.get("/products");
}