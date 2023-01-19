//리덕스 통합 관리
import { combineReducers } from 'redux';
import todo from './modules/todo';

export default combineReducers({
  todo,
});
//선언한 스토어들을 합치는거
