
import axios from "axios";
import { useCookies } from "react-cookie";

const baseURL = import.meta.env.VITE_BASE_API_URL


export const api = axios.create({
    baseURL,
})