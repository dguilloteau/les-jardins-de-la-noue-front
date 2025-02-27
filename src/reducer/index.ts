import { ActionTypes, FormActions } from "../actions";
import { FormItem, FormState, Formulaire, TypeFormulaire } from "../models/DtoStructures";

function lignesFilter(selectedOption: string, lignes: Formulaire[]) {
  if (selectedOption !== "Tous") {
    return lignes.filter((item) => item.done === false);
  } else {
    return lignes
  }
}

function addFormulaireToList(state: FormState, formulaire: Formulaire) {
  const updatedLignes = [...state.all, formulaire];

  return {
    ...state,
    lignesAffichees: lignesFilter(state.selectedOption, updatedLignes),
    all: updatedLignes,
  };
}

function updateFormItemOfSelectedTypeFormulaire(state: FormState, formItem: FormItem) {
  const formItems = state.selectedTypeFormulaire.formItems.map((item) =>
    item.name === formItem.name
      ? formItem
      : item
  );

  return {
    ...state,
    selectedTypeFormulaire: {
      id: state.selectedTypeFormulaire.id,
      defaut: state.selectedTypeFormulaire.defaut,
      type: state.selectedTypeFormulaire.type,
      formItems
    }
  };
}

function updateSelectedTypeFormulaire(state: FormState, selectedTypeFormulaire: TypeFormulaire) {
  console.log(selectedTypeFormulaire)
  return {
    ...state,
    selectedTypeFormulaire,
  };
}

function updateListSelectOption(state: FormState, selectedOption: string) {
  return {
    ...state,
    lignesAffichees: lignesFilter(selectedOption, state.all),
    selectedOption,
  };
}

function creerFormulaire(state: FormState, payload: { oldFormId: string; formulaire: Formulaire; }) {
  const updatedLignes = state.all.map((ligne) =>
    ligne.formId === payload.oldFormId
      ? {
        ...ligne,
        id: payload.formulaire.id,
        formId: payload.formulaire.formId,
        typeFormulaire: payload.formulaire.typeFormulaire,
        dateDerniereModif: payload.formulaire.dateDerniereModif,
        created: payload.formulaire.created,
        done: payload.formulaire.done
      }
      : ligne
  );

  return {
    ...state,
    lignesAffichees: lignesFilter(state.selectedOption, updatedLignes),
    all: updatedLignes,
  };
}

export function reducer(state: FormState, action: FormActions) {
  switch (action.type) {
    case ActionTypes.UPDATE_SELECTED_TYPE_FORMULAIRE:
      {
        return updateSelectedTypeFormulaire(state, action.payload);
      }
    case ActionTypes.UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE:
      {
        return updateFormItemOfSelectedTypeFormulaire(state, action.payload);
      }
    case ActionTypes.ADD_FORMULAIRE_TO_LIST:
      {
        return addFormulaireToList(state, action.payload);
      }
    case ActionTypes.UPDATE_LIST_SELECT_OPTION:
      {
        return updateListSelectOption(state, action.payload);
      }
    case ActionTypes.CREER_FORMULAIRE:
      {
        return creerFormulaire(state, action.payload);
      }
    // case "submitModifierFormulaire":
    //   {
    //     return {
    //       ...state,
    //     }
    //   }
    default:
      {
        throw Error('Unknown action: ' + action);
      }
  }
}
