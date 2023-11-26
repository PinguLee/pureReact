const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Goodbye, World!");
  }, 2000);
});

promise1.then((value) => {
  return promise2;
}).then((value) => {
  console.log(value);
});