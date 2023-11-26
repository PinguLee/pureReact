const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

promise.then((value) => {
  console.log(value);
});