import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/" element={<Pokemons />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
