import PropTypes from 'prop-types';


const FTEXT = {
    id: PropTypes.string,
    name: PropTypes.string,
    libelle: PropTypes.string,
    checked: PropTypes.bool,
    titre: PropTypes.string,
    text: PropTypes.string,
};

const FIMAGE = {
    id: PropTypes.string,
    name: PropTypes.string,
    libelle: PropTypes.string,
    checked: PropTypes.bool,
    titre: PropTypes.string,
    imageUri: PropTypes.string,
};

const FQUESTION = {
    id: PropTypes.string,
    name: PropTypes.string,
    libelle: PropTypes.string,
    checked: PropTypes.bool,
    titre: PropTypes.string,
};

const FLIST = {
    id: PropTypes.string,
    name: PropTypes.string,
    libelle: PropTypes.string,
    checked: PropTypes.bool,
    titre: PropTypes.string,
    type: PropTypes.string,
    listeChoix: PropTypes.arrayOf(PropTypes.object),
};

const ENTETE = FTEXT;
const IMAGE_BANDEAU = FIMAGE;
const E_MAIL = FQUESTION;
const NOM_PRENOM = FQUESTION;
const PANIER = FLIST;
const LOCALISATION = FIMAGE;
const CAGETTE = FLIST;
const FORMULE = FLIST;
const COMPOSITION = FTEXT;

export const formItem = PropTypes.oneOf([
    ENTETE,
    IMAGE_BANDEAU,
    E_MAIL,
    NOM_PRENOM,
    PANIER,
    LOCALISATION,
    CAGETTE,
    FORMULE,
    COMPOSITION,
]);

export const typeFormulaire = {
    id: PropTypes.string,
    type: PropTypes.string,
    formItems: PropTypes.arrayOf(PropTypes.objectOf(formItem))
};

export const formulaire = {
    formId: PropTypes.string,
    typeFormulaire: PropTypes.shape(typeFormulaire),
    dateDerniereModif: PropTypes.string,
    created: PropTypes.bool,
    done: PropTypes.bool
};

