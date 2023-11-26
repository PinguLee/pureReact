let i = 1;

while (i <= 10) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  i++;
}