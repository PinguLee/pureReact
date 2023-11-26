const object = {
  address: "대덕대로",
  number: 182,
};

Object.keys(object).forEach(key => {
  console.log(`${key}: ${object[key]}`);
});