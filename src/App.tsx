import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import Gestion from "./components/pages/Gestion";
import Types from "./components/pages/Types";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Gestion />} path='/' />
          <Route element={<Types />} path='/types' />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary >
  );
};

export default App;
