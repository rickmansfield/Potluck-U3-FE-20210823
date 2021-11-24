import axios from "axios";
import { API_BASE_URL } from '../components/constants';

 export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: API_BASE_URL,
        headers: {
            // "Content-Type": "application/json",
            Authorization: `${token}`,
            
        },
    });
};
