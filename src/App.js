import './App.css';
import './Fonts/Font.css';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import Main from './components/Main.js';
import Playlist from './components/Playlist.js';
import { useState } from 'react';



function App() {
  {/* 결과 업데이트는 질문페이지에서 하고 업데이트결과는 결과페이지로 전송 */}
  const [resultData, setResultData] = useState(null); //투표 결과데이터 상태 추가

  //console.log(resultData)

  return (
    <div className="App">
      <Routes>
        <Route path='/question' element={<Question setResultData={setResultData}/>}></Route>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/result' element={<Playlist resultData={resultData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
