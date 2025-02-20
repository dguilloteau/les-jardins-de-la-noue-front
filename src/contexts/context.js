import { createContext, useContext, useReducer } from "react";
import { initializeState } from "./initializeState"

export const PageContext = createContext();
const { Provider, Consumer } = PageContext;

export const UPDATE_SELECTED_TYPE_FORMULAIRE = "updateSelectedTypeFormulaire";
export const UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE = "updateFormItemOfSelectedTypeFormulaire";
export const ADD_FORMULAIRE_TO_LIST = "addFormulaireToList";
export const UPDATE_LIST_SELECT_OPTION = "updateListSelectOption";
export const CREER_FORMULAIRE = "creerFormulaire";

function lignesFilter(selectedOption, lignes) {
  if (selectedOption !== "Tous") {
    return lignes.filter((item) => item.done === false);
  } else {
    return lignes
  }
}

function addFormulaireToList(state, formulaire) {
  let updatedLignes = [...state.all, formulaire];

  return {
    ...state,
    lignesAffichees: lignesFilter(state.selectedOption, updatedLignes),
    all: updatedLignes,
  };
}

function updateFormItemOfSelectedTypeFormulaire(state, formItem) {
  let formItems = state.selectedTypeFormulaire.formItems.map((item) =>
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

function updateSelectedTypeFormulaire(state, selectedTypeFormulaire) {
  return {
    ...state,
    selectedTypeFormulaire,
  };
}

function updateListSelectOption(state, selectedOption) {
  return {
    ...state,
    lignesAffichees: lignesFilter(selectedOption, state.all),
    selectedOption,
  };
}

function creerFormulaire(state, payload) {
  let updatedLignes = state.all.map((ligne) =>
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

export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_SELECTED_TYPE_FORMULAIRE:
      {
        return updateSelectedTypeFormulaire(state, action.payload.selectedTypeFormulaire);
      }
    case UPDATE_FORM_ITEM_OF_SELECTED_TYPE_FORMULAIRE:
      {
        return updateFormItemOfSelectedTypeFormulaire(state, action.payload.formItem);
      }
    case ADD_FORMULAIRE_TO_LIST:
      {
        return addFormulaireToList(state, action.payload.formulaire);
      }
    case UPDATE_LIST_SELECT_OPTION:
      {
        return updateListSelectOption(state, action.payload.selectedOption);
      }
    case CREER_FORMULAIRE:
      {
        return creerFormulaire(state, action.payload);
      }
    case "submitModifierFormulaire":
      {
        return {
          ...state,
        }
      }
    default:
      {
        throw Error('Unknown action: ' + action.type);
      }
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppConsumer = ({ children }) => {
  return <Consumer>{(value) => children(value)}</Consumer>;
};

export const withContext = (Component) => (props) => {
  return <Consumer>{(value) => <Component {...value} {...props} />}</Consumer>;
};

// Custom hook
export const useAppContext = () => {
  return useContext(PageContext);
};

export default AppProvider;
