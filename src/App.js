import './App.css';
import './Fonts/Font.css';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import Main from './components/Main.js';
import Playlist from './components/Playlist.js';
import Loading from './components/Loading.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/question' element={<Question/>}></Route>
        <Route path='/loading' element={<Loading/>}></Route>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/result' element={<div>결과페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
