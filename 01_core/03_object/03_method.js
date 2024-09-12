
// 자바스크립트 함수는 property 값으로 사용할 수 있다..

let dog = {
    name : "뽀삐",
    // eat : function(food){
    //     console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    // }
    // eat : (food) => {
    //     console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    // }
    // 화살표 함수는 this 를 가져오지 못한다..
    eat : (name,food) => {
        console.log(`${name}는 ${food}를 맛있게 먹어요`);
    }

};

dog.eat("뽀삐","고구마");