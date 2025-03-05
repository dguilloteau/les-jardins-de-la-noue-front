import ReactHtmlParser from "react-html-parser";
import { useLocation } from "react-router-dom";
import { getMailRender } from "../../services/MailsService";
import Container from "../Container";
import { useEffect, useState } from "react";
import QuitToRootPath from "../buttons/QuitToRootPass";

const MailViewer = () => {
  const [nodes, setNodes] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const formId: string = location.state;
  let mailPage;

  useEffect(() => {
    getAllNodes();
  }, []);

  const getAllNodes = () => {
    mailPage = getMailRender(formId).then((response) => {
      setNodes(response);
      setIsLoading(false);
    });
  };
  console.log(mailPage);

  return (
    <Container title="Visualisation du formulaire">
        {isLoading ? <div>Loading...</div> : <div>{ReactHtmlParser(nodes)}</div>}
        <QuitToRootPath />
    </Container>
  );
};

export default MailViewer;