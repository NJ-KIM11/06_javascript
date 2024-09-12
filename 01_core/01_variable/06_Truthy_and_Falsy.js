
// 자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy Falsy 로 구분한다..
// 암묵적 타입 변환이 일어난다..

let test1;
console.log(test1);
console.log(!!test1);
console.log(!test1);

// 객체 리터럴
let test = {
    a : null,
    b : 0,
    fun(){
        console.log("testtest");
    }
};

console.log(test);
console.log(test.fun());

if(test?.b){
    console.log("true");
}else{
    console.log("false");
}

test = null;
if(test?.b){
    console.log("true");
}else{
    console.log("false");
}
// ? 가 있으면 먼저 객체가 존재하는지를 확인


test?.b ? console.log(true) : console.log(false);