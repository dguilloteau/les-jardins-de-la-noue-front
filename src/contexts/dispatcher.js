import { patchTypeFormulaire } from "../services/TypesFormulairesService"
import { postFormulaire } from "../services/FormulairesService"
import {
    UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE,
    UPDATE_SELECTED_TYPE_FORMULAIRE,
    ADD_FORMULAIRE_TO_LIST,
    UPDATE_LIST_SELECT_OPTION,
    CREER_FORMULAIRE
} from "./context"

export function updateFormItemOfSelectedTypeFormulaire(dispatch, formItem) {
    patchTypeFormulaire(formItem).then(
        dispatch({ type: UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE, payload: { formItem } })
    );
}

export function updateSelectedTypeFormulaire(dispatch, selectedTypeFormulaire) {
    dispatch({ type: UPDATE_SELECTED_TYPE_FORMULAIRE, payload: { selectedTypeFormulaire } });
}

export function updateListSelectOption(dispatch, selectedOption) {
    dispatch({ type: UPDATE_LIST_SELECT_OPTION, payload: { selectedOption } });
}

export function addFormulaireToList(dispatch, formulaire) {
    dispatch({ type: ADD_FORMULAIRE_TO_LIST, payload: { formulaire } });
}

export function creerFormulaire(dispatch, formulaire) {
    postFormulaire(formulaire).then((newformulaire) =>
        dispatch({ type: CREER_FORMULAIRE, payload: { oldFormId: formulaire.formId, formulaire: newformulaire } })
    );

}
