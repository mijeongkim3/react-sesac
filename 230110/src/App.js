import logo from './logo.svg';
import './App.css';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Test from './components/Test';
import Test2 from './components/Test2';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';

import { usestate } from 'react';
import { useState } from 'react';

function App() {
  // const info = [
  //   //배열
  //   { name: '코디', email: 'codee@gmail.com' },
  //   { name: '윤소희', email: 'ysh@gmail.com' },
  // ];

  // function aaa() {
  //   document.querySelector("input").value
  //   document.querySelector("input").value
  //   setInfo()
  //   }

  const [info, setInfo] = useState([
    { name: '코디', email: 'codee@gmail.com' },
    { name: '김미정', email: 'ysh@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        placeHolder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="email"
        placeHolder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setInfo(info.concat({ name: name, email: email }));
          setName('');
          setEmail('');
        }}
      >
        등록
      </button>
      {info.map((element, i) => (
        <h2 key={i}>
          {element.name} : {element.email}
        </h2>
      ))}
    </div>
  );
}

export default App;
