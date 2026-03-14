import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonListPage from './features/pokemon-list/PokemonListPage';
import PokemonDetailsPage from './features/pokemon-detail/PokemonDetailsPage';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PaginationSpinner } from './components/ui/loader/Loader';

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Something went wrong:</h2>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <Suspense fallback={<PaginationSpinner />}>

        <Router>
          <Routes>
            <Route path="/" element={<PokemonListPage />} />

            <Route path="/pokemon/:name" element={
              <Suspense
                fallback={<PaginationSpinner />}>
                <PokemonDetailsPage />
              </Suspense>
            } />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;