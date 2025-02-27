import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Gestion from "./components/pages/Gestion";
import Types from "./components/pages/Types";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gestion />} />
          <Route path='/types' element={<Types />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary >
  );
}

export default App
