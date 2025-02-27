import { FormItem, Formulaire, TypeFormulaire } from "../models/DtoStructures";


// Define action types as an enum to ensure consistency and prevent typos
export enum ActionTypes {
    UPDATE_SELECTED_TYPE_FORMULAIRE = "updateSelectedTypeFormulaire",
    UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE = "updateFormItemOfSelectedTypeFormulaire",
    ADD_FORMULAIRE_TO_LIST = "addFormulaireToList",
    UPDATE_LIST_SELECT_OPTION = "updateListSelectOption",
    CREER_FORMULAIRE = "creerFormulaire"
}

// Define interface for each action type to enforce type safety
export interface UpdateSelectedTypeFormulaireAction {
    type: ActionTypes.UPDATE_SELECTED_TYPE_FORMULAIRE;
    payload: TypeFormulaire;
};

export interface UpdateFormItemOfSelectedTypeFormulaireAction {
    type: ActionTypes.UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE;
    payload: FormItem;
};

export interface AddFormulaireToListAction {
    type: ActionTypes.ADD_FORMULAIRE_TO_LIST;
    payload: Formulaire;
};

export interface UpdateListSelectOptionAction {
    type: ActionTypes.UPDATE_LIST_SELECT_OPTION;
    payload: string;
};

export interface CreerFormulaireAction {
    type: ActionTypes.CREER_FORMULAIRE;
    payload: { oldFormId: string; formulaire: Formulaire; };
};

// Define a union type Actions to represent all possible action types
export type FormActions =
    | UpdateSelectedTypeFormulaireAction
    | UpdateFormItemOfSelectedTypeFormulaireAction
    | AddFormulaireToListAction
    | UpdateListSelectOptionAction
    | CreerFormulaireAction;