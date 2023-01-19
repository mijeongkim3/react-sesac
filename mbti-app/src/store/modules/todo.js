const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
    //nextid: ,이런식으로 들어감
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts; //0부터시작 . 1부터시작이면 counts+1로 해야됨 //배열 밑에  nextID라는 키 가진게  하나식 늘어남

//액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수 설정
export function create(payload) {
  //payload가 있다는거는 컴포넌트에서 리듀서한테 데이터를 보낼게 있다는 뜻임//데이터를 페이로드에 받음
  return {
    type: CREATE, //create가 편지지임
    payload, //어떤일을할건지가 여기담김
  };
}

export function done(id) {
  //id만 가져오면돼서~ id만 넣어줌
  return {
    type: DONE,
    id,
  };
}

//리듀서
export default function todo(state = initState, action) {
  //여기서의 액션은 위의 done함수임
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1, //넥스트아이딕값을 프론트에서 받아서 처리할거임
      };
    //   return console.log('CREATE 호출');
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el, // 전개 연산자
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    //   return console.log('DONE 호출');
    default:
      return state;
  }
}
