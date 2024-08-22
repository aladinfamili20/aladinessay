import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Books from './pages/Books';
import Stories from './pages/Stories';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/stories" element={<Stories />} />
    </Routes>
    </BrowserRouter>
   );
}

export default App;
