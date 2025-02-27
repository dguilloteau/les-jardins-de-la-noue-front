import { AxiosError } from "axios";
import { FormItem, FormItemImage, FormItemList, FormItemQuestion, FormItemText, Formulaire, TypeFormulaire } from "../models/DtoStructures";
import { FormItemReturn } from "../models/FunctionsReturn";


function getFormItem(formItems: FormItem[], name: string): FormItemReturn {
  const formItem = formItems.filter((item) => item.name === name)[0];
  switch (formItem.name) {
    case "ENTETE":
    case "COMPOSITION":
      return formItem as FormItemText;
    case "IMAGE_BANDEAU":
    case "LOCALISATION":
      return formItem as FormItemImage;
    case "E_MAIL":
    case "NOM_PRENOM":
      return formItem as FormItemQuestion;
    case "PANIER":
    case "CAGETTE":
    case "FORMULE":
      return formItem as FormItemList;
    default:
      return null;
  }
}

export function getFormItemOfTypeFormulaire(typeFormulaire: TypeFormulaire, name: string): FormItemReturn {
  return getFormItem(typeFormulaire.formItems, name);
}

export function getFormItemOfFormulaire(formulaire: Formulaire, name: string): FormItemReturn {
  return getFormItem(formulaire.typeFormulaire.formItems, name);
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
