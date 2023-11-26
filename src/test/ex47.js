function test(callback) {
  callback();
}

const callback = () => {
  console.log("콜백");
};

test(callback);