
// property 값 변경, 추가, 삭제

let dog = {
    name : "흰둥이"
};

dog.name = "뽀삐";
dog['name'] = "뽀삐";
// 둘 다 가능
console.log(dog);

// property 동적 추가
dog.age = 5;
// dog['age'] = 5;
console.log(dog);

// property 삭제
// delete 연산자는 객체의 property를 삭제한다.
// 존재하지 않는 property 를 삭제하면 에러 없이 무시된다.
delete dog.age;
console.log(dog);
delete dog.age;
console.log(dog);