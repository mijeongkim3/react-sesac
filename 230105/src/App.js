import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Ex1 from "./components/Ex1";
import Condition from "./components/Condition";
import Ex2 from "./components/Ex2";

// function App() {
//   // let teacher = "이효석";

//   let [teacher, setTeacher] = useState("이효석");

//   function customSetTeacher(name) {
//     setTeacher(name);
//     console.log(teacher);
//   }
//   // function inEnglish() {
//   //   const spanEl = document.querySelector(".App>span");
//   //   spanEl.innerHTML = "tetz";
//   // teacher = "tetz";ds
//   // console.log(teacher);
//   // }

//   return (
//     <div className="App">
//       <button onClick={() => setTeacher("tetz")}>영어로!</button>
//       <br />
//       <span>{teacher}</span>
//     </div>
//   );
// }
// export default App;

function App() {
  return (
    <div className="App">
      <Ex2 />
    </div>
  );
}

export default App;
