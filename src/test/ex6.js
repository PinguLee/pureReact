const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('입력 : ', (num) => {
  num = parseInt(num);

  if (num % 2 === 0) {
    console.log('짝수');
  } else {
    console.log('홀수');
  }

  rl.close();
});