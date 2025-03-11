import { ActionTypes, FormActions } from "../actions";
import { Client, FormItem, Formulaire, TypeFormulaire } from "../models/DtoStructures";
import { deleteClientTypeFormulaire, patchClientTypeFormulaire, postClientTypeFormulaire } from "../services/ClientsService";
import { postFormulaire } from "../services/FormulairesService";
import { patchFormItemTypeFormulaire } from "../services/TypesFormulairesService";


export function updateFormItemOfSelectedTypeFormulaire<T>(dispatch: React.Dispatch<FormActions>, formItem: T) {
    dispatch({ type: ActionTypes.UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE, payload: formItem as FormItem });
    return patchFormItemTypeFormulaire(formItem as FormItem);
}

export function updateSelectedTypeFormulaire(dispatch: React.Dispatch<FormActions>, selectedTypeFormulaire: TypeFormulaire) {
    dispatch({ type: ActionTypes.UPDATE_SELECTED_TYPE_FORMULAIRE, payload: selectedTypeFormulaire });
}

export function updateListSelectOption(dispatch: React.Dispatch<FormActions>, selectedOption: string) {
    dispatch({ type: ActionTypes.UPDATE_LIST_SELECT_OPTION, payload: selectedOption });
}

export function addFormulaireToList(dispatch: React.Dispatch<FormActions>, formulaire: Formulaire) {
    dispatch({ type: ActionTypes.ADD_FORMULAIRE_TO_LIST, payload: formulaire });
}

export function creerFormulaire(dispatch: React.Dispatch<FormActions>, formulaire: Formulaire) {
    postFormulaire(formulaire).then((newformulaire) => {
        if (newformulaire !== null) {
            dispatch({ type: ActionTypes.CREER_FORMULAIRE, payload: { oldFormId: formulaire.formId, formulaire: newformulaire } });
        }
    });
}

export function addClientToSelectedTypeFormulaire(dispatch: React.Dispatch<FormActions>, idType: number, newClient: Client) {
    postClientTypeFormulaire(idType, newClient).then((client) => {
        if (client !== null) {
            dispatch({ type: ActionTypes.ADD_CLIENT_TO_SELECTED_TYPE_FORMULAIRE, payload: client });
        }
    });
}

export function patchClientToSelectedTypeFormulaire(dispatch: React.Dispatch<FormActions>, client: Client) {
    patchClientTypeFormulaire(client).then((res) => {
        if (res !== null) {
            dispatch({ type: ActionTypes.UPDATE_CLIENT_TO_SELECTED_TYPE_FORMULAIRE, payload: client });
        }
    });
}

export function deleteClientToSelectedTypeFormulaire(dispatch: React.Dispatch<FormActions>, idClient: number) {
    deleteClientTypeFormulaire(idClient).then((res) => {
        if (res !== null) {
            dispatch({ type: ActionTypes.DELETE_CLIENT_TO_SELECTED_TYPE_FORMULAIRE, payload: idClient });
        }
    });
}

export function updateSelectedClient(dispatch: React.Dispatch<FormActions>, client: Client | undefined) {
    dispatch({ type: ActionTypes.UPDATE_SELECTED_CLIENT, payload: client });
}
