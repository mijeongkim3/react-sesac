import { useState } from 'react';
import Contact from './Contact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  var a = 1;
  var b = 2;
  a = b; //b에있는값이 a에 들어가는거
  console.log(a); //2
  var aa = [1, 2, 3];
  //var aa= [...1,2,3];
  var bb = aa; //객체나 배열은 값이 아니라 값이 존재하는 주소를 복사함
  // 123 = [1,2,3]
  // aa =123
  //bb = aa -> bb에 =123이라는 주소가 들어갔다. 그래서 aa랑 bb가 가리키는 주소가 동일해서 두개값이 동일해지는거임 그래서 둘중 하나에 4를 넣으면 aa나 bb에 둘다 4가 들어가게 되는거임.
  bb.push(4);
  console.log(aa); //aa랑 bb둘다 4가 나오는데 그래서 state도 push하면안됨
  console.log(bb);
  //전개하면 객체를 새롭게만들겟다.
  var a = 1;

  function reducer(state = [], action) {
    if (action.type == 'ADD') {
      //액션으로넘어온것중에 타입이 애드면 새로운 스테이트로넘어올건데 기존 스테이트복제할거고 그게...STATE,새롭게보낸 액션 리턴해라.ACTION.PAYLOAD
      return [...state, action.payload];
      //  state.push(action.payload); 이렇게 두줄 쓰면 안먹힘. 배열은 복제가 안됨. 리듀서가 스테이트 반환하는데 그럼 주소값이 같다고 생각해서 랜더링을 하지 않음. 셋스테이트에서도 주소가 동일하면 랜더링을 하지않음 그래서 전개연산자를 통해서 새로만들어줘야됨 전개연산자는 새로 전개해서 새로운 배열에 넣겠다는 뜻임. 그래야 리랜더링됨
      //  return state;

      //var newState = Object.assign(state); 이건 재할당!전개연산자 대신 이거 세줄써도됨..
      //newState.push(action.payload);
      //return newState;
    }
    return state; //리턴 꼭해줘야됨
  }
  const store = createStore(reducer);
  const [list, setList] = useState([]); //이상태에선 실제로 스테이트가존재하는건 앱임  //엥 이거 지우면 안돌아가는뎅?
  return (
    <>
      <Provider store={store}>
        현재 개수: {list.length}
        <br />
        {/* <Contact list={list} setList={setList} /> */}
        <Contact />
      </Provider>
    </>
  );
}
