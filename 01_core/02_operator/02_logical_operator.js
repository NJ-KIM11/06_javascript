
// 논리 연산자
// || , &&, !

// OR, AND 연산자 표현식의 결과가 때로는 boolean 이 아닐 수 있다..

console.log('apple'||'banana');
console.log(false||'banana');
// OR 는 먼저 Truthy 인 값을 반환


console.log('apple' && 'banana');
console.log(false && 'apple');
// AND 는 둘다 true 여야 하기 때문에 둘다 Truthy 인 경우 마지막으로 확인 하는 우항의 값을 반환

let num = 1;

if(num % 2 == 0){
    console.log("짝수입니다.")
}else{
    console.log("홀수입니다.")
}

num % 2 == 0 && console.log("짝수입니다.")
num % 2 == 0 || console.log("홀수입니다.")


let obj = null;
// 객체라고 기대하는 변수가 null 또는 undefined 일 때

// let val = obj.value;
let val = obj && obj.value;