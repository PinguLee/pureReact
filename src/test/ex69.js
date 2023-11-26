const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

promise.then((value) => {
  console.log("Promise 가 해결되었습니다.");
  console.log(value);
}, (error) => {
  console.log("Promise 가 거부되었습니다.");
  console.log(error);
});