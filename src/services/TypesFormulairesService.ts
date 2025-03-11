import axios from "axios";
import { FormItem, TypeFormulaire } from "../models/DtoStructures";
import { afficheAlerte } from "../utils/Utils";
import { DEFAULT_TIMEOUT, setupInterceptorsTo } from "./axioInterceptor";


const axiosInstance = setupInterceptorsTo(axios.create({
    baseURL: "http://localhost:9000/formulaire/types",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: DEFAULT_TIMEOUT,
    // data: null,
}));

/**
 * Retourne tous les types de formulaires existants
 * @returns TypesFormulaires
 */
export async function getAllTypesFormulaires(): Promise<TypeFormulaire[]> {
    return await axiosInstance.get("/all")
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
export async function getTypeFormulaire(idType: number): Promise<TypeFormulaire> {
    return await axiosInstance.get("/" + idType)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("getSelectedTypeFormulaire " + idType + " error = ", error);
            return null;
        });
}

/**
 * Met à jour le formItem du type de formulaire à modifier
 * @param {*} formItem de l'item du type de formulaire à modifier
 * @returns
 */
export async function patchFormItemTypeFormulaire(formItem: FormItem): Promise<string> {
    return await axiosInstance.patch("/formItem", formItem)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("patchFormItemTypeFormulaire " + formItem.name + " error = ", error);
            return null;
        });
}
