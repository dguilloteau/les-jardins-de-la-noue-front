import Container from '../Container';
import SelectionType from "../SelectionType"
import SaisieTitre from "../SaisieTitre"
import CheckBoxType from "../CheckBoxType"
import ListSelect from "../ListSelect"
import ListFormulaires from "../ListFormulaires"

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