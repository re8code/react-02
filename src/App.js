import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './route/Home.js';
import Page1 from './route/Page1.js';
import Page2 from './route/Page2.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
