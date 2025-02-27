import CheckBoxType from "../CheckBoxType";
import Container from '../Container';
import ListFormulaires from "../ListFormulaires";
import ListSelect from "../ListSelect";
import SaisieTitre from "../SaisieTitre";
import SelectionType from "../SelectionType";


function Gestion() {
  return (
    <Container title="Gestionnaire de formulaires">
      <SelectionType />
      <CheckBoxType />
      <SaisieTitre />
      <ListSelect />
      <ListFormulaires />
    </Container>
  )
}

export default Gestion;