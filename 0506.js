// const arr = [1, 2, 3, 4, 5];

// // 인수로 전달 받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
// arr.fill(0);
// console.log(arr); // [0, 0, 0, 0, 0]

// // 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
// arr.fill(5, 1);
// console.log(arr); // [0, 5, 5, 5, 5]

// // 인수로 전달받은 값 0을 배열의 인덱스 1부터 3 이전(인덱스 3 미포함)까지 요소로 채운다.
// arr.fill(7, 1, 3);
// console.log(arr); // [0, 7, 7, 5, 5]

var score = [4, 11, 2, 10, 3, 1]; 

/* 정상 동작 */
score.sort(function(a, b) { // 오름차순
    console.log(a-b);
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

// score.sort(function(a, b) { // 내림차순
//     return b - a;
//     // 11, 10, 4, 3, 2, 1
// });