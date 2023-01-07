import React from 'react'

// props = {
//     text: "hello, prps world";
// }

export default function MainHeader(props) {
    // const obj = {
    //     str: "test",
    //     num:10
    // }
    // console.log(obj.str);
    // console.log(obj.num);
    // const str = obj.str; 밑에거랑 똑같은건데 밑에거는 구조분해 할당의 방식임.

    //// const {str} =obj;  //오브젝트내부에있는 스트링이라는키를 스트링으로 선언하겠다
    // const {str, num } =obj; //스트링은 스트림에 선언 넘은 넘이라는거에 선언하겠다
    // console.log(str);
    // console.log(num);
    
    const {text,href,userID}= props; //프롭스에서 텍스트 href유저아이디를 가져와라
    
  return (
    <div>
      <h1>{userID}님 반갑습니다!</h1>
      <a href={href}>{text}</a>
    </div>
  )
}


//컴포넌트 내용바꾸는 법 프롭스!!!
//부모컴포넌트가 자식컴포넌트에게보낸다.  MainHeader({text})는 메인헤더안애서 객체안에있는것중에서 text를받겠다는 의미로, 이건 구조분해할당임
//props라는 객체안의 text라는것을 인자로 받아온것이다. 구조분해할당임.
//props자체가 객체를 의미하기때문에 그대로 통으로받을려면 mianheader(props)라고 중괄호없이쓰고
//프롭스안에있는 특정한걸 받고싶으면 중괄호 쓰는거임 


// //props = {
//     text:"go naver",
//     href: "http:",
    
// } 이렇게 돼있어서 props.userID props.text이런식으로 쓰는거임 