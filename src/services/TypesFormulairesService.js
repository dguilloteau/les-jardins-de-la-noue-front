import axios from 'axios';
import { afficheAlerte } from "../Utils"

const DEFAULT_TIMEOUT = 2000;

const axiosInstance = axios.create({
    baseURL: "http://localhost:9000/formulaire/types",
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
 * Retourne tous les types de formulaires existants
 * @returns TypesFormulaires
 */
export async function getAllTypesFormulaires() {
    return await axiosInstance.get('/all')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("getAllTypesFormulaires error = ", error);
            return null;
        });
}

/**
 * Retourne un type de formulaire selon son id
 * @param id du type de formulaire à retourner
 * @returns TypeFormulaire
 */
export async function getTypeFormulaire(idType) {
    return await axiosInstance.get('/' + idType)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("getSelectedTypeFormulaire " + idType + " error = ", error);
            return null;
        });
}

/**
 * Check l'item du type de formulaire à modifier
 * @param {*} formItem de l'item du type de formulaire à modifier
 * @returns 
 */
export async function patchTypeFormulaire(formItem) {
    return await axiosInstance.patch('/patch', formItem)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("patchTypeFormulaire " + formItem.name + " error = ", error);
            return null;
        });
}


