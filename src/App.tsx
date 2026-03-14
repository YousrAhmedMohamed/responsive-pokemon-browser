import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonListPage from './features/pokemon-list/PokemonListPage';
import PokemonDetailsPage from './features/pokemon-detail/PokemonDetailsPage';
import { Suspense } from 'react';
import { PaginationSpinner } from './components/ui/loader/Loader';

function App() {
  return (
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
  );
}

export default App;