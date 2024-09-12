
// 객체는 property 의 집합이며, property 는 키와 값으로 구성된다..

let student = {
    name : "유관순",
    age : 16
}

console.log(student);

let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "":"",
    0:1,
    var : "var",
    normal : "new normal"
};

let key2 = "test"
obj[key2] = "test value";

console.log(obj);

// key 값이 숫자일 경우 문자열로 바뀐후 가장 먼저 출력된다.
// key 값은 문자열만 된다.
// "", var       빈문자열과 var 와 같은 예약어는 사용가능 하지만 권장하지 않는다.

console.log(obj["test"]);