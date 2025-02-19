import { useLocation } from "react-router";
import { formItem } from "../PropTypeValidation";
import Container from "../Container";
import FQuestion from "./Types/FQuestion";
import FImage from "./Types/FImage";
import FText from "./Types/FText";
import FList from "./Types/FList";

ViewType.propTypes = {
  formItem
};

function ViewType({ formItem }) {
  switch (formItem.name) {
    case 'ENTETE':
      return (<FText formItem={formItem} />);
    case 'IMAGE_BANDEAU':
      return (<FImage formItem={formItem} />);
    case 'E_MAIL':
      return (<FQuestion formItem={formItem} />);
    case 'NOM_PRENOM':
      return (<FQuestion formItem={formItem} />);
    case 'PANIER':
      return (<FList formItem={formItem} />);
    case 'LOCALISATION':
      return (<FImage formItem={formItem} />);
    case 'CAGETTE':
      return (<FList formItem={formItem} />);
    case 'FORMULE':
      return (<FList formItem={formItem} />);
    case 'COMPOSITION':
      return (<FText formItem={formItem} />);
    default:
      return 'foo';
  }
}

function Types() {
  const location = useLocation();
  const { formItem } = location.state;

  return (
    <Container title={`Modification de ${formItem.libelle}`}>
      <ViewType formItem={formItem} />
    </Container>
  )
}

export default Types;