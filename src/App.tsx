import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonListPage from './features/pokemon-list/PokemonListPage';
import PokemonDetailPage from './features/pokemon-detail/PokemonDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;