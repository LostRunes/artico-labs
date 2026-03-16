import { BACKEND_URL } from "@/constants";
import axios, {type AxiosRequestConfig} from "axios";

const options: AxiosRequestConfig = {
    baseURL: BACKEND_URL
}

const axiosInstance = axios.create(options);
export default axiosInstance;