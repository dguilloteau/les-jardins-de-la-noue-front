export interface FormItem {
    id: number;
    itemId: string;
    name: string;
    libelle: string;
    checked: boolean;
}

export interface FormItemImage extends FormItem {
    titre: string;
    imageUri: string;
}

export interface FormItemListElement {
    id: number;
    imageUri: string;
    libelleChoix: string;
}

export interface FormItemList extends FormItem {
    titre: string;
    type: string;
    listeChoix: FormItemListElement[];
}

export interface FormItemQuestion extends FormItem {
    titre: string;
}

export interface FormItemText extends FormItem {
    titre: string;
    texte: string;
}

export interface TypeFormulaire {
    id: number;
    defaut: boolean;
    type: string;
    formItems: FormItem[];
}

export interface Formulaire {
    id: number;
    formId: string;
    typeFormulaire: TypeFormulaire;
    dateDerniereModif: string;
    created: boolean;
    done: boolean;
}

export interface FormState {
    typesFormulaires: TypeFormulaire[];
    selectedTypeFormulaire: TypeFormulaire;
    lignesAffichees: Formulaire[];
    all: Formulaire[];
    options: string[];
    selectedOption: string;
}

export default FormState;