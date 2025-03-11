import axios from "axios";
import { Client } from "../models/DtoStructures";
import { afficheAlerte } from "../utils/Utils";
import { DEFAULT_TIMEOUT, setupInterceptorsTo } from "./axioInterceptor";

const axiosInstance = setupInterceptorsTo(axios.create({
    baseURL: "http://localhost:9000/formulaire/clients",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: DEFAULT_TIMEOUT,
    // data: null,
}));

/**
 * Ajoute un client pour un type de formulaire
 * @param {*} idType du type de formulaire
 * @param {*} client du type de formulaire
 * @returns
 */
export async function postClientTypeFormulaire(idType: number, client: Client): Promise<Client> {
    return await axiosInstance.post("/ofType/" + idType, client)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("postClientTypeFormulaire " + client.id + " error = ", error);
            return null;
        });
}

/**
 * Suppression d'un client dans un type de formulaire car il a un id par type de formulaire.
 * @param idClient du client à supprimer
 * @returns OK ou null
 */
export async function deleteClientTypeFormulaire(idClient: number): Promise<string> {
    return await axiosInstance.delete("/client/" + idClient)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("deleteClientTypeFormulaire " + idClient + " error = ", error);
            return null;
        });
}

/**
 * Modification d'un client
 * @param client à modifier
 * @returns OK ou null
 */
export async function patchClientTypeFormulaire(client: Client): Promise<string> {
    return await axiosInstance.patch("/client", client)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("deleteClientTypeFormulaire " + client.email + " error = ", error);
            return null;
        });
}
