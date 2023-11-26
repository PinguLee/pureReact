// 함수 표현식
const add = (a, b) => a + b;

// 함수 선언식
function add(a, b) {
  return a + b;
}

// 함수 표현식의 유효 범위
console.log(add(1, 2)); // 3

// 함수 선언식의 유효 범위
add(3, 4); // 7