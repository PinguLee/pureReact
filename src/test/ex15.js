/* 
Truthy : 값이 조건식에서 true로 간주되는 값
Falsy : 값이 조건식에서 false로 간주되는 값
*/

// Truthy
if (true) {
  console.log("true는 truthy입니다.");
}
if (42) {
  console.log("양의 정수는 truthy입니다.");
}
if ("Hello") {
  console.log("문자열은 truthy입니다.");
}
if ({ key: "value" }) {
  console.log("객체는 truthy입니다.");
}
// Falsy
if (false) {
  console.log("false는 falsy입니다.");
}
if (0) {
  console.log("0은 falsy입니다.");
}
if ("") {
  console.log("빈 문자열은 falsy입니다.");
}
if (null) {
  console.log("null은 falsy입니다.");
}
if (undefined) {
  console.log("undefined는 falsy입니다.");
}

if (NaN) {
  console.log("NaN은 falsy입니다.");
}