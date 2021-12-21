import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Todos } from './components/Todos';
import { Toggles } from './components/Toggles';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/toggles" element={<Toggles />} />
      </Routes>
    </Router>
  );
}

export default App;
