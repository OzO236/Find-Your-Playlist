import './App.css';
import './Fonts/Font.css';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>메인페이지</div>}></Route>
        <Route path='/question' element={<Question/>}></Route>
        <Route path='/result' element={<div>결과페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
