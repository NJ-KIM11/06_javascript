
// 배열 정렬 기준
let numbers = [];

for(i = 0; i<10; i++){
    numbers[i] = Math.floor(Math.random() * 100)+1;
}
console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);
// 배열은 기본적으로 문자열 정렬 따라서 앞자리부터 비교
// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
};

numbers.sort(compare);
console.log("매개변수로 compare 전달 후 숫자 오름차순 정렬");
console.log(numbers);

numbers.sort((a,b)=>a-b);   // a-b 가 양수면 sort 가 자체적으로 순서를 바꿈
console.log(numbers);