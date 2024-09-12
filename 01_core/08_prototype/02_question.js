
// Animal 과 Dog 클래스 구현

// Animal 은 name 과 speak 메소드를 가짐
// speak 는 나는 [name] 출력

// Dog 는 Animal 을 상속받고
// breed 속성을 가짐. 개의 품종
// bark 메소드를 가지고 메소드는 "나는 [breed]"를 출력

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(){
        console.log(`나는 ${this.name}.`);
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    bark(){
        console.log(`나는 ${this.breed}.`)
    }
}

const dog1 = new Dog("초롱이", "말티즈");
dog1.bark();
dog1.speak();



const animal = {
    speak2(){
        console.log(`나는 ${this.name2}.`);
    }
}

const dog2 = Object.create(animal);

dog2.name2 = "ChrongEE";
dog2.bark2 = function(){
    console.log(`나는 ${this.breed2}`);
}

dog2.breed2 = "Maltees"
dog2.speak2();
dog2.bark2();
