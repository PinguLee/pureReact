async function test() {
  throw new Error("예외가 발생했습니다.");
}
try {
  await test();
} catch (error) {
  console.log(error);
}