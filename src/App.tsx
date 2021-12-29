import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Todos } from './components/Todos';
import { Toggles } from './components/Toggles';
import { ProfileForm } from './components/ProfileForm';
import { BasicForm } from './components/BasicForm';

import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/toggles" element={<Toggles />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/basic-form" element={<BasicForm />} />
      </Routes>
    </Router>
  );
}

export default App;
