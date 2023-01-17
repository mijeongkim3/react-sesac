import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  //   const params = useParams(); 이걸로쓰면 retunr header밑에 <h2>{params.boardID} 번 글입니다. </h2>라고써야됨
  const { boardID } = useParams();
  //   console.log(params);

  return (
    <>
      <Header />
      <h2>{boardID} 번 글입니다. </h2>
    </>
  );
}

//app.js function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/board" element={<Board />} />
//         <Route path="/board/:boardID" element={<BoardDetail />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
