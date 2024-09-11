
// 함수 표현식 -- 변수에 함수를 담는 것을 함수 표현식 이라고 한다.

// 함수명을 생략할 수 있다.
let hello = function(name){
    return `${name}님 안녕하세요`;
}

console.log(hello("홍길동"));

let calc = function add(a,b){
    return a+b;
}
console.log(typeof calc);
// let calc2 = {
//     function add(a,b){
//     return a+b;}

// }

console.log(calc(10,20));
// console.log(add(10,20));