//@ts-check

// const str = "Hello";
// const num = Math.log(str);
// console.log(num);

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(...arr);

//전개연산자는 배열을 깨뜨리고 들어있는 값들을 뿌려주는 역할을 한다

// const copyArr = arr;
//이렇게하면 메모리주소가 카피되게됨
// console.log(copyArr);

//console.log(arr === copyArr); //메모리주소가 서로 같다 true  node main.js로 확인
//배열의 주소말고 내부에 있는 값만을 카피하고 싶을때

const copyArr = [...arr]; //전개연산자
console.log(copyArr);
console.log(arr === copyArr); //false가 뜸

const obj = {
  pororo: "뽀로로",
  lupy: "루피",
  crong: "크롱",
};

console.log({ ...obj });

const copyObj = { ...obj, lupy: "lupy" }; //오브젝트를 넣어준다 //루피만 영어로이름을 바꿔서 가져온다

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj); //실제적으로 메모리주소는 다르다. 키와값만 동일한거지. 그래서false임

//나머지 그대로가져가고 특정키의 값만 바꿀때 이런 전개연산자를 쓴다

// function foo(a,b,c,d,e,f,g){

// }

function foo(a, b, ...rest) {
  rest = { c: "dd", d: "dd" };
}
//a,b빼고 나머지값들을 저런식으로 가져온다..(?)
