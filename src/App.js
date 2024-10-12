import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './route/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
