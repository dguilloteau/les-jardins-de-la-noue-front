import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import Gestion from "./components/pages/Gestion";
import Types from "./components/pages/Types";
import MailViewer from "./components/pages/MailViewer";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Gestion />} path='/' />
          <Route element={<Types />} path='/types' />
          <Route element={<MailViewer />} path='/mailViewer' />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary >
  );
};

export default App;
