import { AxiosError } from "axios";
import { FormItem, Formulaire, TypeFormulaire } from "../models/DtoStructures";


function getFormItem<T>(formItems: FormItem[], name: string): T {
  return formItems.filter((item) => item.name === name)[0] as T;
}

export function getFormItemOfTypeFormulaire<T>(typeFormulaire: TypeFormulaire, name: string): T {
  return getFormItem<T>(typeFormulaire.formItems, name);
}

export function getFormItemOfFormulaire<T>(formulaire: Formulaire, name: string): T {
  return getFormItem<T>(formulaire.typeFormulaire.formItems, name);
}

export function afficheAlerte(message: string, error: AxiosError) {
  if (error.response === undefined) {
    console.log(message, error);
    alert(error);
  } else {
    const response = error.response;
    console.log(message, response);
    const erreur = "Erreur " + response.status + " " + response.statusText + " : " + response.data;
    alert(erreur);
  }
}

export function triAscById(a: { id: number; }, b: { id: number; }) {
  return a.id - b.id;
}

export function triListeRecentVersAncien(a: Formulaire, b: Formulaire) {
  return new Date(a.dateDerniereModif).getTime() - new Date(b.dateDerniereModif).getTime();
}
