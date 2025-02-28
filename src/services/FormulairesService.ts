import axios from "axios";
import { Formulaire } from "../models/DtoStructures";
import { afficheAlerte } from "../utils/Utils";
import { DEFAULT_TIMEOUT, setupInterceptorsTo } from "./axioInterceptor";


const axiosInstance = setupInterceptorsTo(axios.create({
    baseURL: "http://localhost:9000/formulaire",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: DEFAULT_TIMEOUT,
    // data: null,
}));

/**
 *
 * @returns Formulaires Tous les formulaires
 */
export async function getAllFormulaires(): Promise<Formulaire[]> {
    return await axiosInstance.get("/all", { timeout: 10000 })
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
export async function postFormulaire(formulaire: Formulaire): Promise<Formulaire> {
    return await axiosInstance.post("/create", formulaire, { timeout: 10000 })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("postFormulaire error = ", error);
            return null;
        });
}