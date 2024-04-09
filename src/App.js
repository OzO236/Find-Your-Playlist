import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>메인페이지</div>}></Route>
        <Route path='/question' element={<div>질문페이지</div>}></Route>
        <Route path='/result' element={<div>결과페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
