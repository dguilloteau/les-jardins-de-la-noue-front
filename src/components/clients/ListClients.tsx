import { MouseEvent } from "react";
import { deleteClientToSelectedTypeFormulaire, updateSelectedClient } from "../../context/dispatcher";
import { useAppContext } from "../../context/useAppContext";
import { Client } from "../../models/DtoStructures";
import { triAscById } from "../../utils/Utils";

type Props = {
  client: Client;
};

const Item = ({ client }: Readonly<Props>) => {
  const { state, dispatch } = useAppContext();

  const handleOnClickModifier = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateSelectedClient(dispatch, client);
  };

  const handleOnClickSupprimer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteClientToSelectedTypeFormulaire(dispatch, client.id);
    updateSelectedClient(dispatch, undefined);
  };

  return (
    <li className="list-group-item" style={{ display: "flex", gap: "10px" }}>
      <button className="btn btn-info" onClick={handleOnClickModifier} type="button">Modifier</button>
      {state.selectedClient === undefined ?
        <button className="btn btn-info" onClick={handleOnClickSupprimer} type="button">Supprimer</button>
        : null}
      <label className="label" style={{ left: "10px" }}>{client.email} {client.nom} {client.prenom}</label>
    </li>
  );
};

const ListClients = () => {
  const { state } = useAppContext();
  return (
    <ul className="list-group">
      {state.selectedTypeFormulaire.clients && state.selectedTypeFormulaire.clients.length > 0 ? state.selectedTypeFormulaire.clients.toSorted(triAscById).reverse().map((client) => (
        <Item client={client} key={client.id} />
      )) : null}
    </ul>
  );
};

export default ListClients;