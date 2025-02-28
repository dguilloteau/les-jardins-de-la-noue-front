import AjouterFormulaire from "../buttons/AjouterFormulaire";
import Card from "../Card";
import CheckBoxType from "../CheckBoxType";
import Container from "../Container";
import ListFormulaires from "../ListFormulaires";
import ListSelect from "../ListSelect";
import SaisieTitre from "../SaisieTitre";
import SelectionType from "../SelectionType";


const Gestion = () => {
  return (
    <Container title="Gestionnaire de formulaires">
      <Card>
        <SelectionType />
        <CheckBoxType />
        <SaisieTitre />
        <AjouterFormulaire />
      </Card>
      <ListSelect />
      <ListFormulaires />
    </Container>
  );
};

export default Gestion;