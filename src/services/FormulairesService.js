import axios from 'axios';
import { afficheAlerte } from "../Utils"

const DEFAULT_TIMEOUT = 2000;

const axiosInstance = axios.create({
    baseURL: "http://localhost:9000/formulaire",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    timeout: DEFAULT_TIMEOUT,
    // data: null,
});

axiosInstance.interceptors.request.use(function (config) {
    console.log("call " + config.method + " " + config.baseURL + config.url);
    if (config.data !== undefined) {
        console.log(config.data);
    }

    if (config.timeout > DEFAULT_TIMEOUT) {
        // spinning start to show
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add('loading-indicator');
    }

    return config
}, function (error) {
    document.body.classList.remove('loading-indicator');
    throw error;
});

axiosInstance.interceptors.response.use(function (response) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');

    console.log("return " + response.config.method + " " + response.config.baseURL + response.config.url + " " + response.status + " " + response.statusText);
    console.log(response.data);
    return response;
}, function (error) {
    document.body.classList.remove('loading-indicator');
    throw error;
});



/**
 * 
 * @returns Formulaires Tous les formulaires 
 */
export async function getAllFormulaires() {
    return await axiosInstance.get('/all', { timeout: 10000 })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("getAllFormulaires error = ", error);
            return null;
        });
}

/**
 * Créer un formulaire
 * @param {*} formulaire
 * @returns 
 */
export async function postFormulaire(formulaire) {
    return await axiosInstance.post('/create', formulaire, { timeout: 10000 })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("postFormulaire error = ", error);
            return null;
        });
}