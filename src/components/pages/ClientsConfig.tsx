import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addClientToSelectedTypeFormulaire, patchClientToSelectedTypeFormulaire, updateSelectedClient } from "../../context/dispatcher";
import { useAppContext } from "../../context/useAppContext";
import QuitToRootPath from "../buttons/QuitToRootPass";
import ListClients from "../clients/ListClients";
import Container from "../Container";


const ClientsConfig = () => {
  const { state, dispatch } = useAppContext();
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  useEffect(() => {
    if (state.selectedClient !== undefined) {
      setEmail(state.selectedClient.email);
      setNom(state.selectedClient.nom);
      setPrenom(state.selectedClient.prenom);
    }
  }, [state.selectedClient]);

  const handleOnChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleOnChangeNom = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNom(e.target.value);
  };

  const handleOnChangePrenom = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrenom(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length > 0) {
      if (state.selectedClient === undefined) {
        addClientToSelectedTypeFormulaire(dispatch, state.selectedTypeFormulaire.id,
          { id: 0, nom, prenom, email }
        );
      } else {
        patchClientToSelectedTypeFormulaire(dispatch, { id: state.selectedClient.id, nom, prenom, email });
      }
      updateSelectedClient(dispatch, undefined);
    }
    setEmail("");
    setNom("");
    setPrenom("");
  };

  return (
    <Container title="Gestion des clients">
      <form className="titre my-2" onSubmit={handleOnSubmit} style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="saisieEmail">Email :</label>
        <input
          autoFocus={true}
          className="form-control"
          id="saisieEmail"
          onChange={handleOnChangeEmail}
          placeholder="Email..."
          style={{ left: "0px" }}
          type="text"
          value={email}
        />
        <label htmlFor="saisieNom" style={{ left: "10px" }}>Nom :</label>
        <input
          className="form-control"
          id="saisieNom"
          onChange={handleOnChangeNom}
          placeholder="Nom..."
          style={{ left: "10px" }}
          type="text"
          value={nom}
        />
        <label htmlFor="saisiePrenom" style={{ left: "20px" }}>Prénom :</label>
        <input
          className="form-control"
          id="saisiePrenom"
          onChange={handleOnChangePrenom}
          placeholder="Prénom..."
          style={{ left: "20px" }}
          type="text"
          value={prenom}
        />
        <button className="btn btn-info mx-3" type="submit">
          {state.selectedClient === undefined ? "Ajouter" : "Valider"}
        </button>
      </form>
      <ListClients />
      <QuitToRootPath />
    </Container>
  );
};

export default ClientsConfig;