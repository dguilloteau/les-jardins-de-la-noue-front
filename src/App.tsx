import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import Gestion from "./components/pages/Gestion";
import Types from "./components/pages/Types";
import MailViewer from "./components/pages/MailViewer";
import ClientsConfig from "./components/pages/ClientsConfig";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Gestion />} path='/' />
          <Route element={<Types />} path='/types' />
          <Route element={<MailViewer />} path='/mailViewer' />
          <Route element={<ClientsConfig />} path='/clientsConfig' />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary >
  );
};

export default App;
