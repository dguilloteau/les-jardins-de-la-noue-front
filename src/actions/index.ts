import { FormItem, Formulaire, TypeFormulaire } from "../models/DtoStructures";


// Define action types as an enum to ensure consistency and prevent typos
export enum ActionTypes {
    // eslint-disable-next-line no-unused-vars
    UPDATE_SELECTED_TYPE_FORMULAIRE = "updateSelectedTypeFormulaire",
    // eslint-disable-next-line no-unused-vars
    UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE = "updateFormItemOfSelectedTypeFormulaire",
    // eslint-disable-next-line no-unused-vars
    ADD_FORMULAIRE_TO_LIST = "addFormulaireToList",
    // eslint-disable-next-line no-unused-vars
    UPDATE_LIST_SELECT_OPTION = "updateListSelectOption",
    // eslint-disable-next-line no-unused-vars
    CREER_FORMULAIRE = "creerFormulaire"
}

// Define interface for each action type to enforce type safety
interface UpdateSelectedTypeFormulaireAction {
    type: ActionTypes.UPDATE_SELECTED_TYPE_FORMULAIRE;
    payload: TypeFormulaire;
};

interface UpdateFormItemOfSelectedTypeFormulaireAction {
    type: ActionTypes.UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE;
    payload: FormItem;
};

interface AddFormulaireToListAction {
    type: ActionTypes.ADD_FORMULAIRE_TO_LIST;
    payload: Formulaire;
};

interface UpdateListSelectOptionAction {
    type: ActionTypes.UPDATE_LIST_SELECT_OPTION;
    payload: string;
};

interface CreerFormulaireAction {
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