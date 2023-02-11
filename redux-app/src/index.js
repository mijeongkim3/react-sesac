import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; //리덕스 쓰려면 필요한 코드

const weight = 100;

function reducer(state = weight, action) {
  if (action.type === '증가') {
    state += 1;
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    return state;
  }
}
let store = createStore(reducer); //리덕스 쓰려면 필요한코드 리듀스를 스토어에 담아준다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //스토어는 위에서만든 스토어다 라는 뜻.
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
