import './App.css';
import Board from './components/Board';
import FancyBorder from './components/FancyBorder';
import Image from './components/Image';
import InlineCss from './components/InlineCss';
import Profile from './components/Profile';
import StyledApp from './components/StyledApp';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// Route path="/board/boardID/:boardID"라고하면 더 안전
