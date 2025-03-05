import axios from "axios";
import { DEFAULT_TIMEOUT, setupInterceptorsTo } from "./axioInterceptor";
import { afficheAlerte } from "../utils/Utils";

const axiosInstance = setupInterceptorsTo(axios.create({
    baseURL: "http://localhost:9000/formulaire/mail",
    headers: {
        "Accept": "text/html",
        "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: DEFAULT_TIMEOUT,
    // data: null,
}));

/**
 * Retourne la représentation html d'un formulaire envoyé par mail
 * @param formId du formulaire
 * @returns représentation html
 */
export async function getMailRender(formId: string): Promise<string> {
    return await axiosInstance.get("/render/" + formId)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            afficheAlerte("getMailRender " + formId + " error = ", error);
            return null;
        });
}