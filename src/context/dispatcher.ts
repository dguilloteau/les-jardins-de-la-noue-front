import { ActionTypes, FormActions } from "../actions";
import { FormItem, Formulaire, TypeFormulaire } from "../models/DtoStructures";
import { postFormulaire } from "../services/FormulairesService";
import { patchTypeFormulaire } from "../services/TypesFormulairesService";


export function updateFormItemOfSelectedTypeFormulaire(dispatch: React.Dispatch<FormActions>, formItem: FormItem) {
    dispatch({ type: ActionTypes.UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE, payload: formItem })
    return patchTypeFormulaire(formItem);
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
    postFormulaire(formulaire).then((newformulaire) =>
        dispatch({ type: ActionTypes.CREER_FORMULAIRE, payload: { oldFormId: formulaire.formId, formulaire: newformulaire } })
    );
}

