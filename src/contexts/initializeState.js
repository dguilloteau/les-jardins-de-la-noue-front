import { getTypeFormulaire, getAllTypesFormulaires } from "../services/TypesFormulairesService"
import { getAllFormulaires } from "../services/FormulairesService"


const typesFormulaires = await getAllTypesFormulaires();
const selectedTypeFormulaire = await getTypeFormulaire(1);
const fomulaires = await getAllFormulaires();
const options = ["Tous", "A créer/modifier"];
const selectedOption = "Tous";

export const initializeState = {
  typesFormulaires,
  selectedTypeFormulaire,
  lignesAffichees: fomulaires,
  all: fomulaires,
  options,
  selectedOption,
}