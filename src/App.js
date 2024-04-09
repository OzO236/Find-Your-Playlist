import './App.css';
import './Fonts/Font.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.js';
import Playlist from './components/Playlist.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/question' element={<div>질문페이지</div>}></Route>
        <Route path='/result' element={<div>결과페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
