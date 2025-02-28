import { FormState } from "../models/DtoStructures";
import { getAllFormulaires } from "../services/FormulairesService";
import { getAllTypesFormulaires, getTypeFormulaire } from "../services/TypesFormulairesService";


const typesFormulaires = await getAllTypesFormulaires();
const selectedTypeFormulaire = await getTypeFormulaire(1);
const fomulaires = await getAllFormulaires();
const options = ["Tous", "A créer/modifier"];
const selectedOption = "Tous";

export const initializeState: FormState = {
  typesFormulaires,
  selectedTypeFormulaire,
  lignesAffichees: fomulaires,
  all: fomulaires,
  options,
  selectedOption,
};