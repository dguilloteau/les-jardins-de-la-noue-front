import AppProvider from './contexts/context';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './components/Main'
import "./App.css"


function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="Les jardins de la noue">
          <Main />
        </div>
      </ErrorBoundary >
    </AppProvider>
  );
}

export default App
