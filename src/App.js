import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Watchlist } from './pages/Watchlist';
import { Media } from './pages/Media';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/minhalista' element={<Watchlist/>} />
        <Route path=':id' element={<Media/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
