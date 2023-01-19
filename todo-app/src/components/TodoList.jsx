import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const inputRef = useRef();
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  ); //state.todo.까지만 하면 index.js의 export default combineReducer({
  //todo,까지 가져온거임
  //   const todoList= list.filter로 해도됨.. done이 펄스인애만 남겨라

  const nextID = useSelector((state) => state.todo.nextID); //새로 추가되면 넥스트아이디엔 3이들어가 있ㅇ르거임. 원래는 0,1,2가 들어오는데
  const dispatch = useDispatch();
  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value })); //여기서 완료누르면 list.length가 다시1돼서 키값이겹쳐서 오류남
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
