import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Contact() {
  // const [list, setList] = useState([]);

  const list = useSelector((state) => state); //스토어에 존재하는 함수에 접근하기위해서 쓰는게 useselector /어딘가에 존재하는 스테이트를 가져와서 리스트에 넣겟다
  const dispatch = useDispatch();
  function writeList() {
    var action = {
      type: 'ADD', //타입도 그냥 다른걸로 바꿔도됨
      payload: {
        //페이로드는 데이터를 의미함 다른걸로 바꿔도됨
        writer: '1',
        title: 'a',
      },
    };
    dispatch(action);
  }
  //   let form = document.getElementById('form_write');
  //   let newList = {
  //     writer: form.writer.value,
  //     title: form.title.value,
  //   };

  //   setList([...list, newList]);
  // }
  return (
    <div>
      <form id="form_write" style={{ marginBottom: '15px' }}>
        <input type="text" name="writer" placeholder="작성자" />
        <input type="text" name="title" placeholder="제목" />
        <button type="button" onClick={writeList}>
          작성
        </button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, i) => {
            // value = { writer: ~~ , title~~ };
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
