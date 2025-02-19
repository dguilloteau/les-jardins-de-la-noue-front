
export function getFormItem(formItems, name) {
  return formItems.filter(item => item.name === name)[0];
}

export function getFormItemOfFormulaire(formulaire, name) {
  return formulaire.typeFormulaire.formItems.filter(item => item.name === name)[0];
}

export function afficheAlerte(message, error) {
  if (error.response === undefined) {
    console.log(message, error);
    alert(error);
  } else {
    const response = error.response;
    console.log(message, response);
    const erreur = "Erreur " + response.status + " " + response.statusText + " : " + response.data;
    alert(erreur);
  }
}
