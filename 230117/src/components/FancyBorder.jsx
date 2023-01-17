import React from 'react';

export default function FancyBorder(props) {
  return (
    <div style={{ border: `3px solid ${props.color}` }}>{props.children}</div>
  );
}

// app.js에 이렇게 적어야됨
// function App() {
//     return (
//       <div className="App">
//         <FancyBorder color="orange">
//           <h1>Hello, props.children </h1>
//           <span>이건 유용합니다</span>
//         </FancyBorder>
//       </div>
//     );
//   }

// 혹은 이거
// <div className="App">
//       <FancyBorder color="orange">
//         <TestCss />
//       </FancyBorder>
//     </div>
